import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request, { params }: { params: { courseId: string } }) {
    const { courseId } = params;
    try {
        // Retrieve the user (if necessary)
        const user = await currentUser();
        if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Retrieve the course information from the database
        const course = await db.course.findUnique({
            where: { id: courseId, isPublished: true },
        });

        if (!course) {
            return new NextResponse("Course not found", { status: 404 });
        }
        const uniqueOrderNumber = Date.now();
        const clictopayUser = process.env.CLICTOPAY_USER;
        const clictopayPassword = process.env.CLICTOPAY_PASSWORD;

        if (!clictopayUser || !clictopayPassword) {
            console.error("Missing ClicToPay credentials in environment variables");
            return new NextResponse("Internal server error: Missing payment credentials", { status: 500 });
        }

        // Replace with the ClicToPay test URL
        const response = await fetch('https://test.clictopay.com/payment/rest/register.do', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                userName: clictopayUser,  // Merchant login
                password: clictopayPassword,  // Merchant password
                orderNumber: uniqueOrderNumber.toString(),  // Unique order number for the user and transaction
                amount: Math.round(course.price! * 100).toString(),  // Amount in cents
                currency: '788',  // Currency code for TND (Tunisian Dinar)
                returnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseId}?success=1&orderId=${uniqueOrderNumber}`,
                failUrl: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseId}?status=failed`,
            }),
        });

        const data = await response.json();
        console.log('Full ClicToPay Response:', data);

        if (data.errorCode) {
            console.error(`ClicToPay Error: Code ${data.errorCode} - ${data.errorMessage}`);
            let errorMessage = 'Une erreur est survenue lors du traitement de votre paiement.';

            switch (data.errorCode) {
                case 1:
                    errorMessage = 'Numéro de commande dupliqué. La commande a déjà été traitée.';
                    break;
                case 3:
                    errorMessage = 'Devise inconnue. Veuillez vérifier le code de la devise.';
                    break;
                case 4:
                    errorMessage = 'Paramètre requis manquant. Veuillez vous assurer que tous les champs sont correctement remplis.';
                    break;
                case 5:
                    errorMessage = 'Accès refusé. Veuillez vérifier vos identifiants ou vos permissions.';
                    break;
                case 7:
                    errorMessage = 'Erreur système. Veuillez réessayer plus tard.';
                    break;
                default:
                    errorMessage = `Erreur inattendue : ${data.errorMessage || 'Une erreur inconnue est survenue.'}`;
            }

            return new NextResponse(errorMessage, { status: 500 });
        }

        if (!data.formUrl) {
            return new NextResponse("Échec de la création de la session de paiement. Aucune URL de paiement retournée.", { status: 500 });
        }

        // Return the ClicToPay form URL to the client
        return NextResponse.json({ url: data.formUrl });

    } catch (error) {
        console.error('Erreur lors de la création de la session de paiement:', error);
        return new NextResponse("Erreur interne du serveur", { status: 500 });
    }
}