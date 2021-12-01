/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../LoginFom/LoginForm.scss';

const schema = yup.object().shape({
    userName: yup.string().min(3).required(),
    userEmail: yup.string().email().required(),
    userPassword: yup.string().min(8).max(20).required(''),
    userConfirmPassword: yup.string().oneOf([yup.ref('userPassword'), null])

})

export const SignupForm = () => {
    const { register, handleSubmit, formState: {errors}} = useForm({
       resolver: yupResolver(schema),
    });

    const submitForm = data => {
        console.log(data)
    }
    
    return (
        <form className='form-inner' onSubmit={handleSubmit(submitForm)}>
            <h2 className='form-inner__header-text'>sign up</h2>
            <div className='form-inner__group'>
                <label htmlFor='userName' className='form-inner__group--label'>User Name</label>
                <input
                    {...register('userName')}
                    placeholder='username'
                    id='userName'
                    type='text'
                    name='userName'
                    className='form-inner__group--input'
                />
                <p className='input-error'>{errors.userName?.message}</p>
            </div>


            <div className='form-inner__group'>
                <label htmlFor='userEmail' className='form-inner__group--label'>User e-mail</label>
                <input 
                {...register('userEmail')}
                    placeholder='e-mail'
                    type='email'
                    name='userEmail'
                    className='form-inner__group--input'
                />
                <p className='input-error'>{errors.userEmail?.message}</p>
            </div>
             <div className='form-inner__group'>
                <label 
                    htmlFor='userPassword' 
                    className='form-inner__group--label'>password</label>
                <input 
                {...register('userPassword')}
                    placeholder='password'
                    type='password'
                    name='userPassword'
                    id='userPassword' 
                    className='form-inner__group--input'
                />
                <p className='input-error'>{errors.userPassword?.message}</p>
            </div>
            
             <div className='form-inner__group'>
                <label 
                    htmlFor='userConfirmPassword' 
                    className='form-inner__group--label'>confirm password</label>
                <input 
                {...register('userConfirmPassword')}
                    placeholder='repeat password'
                    type='password' 
                    id='userConfirmPassword' 
                    name='userConfirmPassword'
                    className='form-inner__group--input'

                />
                <p className='input-error'>{errors.userConfirmPassword && 'Password Should Match!'}</p>
            </div>

            <button type='submit' className='form-inner__buttons--button'>sign up</button>
            
            <p className='form-info'>Do you have an account? <Link to='/login/signin' className='form-inner__buttons--link'>Sing in!</Link></p>
        </form>
    );
};
