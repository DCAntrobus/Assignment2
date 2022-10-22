import busconlistModel from '../models/businessContacts.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactBusinessList(req, res, next) {
    busconlistModel.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'businesscontacts/contactlist', bContacts: businessCollection, displayName: UserDisplayName(req) });
    })
}

export function DisplayContactAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact information', page: 'businesscontacts/listedit', bContacts: {}, displayName: UserDisplayName(req) });
}

export function ProcessBusinessContactAddPage(req, res, next) {
    let newContact = busconlistModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        company: req.body.company
    });

    busconlistModel.create({ newContact }, (err, BusinessContact) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/business-contact-list');
    })
}


export function DisplayContactEditPage(req, res, next) {
    let id = req.params.id;

    busconlistModel.findById(id, (err, bContacts) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Add Contact information', page: 'businesscontacts/listedit', bContacts: bContacts, displayName: UserDisplayName(req) });

    });

}
export function ProcessBusinessContactEditPage(req, res, next) {
    let id = req.params.id;

    let newContact = busconlistModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        company: req.body.company
    });

    busconlistModel.updateOne({ _id: id }, newContact, (err, BusinessContact) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/business-contact-list');
    })
}

export function ProcessBusinessContactDelete(req, res, next) {
    let id = req.params.id;

    busconlistModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contact-list');
    })
}


