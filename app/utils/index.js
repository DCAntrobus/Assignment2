export function UserDisplayName(req) {
    if (req.user) {
        return req.user.displayName;
    }
    return '';
}

// checks if User is authenticated

export function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
