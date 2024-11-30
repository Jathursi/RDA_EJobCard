import sequelize from "../config/sequelize.js";
import Out from "../Model/Out.js";
import OutReg from "../Model/OutReg.js";
import Regist from "../Model/Regist.js"; // Import the Regist model

const createMockData = async () => {
    try {
        await sequelize.sync({ force: false }); // This will drop the table if it already exists and create a new one


        // Create some OutReg entries
        const outRegEntries = await OutReg.bulkCreate([
            { book_id: 1 },
            { book_id: 2 },
            // { book_id: 3 },
        ]);

        // Create some Out entries
        const outEntries = await Out.bulkCreate([
            {
                Date: "2023-10-01",
                Description: "Purchase of office supplies",
                Job_NO: "JOB123",
                Supplier: "Office Depot",
                cost: 150.75,
                Authority: "John Doe",
                Out_id: outRegEntries[0].id,
            },
            {
                Date: "2023-10-02",
                Description: "Repair services",
                Job_NO: "JOB124",
                Supplier: "Repair Co.",
                cost: 300.50,
                Authority: "Jane Smith",
                Out_id: outRegEntries[0].id,
            },
            {
                Date: "2023-10-03",
                Description: "Software subscription",
                Job_NO: "JOB125",
                Supplier: "Software Inc.",
                cost: 99.99,
                Authority: "Alice Johnson",
                Out_id: outRegEntries[0].id,
            },
        ]);

        console.log("Mock data inserted successfully");
    } catch (error) {
        console.error("Error inserting mock data:", error);
    } finally {
        await sequelize.close();
    }
};

createMockData();