import mongoose from "mongoose";

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
        this.mongoConnection = mongoose.connect(
            url,

            {
                useNewUrlParser: true,
                useFindAndModify: true,
            }
        );
    }
}

export default new Database();
