import { useForm } from 'react-hook-form';
import './form.scss';

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
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
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type === 'required' && <p>First name is required</p>}
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
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName?.type === 'required' && <p>Last name is required</p>}
            </div>
            <input className='create_form_input create_form_input-submit' type='submit' />
        </form>
        // <form
        //     onSubmit={() => {
        //         '';
        //     }}
        //     method='post'
        //     className='create_form'
        // >
        //     <div >
        //
        //         <input
        //             type='text'
        //             placeholder='Jean'
        //             id='firstname'
        //             required
        //         ></input>
        //     </div>
        //     <div className='create_form_input create_form_input-lastname'>
        //         <label htmlFor='lastname'>Last Name</label>
        //         <input
        //             type='text'
        //             placeholder='Paul'
        //             id='lastname'
        //             required
        //         ></input>
        //     </div>
        //     <div className='create_form_input create_form_input-datebirth'></div>
        //     <div className='create_form_input create_form_input-startdate'></div>
        //     <div className='create_form_input create_form_input-street'></div>
        //     <div className='create_form_input create_form_input-city'></div>
        //     <div className='create_form_input create_form_input-state'></div>
        //     <div className='create_form_input create_form_input-zip'></div>
        //     <div className='create_form_input create_form_input-department'></div>
        // </form>
    );
}
