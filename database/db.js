import mongoose from "mongoose";
import dotenv from 'dotenv';
 dotenv.config();

const DBConnection = async () => {
 

    const MONGO_URI = `mongodb://anujam:1307@ac-cknogj1-shard-00-00.owzddlt.mongodb.net:27017,ac-cknogj1-shard-00-01.owzddlt.mongodb.net:27017,ac-cknogj1-shard-00-02.owzddlt.mongodb.net:27017/?ssl=true&replicaSet=atlas-fi9od2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;