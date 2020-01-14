class UserAuthentication {
    constructor() {
        this.url = 'http://localhost:3000/api/chess/login'
    }

    async login(email, password) {
        const data = {
            email: email,
            password: password,
        };
        try {
            const auth = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'access-control-expose-headers': 'auth-token'
                },
                body: JSON.stringify(data)
            });
            return auth;

        } catch (error) {
            return error;
        }

    }
}