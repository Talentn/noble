import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const paymentRef = req.query.payment_ref as string;
    // Handle the webhook verification or processing here
    // You can use the paymentRef to fetch the payment details from your database or Konnect API
    console.log('Received webhook for payment:', paymentRef);
    res.status(200).json({ message: 'Webhook received successfully' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
