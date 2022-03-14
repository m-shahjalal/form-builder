import React from 'react';

const File = () => {
	return (
		<div className='create-group'>
			<label for='name' class='text-gray-700 block mb-2 font-medium'>
				Name
			</label>
			<input
				type='file'
				name='name'
				id='name'
				class='textarea-field w-full'
				placeholder='Enter your name'
			/>
		</div>
	);
};

export default File;
