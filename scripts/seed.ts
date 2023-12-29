const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try{
        await database.category.createMany ({
            data: [
                { name: "Test"},
                { name: "Test1"},
                { name: "Test2"},
                { name: "Test3"},
                { name: "Test4"},
                { name: "Test5"},
                { name: "Test6"}
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