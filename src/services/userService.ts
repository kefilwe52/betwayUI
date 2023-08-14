const BASE_URL = 'https://localhost:7084';

export const userService = {

    async login(email: string, password: string) {
        const response = await fetch(`${BASE_URL}/api/User/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            let errorMessage = 'Failed to login';

            try {
                const errorResponse = await response.json();
                errorMessage = errorResponse.message || errorMessage;
            } catch (_) {
            }

            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    },


    async signup(user: Partial<User>) {
        const response = await fetch(`${BASE_URL}/api/User/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorMessage = errorResponse.message || 'Failed to signup';
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    },

}


export default userService;