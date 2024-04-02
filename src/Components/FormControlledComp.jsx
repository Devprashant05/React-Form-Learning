import React, { useState } from 'react'

function FormControlledComp() {
    const [val, setVal] = useState({ name: '', email: '' })

    const submitForm = (event) => {
        event.preventDefault();
        console.log(val);
    }
    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <input onChange={(event) => setVal({ ...val, name: event.target.value })} type="text" placeholder='name' />
                <input onChange={(event) => setVal({ ...val, email: event.target.value })} type="email" placeholder='email' />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormControlledComp
