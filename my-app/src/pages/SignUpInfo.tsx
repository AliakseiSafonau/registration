import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../hook/input'
import { useAppDispatch } from '../hook/redux'
import { validate } from '../store/actions/validAction'
import { registration } from '../store/formSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../store/main'

export function SignUpInfo () {
    
    const form = useSelector((state: RootState) => state.forms)
    const mobilePhone = useInput(form.mobilePhone)
    const email = useInput(form.email)
    const password = useInput(form.password)
    const repeatPassword = useInput(form.password)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handlePhoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target
        console.log(input.value)
        if (input.value === '+' || input.value === '8') {
            return (input.value = '+375 (')
        } else if (input.value === '1') {
            return (input.value = '+375 (17) ')
        } else if (input.value === '4') {
            return (input.value = '+375 (44) ')
        } else if (input.value === '3') {
            return (input.value = '+375 (33) ')
        }
        
        if (input.value.length === 13) {
            return (input.value = input.value + ' ')
        }

        if (input.value.length === 16) {
            return (input.value = input.value + ' ')
        }
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        let data = {
            mobilePhone: mobilePhone.value.replace(/[()\s]/g,''),
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value
        }

        const response = (validate(data))
        
        if (!response) {
            dispatch(registration({
                mobilePhone: mobilePhone.value,
                email: email.value,
                password: password.value
            }))
            navigate('/personal');
        } else {
            for (let key in response) {
                alert (response[key])
            }
        }
    }

    return (
    <main className="main flex flex-[1_1_auto] w-[400px] mb-5">
        <form
            className="container mx-auto max-w-[400px] px-2" 
            onSubmit={submitHandler}
        >
            <div className="mb-2">
                <label htmlFor="text" className="mobilePhone block">Mobile phone</label>
                <input
                    type="text"
                    className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl"
                    placeholder="+375 (XX) XXX XX XX"
                    {...mobilePhone}
                    onInput={handlePhoneMask}
                    required
                /> 
            </div>
            <div className="mb-2">
                <label htmlFor="text" className="email block">Email</label>
                <input 
                    type="text"
                    className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl"
                    placeholder="xxxxx...@xxx.xxx"
                    {...email}
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="text" className="block">Password</label>
                <input
                    type="password"
                    className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl"
                    placeholder="length from 8 to 20 characters"
                    {...password}
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="text" className="block">Repeat Password</label>
                <input 
                    type="password" 
                    className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl"
                    {...repeatPassword}
                    required
                />
            </div>
            <button type="submit" className="rounded-3xl py-1 px-2 mt-3 w-full shadow-2xl bg-gradient-to-r from-amber-500 to-amber-400">Next</button>
        </form>
    </main>
    )
}