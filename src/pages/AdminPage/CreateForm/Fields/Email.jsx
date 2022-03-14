import React from 'react';

const Email = () => {
	return (
		<div className='create-group'>
			<label for='name' class='text-gray-700 block mb-2 font-medium'>
				Name
			</label>
			<input
				type='email'
				name='name'
				id='name'
				class='textarea-field w-full'
				placeholder='Enter your name'
			/>
		</div>
	);
};

export default Email;
