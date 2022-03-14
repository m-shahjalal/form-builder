import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Draft.css';
import Field from './Field';

const Draft = () => {
	const { handleSubmit, register, formState } = useForm();
	const { errors } = formState;
	let [arr, setArr] = useState(['1']);

	const onSubmit = (value) => console.log(value);
	const handleAddField = () => setArr([...arr, 'newOne']);

	return (
		<>
			<form
				className='flex-container flex-col w-full p-32'
				onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-center text-4xl text-gray-800 mb-12'>
					Create form
				</h1>
				<div className='create-group'>
					<div className='create-field_group'>
						<input
							type='text'
							placeholder='Write the Header'
							className='create-field_group-heading'
							{...register('heading', {
								required: 'Head is required',
							})}
						/>
						{errors.heading && (
							<div className='text-red-500 -mt-3'>
								{errors.heading?.message}
							</div>
						)}
					</div>
					<div className='create-field_group'>
						<textarea
							placeholder='Form Information'
							className='create-field_group-info'
							{...register('basicInfo')}
						/>
					</div>
				</div>

				<Field register={register} errors={errors} />

				<div className='flex'>
					<button type='submit' className='button-primary'>
						Submit
					</button>
					<button className='button-secondary ml-2'>Reset</button>
					<button
						onClick={handleAddField}
						className='button-primary bg-lime-500 ml-2'>
						Add another Question
					</button>
				</div>
			</form>
		</>
	);
};

export default Draft;
