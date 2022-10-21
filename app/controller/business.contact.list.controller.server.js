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

export function DisplayContactAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact information', page: 'businesscontacts/listedit', businessContact: {} });
}