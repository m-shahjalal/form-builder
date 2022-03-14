import React from 'react';

const Checkbox = ({ item }) => {
	console.log('Checkbox', item);
	return (
		<div className='create-group'>
			<label for='name' class='text-gray-700 block mb-2 font-medium'>
				Name
			</label>
			{item.options.map((item) => (
				<>
					<input readOnly={true} type='checkbox' className='mr-2' />
					<label for='html'>{item.name}</label>
					<br />
				</>
			))}
		</div>
	);
};

export default Checkbox;
