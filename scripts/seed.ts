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
    
}

main();