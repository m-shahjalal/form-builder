import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getForm } from '../../../features/form/dataSlice';
import dummy from './dummyData';
import Steps from './Steps';

const GenerateForm = () => {
	const dispatch = useDispatch();
	const form = useForm({
		mode: 'onChange',
	});
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = form;

	const [page, setPage] = useState(1);
	const [next, setNext] = useState(2);
	const formData = useSelector((state) => state.formData);
	const onSubmit = (value) => console.log(value);

	useEffect(() => dispatch(getForm(dummy)), [dispatch]);

	const nextHandler = () => setNext(next + 1);

	return (
		<div class='p-8 rounded border my-12 border-gray-200 container mx-auto max-w-5xl'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='create-group'>
					<div className='create-field_group'>
						<p className='create-field_group-heading'>
							{formData?.formHeader}
						</p>
					</div>
					<div className='create-field_group'>
						<p className='create-field_group-info text-gray-700 pb-2'>
							{formData?.FormInfo}
						</p>
					</div>
				</div>

				<div className='text-gray text-right text-gray-600 mr-1'>
					page {page} of {formData?.formSkeleton?.length}
				</div>

				{formData.formSkeleton?.map((item) => (
					<Steps
						register={register}
						errors={errors}
						data={item}
						key={item.id}
						setPage={setPage}
					/>
				))}
				{formData.totalSteps === page ? (
					<button type='submit' className='button-primary mt-4'>
						submit
					</button>
				) : (
					<button
						onClick={nextHandler}
						type='submit'
						className='button-primary mt-4'>
						next
					</button>
				)}
			</form>
		</div>
	);
};

export default GenerateForm;
