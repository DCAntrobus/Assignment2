import businessContacts from '../models/businessContacts.js';
import busconlistModel from '../models/businessContacts.js';

export function DisplayContactBusinessList(req, res, next) {
    busconlistModel.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'businesscontacts/contactlist', businessContacts: businessCollection })
    })
}

export function DisplayContactAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact information', page: 'businesscontacts/listedit', businessContacts: {} });
}

export function ProcessBusinessContactAddPage(req, res, next) {
    let newContact = busconlistModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    busconlistModel.create({ newContact }, (err, businessContact) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/business-contact-list');
    })
}


export function DisplayContactEditPage(req, res, next) {
    let id = req.params.id;

    busconlistModel.findById(id, (err, businessContacts) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Add Contact information', page: 'businesscontacts/listedit', businessContacts: businessContacts });

    })

}
export function ProcessBusinessContactEditPage(req, res, next) {
    let id = req.params.id;

    let newContact = busconlistModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    busconlistModel.updateOne({ _id: id }, newContact, (err, businessContact) => {
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