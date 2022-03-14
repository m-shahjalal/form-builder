import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
	return (
		<div class='min-h-screen flex flex-row'>
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Layout;
