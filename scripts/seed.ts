const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try{
        await database.category.createMany ({
            data: [
                { name: "Physique"},
                { name: "Chimie"}
            
            ]
        });
        console.log("Success")
    } catch (error) {
        console.log("erreur", error);
    } finally {
        await database.$disconnect();
    }

    try{
        await database.bac.createMany ({
            data: [
                { name: "Bac Sciences"},
                { name: "Bac Technique"},
                { name: "Bac Mathématiques"},
                { name: "Bac Informatique"}
            
            ]
        });
        console.log("Success")
    } catch (error) {
        console.log("erreur", error);
    } finally {
        await database.$disconnect();
    }
    
}

main();