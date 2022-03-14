import React from 'react';

const Radio = ({ item, register, errors }) => {
	console.log('register', errors);
	return (
		<div className='create-group'>
			<label for='name' class='text-gray-700 block mb-2 font-medium'>
				Name
			</label>
			{item.options.map((item) => (
				<>
					<input
						{...register(item.name, {
							required: 'text is required',
						})}
						type='radio'
						className='mr-2'
					/>
					<label for='html'>{item.label}</label>
					<br />
					{/* {errors && (
						<div className='text-red-500 text-sm mt-2'>
							{errors.message}
						</div>
					)} */}
				</>
			))}
		</div>
	);
};

export default Radio;
