import React, { useState } from 'react'
import './form.css'

export default function HandleForm() {
    const data = {
        firstName: {
            id: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name...',
            value: '',
            isError: false,
            errorMsg: "First Name can't be empty"
        },
        lastName: {
            id: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name...',
            value: '',
            isError: false,
            errorMsg: "Last Name can't be empty"
        },
        email: {
            id: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'Email Name...',
            value: '',
            isError: false,
            errorMsg: "Email can't be empty"
        },
        password: {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Password...',
            value: '',
            isError: false,
            errorMsg: "Password Name can't be empty"
        },
        confirmPassword: {
            id: 'confirmPassword',
            label: 'ConfirmPassword',
            type: 'password',
            placeholder: 'ConfirmPassword...',
            value: '',
            isError: false,
            errorMsg: "ConfirmPassword Name can't be empty"
        },
    }

    const [formData, setFormData] = useState(data)
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)

    const handleInput =(e)=>{
        const key = e.target.id
        const val = e.target.value
        let copyFormData = {...formData}
        copyFormData[key].value = val
        setFormData(copyFormData)
        isValidForm()
    }
    const passwordMatch=()=>{
        const copyFormData = {...formData}
        const pass = copyFormData['password'].value
        const confPass = copyFormData['confirmPassword'].value
        if(pass !== confPass){
            setIsPasswordMatch(false)
        }else{
            setIsPasswordMatch(true)
        }
    }
    
    const isValidForm = ()=>{
        const copyFormData = {...formData}
        Object.keys(copyFormData).forEach(key => {
            const obj = copyFormData[key]
           obj.isError = !obj.value ? true : false;
           passwordMatch()
        })
        setFormData(copyFormData)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        isValidForm()
    }
    return (
        <div className='form-handle'>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {
                        Object.keys(formData).map((keys) => {
                            const {id,label,type,placeholder,value,isError,errorMsg} = formData[keys];
                            return <div 
                              className="form-item"
                              key={id}
                              >
                                <label>{label}</label>
                                <input
                                 type={type}
                                 key={id}
                                 id={id}
                                 placeholder={placeholder}
                                 onChange={handleInput}
                                 value={value}
                                 className={isError ? 'error-border':''}
                                 />
                                { isError && <span className='error'>{errorMsg}</span>}
                                {
                                   keys ==='confirmPassword' && !isPasswordMatch &&
                                   <span className='error'>Password does not match</span>
                                }
                            </div>
                            
                        })
                    }
                    <div className="form-item">
                        <button className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
