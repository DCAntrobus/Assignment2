export function homePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Desmond' });
}

export function aboutMePage(req, res, next) {
    res.render('index', { title: 'About', page: 'aboutme' });
}
export function projectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
export function servicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
export function contactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}