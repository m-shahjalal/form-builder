import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		minWidth: '600px',
	},
};

ReactModal.setAppElement('#root');

function Modal({ openModal, setOpenModal }) {
	const { register, formState } = useForm();
	const { errors } = formState;

	return (
		<ReactModal
			isOpen={openModal}
			onRequestClose={() => setOpenModal(false)}
			style={customStyles}>
			<div className='block'>
				<div className='block'>
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
				<div className='block mt-4 w-full'>
					<select
						{...register('type', {
							required: 'type is required!',
						})}
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
				<div className='flex justify-end border-b-2 pb-4 pt-2'>
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
				<div className='flex min-w-max mt-2'>
					<button className='button-primary text-sm p-1 px-2 mr-3'>
						add field
					</button>
					<button className='button-primary text-sm p-1 px-2 mr-3'>
						close modal
					</button>
				</div>
			</div>
		</ReactModal>
	);
}

export default Modal;
