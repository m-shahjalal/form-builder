import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='mb-32 sh-16'>
			<div className='header'>
				<nav className='flex justify-between max-w-5xl p-4 mx-auto'>
					<Link to='/' className='text-white mr-6'>
						<span className='logo-text'>Form builder</span>
					</Link>

					<div className='flex justify-end gap-4'>
						<a
							href='#responsive-header'
							className='header-list_item'>
							Docs
						</a>
						<a
							href='#responsive-header'
							className='header-list_item'>
							Examples
						</a>
						<a
							href='#responsive-header'
							className='header-list_item'>
							Blog
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
