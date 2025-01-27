import mongoose from "mongoose";

const Connection = async () => {
    const url = "mongodb+srv://pronaybala:UL4iP4mal9VwG8XG@pronaymongodbcluster.vidlk03.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(url, {
            useUnifiedTopology: true,
        });
        console.log('database connected');
    } catch (error) {
        console.log("database connection faild" ,error.message);
    }
};

export default Connection;