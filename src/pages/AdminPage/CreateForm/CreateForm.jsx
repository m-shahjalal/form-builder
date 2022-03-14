import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from './Fields/Checkbox';
import File from './Fields/File';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Text from './Fields/Text';
import Modal from './Modal';

const CreateForm = () => {
	const { register, formState, handleSubmit } = useForm();
	const { errors } = formState;
	const [openModal, setOpenModal] = useState(false);
	const onSubmit = (values) => {
		setOpenModal(true);
	};
	return (
		<div class='p-8 rounded border my-12 border-gray-200 container mx-auto max-w-5xl'>
			<h1 class='font-medium text-center mb-12 text-3xl text-gray-700'>
				Create a form
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
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
							{...register('basicInfo', {
								required: 'info is required',
							})}
						/>
					</div>
					{errors.basicInfo && (
						<div className='text-red-500 '>
							{errors.basicInfo?.message}
						</div>
					)}
				</div>

				<Text />
				<Radio />
				<Checkbox />
				<Select />
				<File />

				<div className='flex justify-center'>
					<button className='button-primary mt-4'>submit</button>
					<button
						type='submit'
						className='button-secondary mt-4 ml-4'>
						Add Field
					</button>
				</div>
			</form>
			<Modal openModal={openModal} setOpenModal={setOpenModal} />
		</div>
	);
};

export default CreateForm;
