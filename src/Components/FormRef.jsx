import React, { useRef } from 'react'

function FormRef() {
    const name = useRef(null);
    const age = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name.current.value, age.current.value);
    }
    return (
        <div className='p-4'>
            <form action="#" onSubmit={handleSubmit}>
                <input ref={name} className='border-2' type="text" placeholder='Name' />
                <input ref={age} className='border-2' type="text" placeholder='age' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormRef
