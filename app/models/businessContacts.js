//import Mongoose 
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Schema with attributes 
const bus_ContactSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    company: String
}, {
    // Shows time stamps of updates
    timestamps: true,
    collection: 'bContacts'
});

export default mongoose.model('BusinessContacts', bus_ContactSchema);