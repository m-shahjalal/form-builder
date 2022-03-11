export const handleLogin = (email, password) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			// return email && password
			return email === 'admin@admin.com' && password === '123456'
				? resolve(email)
				: reject('credential mismatch');
		}, 2000);
	});

export const signup = (email, password) => {};
