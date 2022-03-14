import React from 'react';

const Select = () => {
	return (
		<div className='create-group'>
			<label for='name' class='text-gray-700 block mb-2 font-medium'>
				Name
			</label>
			<select className='textarea-field w-52'>
				<option>Select a option</option>
				{['html', 'css', 'js'].map((item) => (
					<option className='w-10' value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
