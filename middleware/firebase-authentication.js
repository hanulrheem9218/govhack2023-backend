const admin = require("../config/firebase-config");

class FirebaseAuthenticationMiddleware {
    async decodeToken(req, res, next) {
        if(req.headers.authorization == null) {
            return res.status(403).json({ message: "Unauthorised Request" });
        }

		try {
			const decodeValue = await admin.auth().verifyIdToken(req.headers.authorization.split(' ')[1]);
			if (decodeValue) {
				return next();
			}
			return res.status(403).json({ message: "Unauthorised Request" });
		} catch (e) {
            console.error(e);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	}
}

module.exports = new FirebaseAuthenticationMiddleware();
