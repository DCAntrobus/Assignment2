import busconlistModel from '../models/businessContacts.js';

export function DisplayContactBusinessList(req, res, next) {
    busconlistModel.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'businesscontacts/contactlist', businessContact: businessCollection })
    })
}