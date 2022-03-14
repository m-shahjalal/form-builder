import { Link } from 'react-router-dom';
import './Layout.css';

const SideBar = () => {
	return (
		<div class='admin-sidebar'>
			<div class='flex items-center justify-center h-20 shadow-md'>
				<Link to='/' class='text-3xl uppercase text-primary'>
					Logo
				</Link>
			</div>
			<ul class='flex flex-col py-4'>
				<li>
					<Link to='/admin' class='admin-sidebar_link'>
						Dashboard
					</Link>
				</li>
				<li>
					<Link to='create-form' class='admin-sidebar_link'>
						Create Form
					</Link>
				</li>
				<li>
					<Link to='form-list' class='admin-sidebar_link'>
						List of forms
					</Link>
				</li>
				<li>
					<Link to='/admin/drafts' class='admin-sidebar_link'>
						Drafts
					</Link>
				</li>
				<li>
					<Link to='#' class='admin-sidebar_link'>
						<span class='text-sm font-medium'>Notifications</span>
						<span class='ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500'>
							5
						</span>
					</Link>
				</li>
				<li>
					<Link to='#' class='admin-sidebar_link'>
						<span class='text-sm font-medium'>Logout</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
