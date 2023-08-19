const admin = require("../config/firebase-config");

class FirebaseAuthenticationMiddleware {
    async decodeToken(req, res, next) {
        if(req.headers.authorization == null) {
            return res.status(403).json({ message: "Unauthorised Request" });
        }

		const authorizationToken = req.headers.authorization;

		if(authorizationToken.startsWith("Baerer")) {
			authorizationToken = req.headers.authorization.split[" "];
		}

		admin.auth()
			.verifyIdToken(authorizationToken)
			.then((decodedToken) => {
				res.locals.authorizationContext = {
					user_id: decodedToken.user_id,
					email: decodedToken.email,
					uid: decodedToken.uid
				};
				return next();
			})
			.catch((error) => {
				console.error(error);
				return res.status(403).json({ message: "Unauthorised Request" });
			});
	}
}

module.exports = new FirebaseAuthenticationMiddleware();
