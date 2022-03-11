import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CreateForm from '../pages/CreateForm';
import LoginPage from '../pages/LoginPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/create-form' element={<CreateForm />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
