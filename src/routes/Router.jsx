import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import AdminPage from '../pages/AdminPage';
import Dashboard from '../pages/AdminPage/Dashboard/Dashboard';
import CreateForm from '../pages/AdminPage/CreateForm/CreateForm';
import LoginPage from '../pages/LoginPage';
import Draft from '../pages/AdminPage/Draft/Draft';
import FormList from '../pages/AdminPage/FormList/FormList';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<LoginPage />
							<Footer />
						</>
					}
				/>
				<Route path='/admin' element={<AdminPage />}>
					<Route path='' element={<Dashboard />} />
					<Route path='create-form' element={<CreateForm />} />
					<Route path='drafts' element={<Draft />} />
					<Route path='form-list' element={<FormList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
