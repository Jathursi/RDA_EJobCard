import sequelize from '../config/sequelize.js';
import Other from '../Model/Other.js';
import OtherMac from '../Model/OtherMac.js';
import OtherTrans from '../Model/OtherTrans.js';
import OtherStock from '../Model/OtherStock.js';
import OtherWel from '../Model/OtherWel.js';
import OtherSun from '../Model/OtherSun.js';
import OtherOther from '../Model/OtherOther.js';

const OtherMockData = async () => {
    // try {
    //     // Ensure the database is synced without force to avoid dropping tables
    //     await sequelize.sync({ force: false });

    //     // Prepare mock data for Estimate table
    //     const estimateData = [
    //         {
    //             Date: new Date(),
    //             Estimated: 1000,
    //             book_id: 1
    //         },
    //         {
    //             Date: new Date(),
    //             Estimated: 2000,
    //             book_id: 2
    //         }
    //     ];

    //     // Insert mock data into Estimate table
    //     const estimateRecords = await Estimate.bulkCreate(estimateData, { returning: true });

    //     // Prepare mock data for Labour and Material tables
    //     const labourData = [
    //         {
    //             Labour: 'Labour 1',
    //             Lab_cost: 100,
    //             LabQ: 10,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Labour: 'Labour 2',
    //             Lab_cost: 200,
    //             LabQ: 20,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];

    //     const materialData = [
    //         {
    //             Material: 'Material 1',
    //             Mat_cost: 300,
    //             MatQ: 30,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Material: 'Material 2',
    //             Mat_cost: 400,
    //             MatQ: 40,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];

    //     const machineData = [
    //         {
    //             Machining: 'Machine 1',
    //             Mac_cost: 500,
    //             MacQ: 50,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Machining: 'Machine 2',
    //             Mac_cost: 600,
    //             MacQ: 60,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];

    //     const transData = [
    //         {
    //             Transport: 'Transport 1',
    //             Trans_cost: 700,
    //             TransQ: 70,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Transport: 'Transport 2',
    //             Trans_cost: 800,
    //             TransQ: 80,
    //             EstimateId: estimateRecords[1].id
    //         },
    //     ];

    //     const stockData = [
    //         {
    //             Stock: 'Stock 1',
    //             Stock_cost: 900,
    //             StockQ: 90,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Stock: 'Stock 2',
    //             Stock_cost: 1000,
    //             StockQ: 100,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];
    //     const welfareData = [
    //         {
    //             Welfare: 'Welfare 1',
    //             Wel_cost: 1100,
    //             WelQ: 110,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Welfare: 'Welfare 2',
    //             Wel_cost: 1200,
    //             WelQ: 120,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];
    //     const sundryData = [
    //         {
    //             Sundry: 'Sundry 1',
    //             Sun_cost: 1300,
    //             SunQ: 130,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Sundry: 'Sundry 2',
    //             Sun_cost: 1400,
    //             SunQ: 140,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];
    //     const otherData = [
    //         {
    //             Other: 'Other 1',
    //             Other_cost: 1500,
    //             OtherQ: 150,
    //             EstimateId: estimateRecords[0].id
    //         },
    //         {
    //             Other: 'Other 2',
    //             Other_cost: 1600,
    //             OtherQ: 160,
    //             EstimateId: estimateRecords[1].id
    //         }
    //     ];

    //     // Insert mock data into Labour and Material tables

    //     await EstLab.bulkCreate(labourData);
    //     await EstMat.bulkCreate(materialData);
    //     await EstMac.bulkCreate(machineData);
    //     await EstTrans.bulkCreate(transData);
    //     await EstStock.bulkCreate(stockData);
    //     await EstWel.bulkCreate(welfareData);
    //     await EstSun.bulkCreate(sundryData);
    //     await EstOther.bulkCreate(otherData);

    //     console.log('Mock data inserted successfully');
    // }
    // catch (error) {
    //     console.error('Error inserting mock data:', error);
    // }

    try {
        // Ensure the database is synced without force to avoid dropping tables
        await sequelize.sync({ force: false });

        // Prepare mock data for Other table
        const otherData = [
            {
                book_id: 1
            },
            {
                book_id: 2
            }
        ];

        // Insert mock data into Other table
        const otherRecords = await Other.bulkCreate(otherData, { returning: true });

        // Prepare mock data for Labour and Material tables
        const otherMacData = [
            {
                Machining: 'OtherMac 1',
                Mac_cost: 100,
                MacQ: 10,
                Mac_Sup: 'Supplier 1',
                Mac_date: '2023-10-01',
                Mac_Auth: 'Auth 1',
                other_id: otherRecords[0].id
            },
            {
                Machining: 'OtherMac 2',
                Mac_cost: 200,
                MacQ: 20,
                Mac_Sup: 'Supplier 2',
                Mac_date: '2023-10-02',
                Mac_Auth: 'Auth 2',
                other_id: otherRecords[1].id
            }
        ];

        const otherTransData = [
            {
                Transport: 'OtherTrans 1',
                Trans_cost: 300,
                TransQ: 30,
                Trans_Sup: 'Supplier 3',
                Trans_date: '2023-10-03',
                Trans_Auth: 'Auth 3',
                other_id: otherRecords[0].id
            },
            {
                Transport: 'OtherTrans 2',
                Trans_cost: 400,
                TransQ: 40,
                Trans_Sup: 'Supplier 4',
                Trans_date: '2023-10-04',
                Trans_Auth: 'Auth 4',
                other_id: otherRecords[1].id
            }
        ];
        const otherStockData = [
            {
                Stock: 'OtherStock 1',
                Stock_cost: 500,
                StockQ: 50,
                Stock_Sup: 'Supplier 5',
                Stock_date: '2023-10-05',
                Stock_Auth: 'Auth 5',
                other_id: otherRecords[0].id
            },
            {
                Stock: 'OtherStock 2',
                Stock_cost: 600,
                StockQ: 60,
                Stock_Sup: 'Supplier 6',
                Stock_date: '2023-10-06',
                Stock_Auth: 'Auth 6',
                other_id: otherRecords[1].id
            }
        ];
        const otherWelData = [
            {
                Welding: 'OtherWel 1',
                Wel_cost: 700,
                WelQ: 70,
                Wel_Sup: 'Supplier 7',
                Wel_date: '2023-10-07',
                Wel_Auth: 'Auth 7',
                other_id: otherRecords[0].id
            },
            {
                Welding: 'OtherWel 2',
                Wel_cost: 800,
                WelQ: 80,
                Wel_Sup: 'Supplier 8',
                Wel_date: '2023-10-08',
                Wel_Auth: 'Auth 8',
                other_id: otherRecords[1].id
            }
        ];
        const otherSunData = [
            {
                Sundries: 'OtherSun 1',
                Sun_cost: 900,
                SunQ: 90,
                Sun_Sup: 'Supplier 9',
                Sun_date: '2023-10-09',
                Sun_Auth: 'Auth 9',
                other_id: otherRecords[0].id
            },
            {
                Sundries: 'OtherSun 2',
                Sun_cost: 1000,
                SunQ: 100,
                Sun_Sup: 'Supplier 10',
                Sun_date: '2023-10-10',
                Sun_Auth: 'Auth 10',
                other_id: otherRecords[1].id
            }
        ];

        const otherOtherData = [
            {
                other: 'OtherOther 1',
                other_cost: 1100,
                otherQ: 110,
                other_Sup: 'Supplier 11',
                other_date: '2023-10-11',
                other_Auth: 'Auth 11',
                other_id: otherRecords[0].id
            },
            {
                other: 'OtherOther 2',
                other_cost: 1200,
                otherQ: 120,
                other_Sup: 'Supplier 12',
                other_date: '2023-10-12',
                other_Auth: 'Auth 12',
                other_id: otherRecords[1].id
            }
        ];
        
        await OtherMac.bulkCreate(otherMacData);
        await OtherTrans.bulkCreate(otherTransData);
        await OtherStock.bulkCreate(otherStockData);
        await OtherWel.bulkCreate(otherWelData);
        await OtherSun.bulkCreate(otherSunData);
        await OtherOther.bulkCreate(otherOtherData);

        console.log('Mock data inserted successfully');
    }
    catch (error) {
        console.error('Error inserting mock data:', error);
    }
};

OtherMockData();