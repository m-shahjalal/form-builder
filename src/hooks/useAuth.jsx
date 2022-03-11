import { useSelector } from 'react-redux';

const useAuth = () => {
	const user = useSelector((state) => state.user);
	const authObject = {
		user: user.user,
		error: user.error,
		loading: user.loading,
		isLoggedIn: false,
	};

	if (user.user) {
		authObject.isLoggedIn = true;
	} else {
		authObject.isLoggedIn = false;
	}

	return authObject;
};

export default useAuth;
