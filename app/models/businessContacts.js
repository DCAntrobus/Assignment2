import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bus_ContactSchema = new Schema({
    name: String,
    phone: Number,
    email: String
}, {
    timestamps: true,
    collection: 'businessContacts'
});

export default mongoose.model('BusinessContacts', bus_ContactSchema);