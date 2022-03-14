import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { signUpHandler } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const { isLoggedIn, error, loading } = useAuth();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => dispatch(signUpHandler(data));

	useEffect(() => {
		isLoggedIn && navigate('/admin');
	}, [isLoggedIn, navigate]);

	return (
		<div className='py-32'>
			<div className='flex-container flex-col border max-w-screen-sm'>
				<p className='text-center text-2xl'>Sign in with credentials</p>
				<p className='text-center text-red-500'>{error}</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='m-6 px-12 w-full'>
					<div className='relative'>
						<input
							className='input-field pl-12'
							{...register('email', {
								required: 'email is required',
							})}
							type='text'
							placeholder='Email'
						/>
						<div className='absolute left-0 inset-y-0 flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-7 w-7 ml-3 text-gray-400 p-1'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
								<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
							</svg>
						</div>
					</div>
					{errors.email && (
						<div className='pt-2 text-red-500'>
							{errors.email?.message}
						</div>
					)}
					<div className='relative mt-3'>
						<input
							className='input-field pl-12'
							type='password'
							placeholder='Password'
							{...register('password', {
								required: 'password required',
							})}
						/>
						<div className='absolute left-0 inset-y-0 flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-7 w-7 ml-3 text-gray-400 p-1'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
							</svg>
						</div>
					</div>
					{errors.password && (
						<div className='pt-2 text-red-500'>
							{errors.password?.message}
						</div>
					)}
					<div className='flex items-center justify-center mt-8'>
						<button type='submit' className='button-secondary'>
							{loading ? 'Loading...' : 'sign up'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
