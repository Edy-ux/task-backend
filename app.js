/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class App {
    constructor(controllers) {
        this.app = express();
        this.app.use(cors());

        this.initMongoose();
        this.connectDatabase();
        this.initExpressJson();
        this.initControllers(controllers);
    }

    initMongoose() {
        mongoose.set('runValidators', true);
        mongoose.set('strictQuery', true);
    }

    connectDatabase() {
        mongoose.connect(`${process.env.BATABASE_URL_KEY}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    initExpressJson() {
        this.app.use(express.json());
    }

    initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Aplicação iniciada na porta: ${port}
        http://localhost:${port}`);
        });
    }
}

export default App;
