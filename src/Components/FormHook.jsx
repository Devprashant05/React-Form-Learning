import React from 'react';
import { useForm } from 'react-hook-form';


function FormHook() {
    const {register, handleSubmit} = useForm()
    return (
        <div>
            <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
                <input {...register('name')} type="text" placeholder='name' />
                <input {...register('email')} type="email" placeholder='email'/>
                <input type="submit" value='submit' />
            </form>
        </div>
    )
}

export default FormHook
