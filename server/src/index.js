// require('dotenv').config({ path: './.env' });
import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config({
    path: './.env'
});



// connecting to the database
connectDB();


/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}}`)
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw error
    }

})() // IIFE - Immediately Invoked Function Expression

*/