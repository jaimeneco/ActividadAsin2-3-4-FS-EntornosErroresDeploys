import mongoose from 'mongoose'

const options={
    collection: 'opinions',
    strict: true,
    collation:{
        locale: "es",
        strength: 1
    }
}

const opinionSchema = new mongoose.Schema({
    name:String,
    opinion: String
}, options)

export const Opinion = mongoose.model("Opinion", opinionSchema)