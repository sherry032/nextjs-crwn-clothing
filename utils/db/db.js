import { MongoClient} from "mongodb"

export const connectToDatabase= async() => {
    const client = await MongoClient.connect("mongodb+srv://testUser:mongodb2022@cluster0.hgkie.mongodb.net/auth-crwn-clothing?retryWrites=true&w=majority")

    return client
}