import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import { useContext, useState } from 'react';
import { UsersContext } from '../../utils/Context';
import { department } from '../../utils/formOptions/department';
import { states } from '../../utils/formOptions/states';

import 'react-dropdown/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import './form.scss';
import { Modal } from 'react-modal-hrnet-mthomas';

export function Form() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { handleData } = useContext(UsersContext);
    const [modal, setModal] = useState(false);

    const onSubmit = (data) => {
        handleData(data);
        setModal(true);
    };

    return (
        <>
            {modal && (
                <Modal
                    title='Employee created!'
                    content='The employee you created is now available in the "employee list" tab'
                    handleModal={setModal}
                />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className='create_form'>
                <div className='create_form_input create_form_input-firstname'>
                    <label htmlFor='firstname'>First Name</label>
                    <input
                        placeholder='Jean'
                        id='firstname'
                        {...register('firstName', {
                            required: true,
                            maxLength: 20,
                            minLength: 2,
                            pattern: /^[A-Za-z]+$/i,
                        })}
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                        className='create_form_input-input'
                    />
                    {errors.firstName?.type === 'required' && (
                        <p className='input-error'>First name is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-lastname'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input
                        placeholder='Paul'
                        id='lastname'
                        {...register('lastName', {
                            required: true,
                            maxLength: 20,
                            minLength: 2,
                            pattern: /^[A-Za-z]+$/i,
                        })}
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                        className='create_form_input-input'
                    />
                    {errors.lastName?.type === 'required' && (
                        <p className='input-error'>Last name is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-birthdate'>
                    <label htmlFor='birthdate'>Date of Birth</label>
                    <Controller
                        control={control}
                        id='birthdate'
                        name='birthdate'
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='Select date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                dateFormat='yyyy/MM/dd'
                                className='create_form_input-input'
                            />
                        )}
                    />

                    {errors.birthdate?.type === 'required' && (
                        <p className='input-error'>Date of birth is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-startdate'>
                    <label htmlFor='startdate'>Start Date</label>
                    <Controller
                        control={control}
                        id='startdate'
                        name='startdate'
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='Select date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                className='create_form_input-input'
                            />
                        )}
                    />

                    {errors.startdate?.type === 'required' && (
                        <p className='input-error'>Start date is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-street'>
                    <label htmlFor='street'>Street</label>
                    <input
                        placeholder='Street'
                        id='street'
                        {...register('street', {
                            required: true,
                            maxLength: 50,
                            minLength: 2,
                            pattern: /^[A-Za-z ]+$/i,
                        })}
                        className='create_form_input-input'
                        aria-invalid={errors.street ? 'true' : 'false'}
                    />
                    {errors.street?.type === 'required' && (
                        <p className='input-error'>Street is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-city'>
                    <label htmlFor='city'>City</label>
                    <input
                        placeholder='City'
                        id='city'
                        {...register('city', {
                            required: true,
                            maxLength: 50,
                            minLength: 2,
                            pattern: /^[A-Za-z ]+$/i,
                        })}
                        className='create_form_input-input'
                        aria-invalid={errors.city ? 'true' : 'false'}
                    />
                    {errors.city?.type === 'required' && (
                        <p className='input-error'>City is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-state'>
                    <label htmlFor='state'>State</label>
                    <Controller
                        control={control}
                        id='state'
                        name='state'
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Dropdown
                                options={states}
                                onChange={(state) => field.onChange(state)}
                                placeholder='Select an option'
                            />
                        )}
                    />

                    {errors.state?.type === 'required' && (
                        <p className='input-error'>State is required</p>
                    )}
                </div>
                <div className='create_form_input create_form_input-zip'>
                    <label htmlFor='zip'>Zip code</label>
                    <input
                        type='number'
                        id='zip'
                        {...register('zip', {
                            required: true,
                            min: 0,
                        })}
                        className='create_form_input-input'
                        aria-invalid={errors.zip ? 'true' : 'false'}
                    />
                    {errors.zip?.type === 'required' ? (
                        <p className='input-error'>Zip Code is required</p>
                    ) : (
                        errors.zip?.type === 'min' && (
                            <p className='input-error'>
                                Zip Code cannot be negative
                            </p>
                        )
                    )}
                </div>
                <div className='create_form_input create_form_input-department'>
                    <label htmlFor='department'>Department</label>
                    <Controller
                        control={control}
                        id='department'
                        name='department'
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Dropdown
                                options={department}
                                onChange={(department) =>
                                    field.onChange(department)
                                }
                                placeholder='Sales'
                            />
                        )}
                    />

                    {errors.department?.type === 'required' && (
                        <p className='input-error'>Department is required</p>
                    )}
                </div>

                <button
                    className='create_form_input create_form_input-submit'
                    type='submit'
                >
                    Send
                </button>
            </form>
        </>
    );
}
