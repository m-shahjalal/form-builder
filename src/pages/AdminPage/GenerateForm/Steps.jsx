import React, { useEffect } from 'react';
import Checkbox from '../CreateForm/Fields/Checkbox';
import Email from '../CreateForm/Fields/Email';
import Radio from '../CreateForm/Fields/Radio';
import Text from '../CreateForm/Fields/Text';

const Steps = ({ data, register, errors, setPage }) => {
	useEffect(() => setPage(data.serial), [data, setPage]);
	return (
		<div className='bg-sky-100 rounded-lg my-4 p-4'>
			<div className='text-xl'> {data.name}</div>
			<div className='text-gray-60 border-b mb-2 border-gray-300 pb-2'>
				{data.description}
			</div>
			{data.inputs?.map((item) => {
				const { type } = item;
				switch (type) {
					case 'radio':
						return (
							<Radio
								register={register}
								errors={errors}
								item={item}
							/>
						);
					case 'checkbox':
						return (
							<Checkbox
								register={register}
								errors={errors}
								item={item}
							/>
						);
					case 'text':
						return (
							<Text
								register={register}
								errors={errors}
								item={item}
							/>
						);
					case 'email':
						return (
							<Email
								register={register}
								errors={errors}
								item={item}
							/>
						);
					default:
						break;
				}

				return null;
			})}
		</div>
	);
};

export default Steps;
