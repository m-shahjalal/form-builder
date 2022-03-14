import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Field = () => {
	const { register, formState } = useForm();
	const { errors } = formState;
	const [inputType, setInputType] = useState();
	console.log(inputType);

	const registerInputType = register('inputType', {
		required: 'input type is required',
	});

	return (
		<div className='create-group'>
			<div className='create-field_group'>
				<div className='flex'>
					<div className='block w-3/4'>
						<input
							type='text'
							placeholder='question'
							className='textarea-field w-full'
							name='question'
							{...register('question', {
								required: 'question is required!',
							})}
						/>
						{errors.question && (
							<div className='text-red-500'>
								{errors.question?.message}
							</div>
						)}
					</div>

					<div className='block ml-4 w-1/4'>
						<select
							{...registerInputType}
							onChange={(e) => {
								registerInputType.onChange(e);
								setInputType(e.target.value);
							}}
							className='textarea-field w-full'>
							<option value=''>Select input type</option>
							<option value='text'>short Answer</option>
							<option value='radio'>Multiple Choice</option>
							<option value='checkbox'>Checkbox</option>
							<option value='select'>Dropdown</option>
							<option value='file'>File Upload</option>
							<option value='file'>File Upload</option>
						</select>
						{errors.inputType && (
							<div className='text-red-500'>
								{errors.inputType?.message}
							</div>
						)}
					</div>
				</div>
				<div className='flex justify-end mt-4 border-t-2 pt-2'>
					<button className='button-primary text-sm p-1 px-2 mr-3'>
						delete
					</button>
					<label htmlFor='required'>
						<input
							type='checkbox'
							className='required-checkbox mx-2 mt-2'
							name='required'
							id='required'
						/>
						required
					</label>
				</div>
			</div>
		</div>
	);
};

export default Field;
