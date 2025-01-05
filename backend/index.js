import express from 'express';
import mysql from 'mysql2/promise'; // Using promise-based pool
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'osa',
});

app.get('/', (req, res) => {
    res.json('Hello backend');
});

// GET: Fetch all records from the "accreditation" table
app.get('/accreditation', async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM accreditation');
        res.json(data);
    } catch (err) {
        console.error('Error fetching accreditation data:', err);
        res.status(500).json({ error: 'Failed to fetch accreditation data' });
    }
});

// POST: Insert a new record into the "accreditation" table
app.post('/accreditation', async (req, res) => {
    const orgRandId = uuidv4();
    const actRandId = uuidv4();

    const insertOrgMemberQuery = `
        INSERT INTO org_member (org_id, name, position, contactNumber, studentNumber) 
        VALUES (?, ?, ?, ?, ?);
    `;
    const insertActivityQuery = `
        INSERT INTO activity (act_id, activity, learningOutcomes, targetTime, targetGroup, personsInvolved) 
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    const insertAccreditationQuery = `
        INSERT INTO accreditation (org_id, act_id, appendices, constitution, orgName, type, letter) 
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    // Values from request body
    const { constitution, orgName, type, members, planActivities, letter, appendices } = req.body;

    try {
        // Insert members into org_member table and get their org_id(s)
        const orgMemberIds = [];
        for (let member of members) {
            console.log(orgRandId)
            const memberValues = [
                orgRandId,
                member.name,
                member.position,
                member.contactNumber,
                member.studentNumber
            ];
            const [memberResult] = await db.query(insertOrgMemberQuery, memberValues);
            orgMemberIds.push(memberResult.insertId); // Get the org_id of the inserted org_member
        }

        // Insert activities into activity table and get their act_id(s)
        const activityIds = [];
        for (let activity of planActivities) {
            console.log(actRandId)
            const activityValues = [
                actRandId,
                activity.activity,
                activity.learningOutcomes,
                activity.targetTime,
                activity.targetGroup,
                activity.personsInvolved
            ];
            const [activityResult] = await db.query(insertActivityQuery, activityValues);
            activityIds.push(activityResult.insertId); // Get the act_id of the inserted activity
        }

        // Insert accreditation data into accreditation table
        console.log(orgRandId)
        console.log(actRandId)
        const accreditationValues = [
            orgRandId, // Use the first org_member's ID for org_id
            actRandId,  // Use the first activity's ID for act_id
            appendices,
            constitution,
            orgName,
            type,
            letter
        ];

        const [accreditationResult] = await db.query(insertAccreditationQuery, accreditationValues);

        // Respond with success
        res.status(201).json({
            message: 'Accreditation added successfully!',
            accreditationId: accreditationResult.insertId // Return the accreditation ID
        });

    } catch (err) {
        console.error('Error adding accreditation:', err);
        res.status(500).json({ error: 'Failed to add accreditation', details: err.message });
    }
});

    const createMemberTable = async () => {
        const query = `
            CREATE TABLE IF NOT EXISTS org_member (
                id INT AUTO_INCREMENT PRIMARY KEY,
                org_id VARCHAR(255), 
                name VARCHAR(255), 
                position VARCHAR(255), 
                contactNumber VARCHAR(255), 
                studentNumber VARCHAR(255)
            );
        `;
    
        try {
            await db.query(query);
            console.log('Table "org_member" created successfully!');
        } catch (err) {
            nsole.error('Error creating table "org_member":', err);
        }
    };
    
    const createActTable = async () => {
        const query = `
            CREATE TABLE IF NOT EXISTS activity (
                id INT AUTO_INCREMENT PRIMARY KEY,
                act_id VARCHAR(255), 
                activity VARCHAR(255), 
                learningOutcomes VARCHAR(255), 
                targetTime VARCHAR(255), 
                targetGroup VARCHAR(255), 
                personsInvolved VARCHAR(255)
            );
        `;
    
        try {
            await db.query(query);
            console.log('Table "activity" created successfully!');
        } catch (err) {
            console.error('Error creating table "activity":', err);
        }
    };
    
    const createAccreditationTable = async () => {
        const query = `
            CREATE TABLE IF NOT EXISTS accreditation (
                accre_id INT AUTO_INCREMENT PRIMARY KEY, 
                org_id VARCHAR(255), 
                act_id VARCHAR(255), 
                appendices VARCHAR(255), 
                constitution VARCHAR(255), 
                orgName VARCHAR(255), 
                type VARCHAR(255), 
                letter VARCHAR(255)
            );
        `;
    
        try {
            await db.query(query);
            console.log('Table "accreditation" created successfully!');
        } catch (err) {
            console.error('Error creating table "accreditation":', err);
        }
    };
    
    // Ensure tables are created in the correct order
    const initializeTables = async () => {
        await createMemberTable();
        await createActTable();
        await createAccreditationTable();
    };
    
    initializeTables();




app.listen(8800, () => {
    console.log('Server is running on http://localhost:8800');
});