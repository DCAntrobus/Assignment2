import { UserDisplayName } from "../utils/index.js";

export function homePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function aboutMePage(req, res, next) {
    res.render('index', { title: 'About', page: 'aboutme', displayName: UserDisplayName(req) });
}
export function projectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) });
}
export function servicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) });
}
export function contactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) });
}