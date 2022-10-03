import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckBox } from '../hook/checkbox';
import { useInput } from '../hook/input'
import { useRadioInput } from '../hook/radio';
import { useSelect } from '../hook/select';
import { personvalid } from '../store/actions/personalAction';

export function PersonalInfo () {

    const navigate = useNavigate();

    const changeSignUp = () => navigate(-1)

    const firstName = useInput('')
    const lastName = useInput('')
    const select = useSelect('')
    const day = useInput('')
    const month = useInput('')
    const year = useInput('')
    const sport = useCheckBox(false)
    const beauty = useCheckBox(false)
    const it = useCheckBox(false)
    const pets = useCheckBox(false)
    const sex = useRadioInput('')

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        let data = {
            firstName : firstName.value,
            lastName : lastName.value,
            sex : sex.value,
            day: day.value, 
            month: month.value, 
            year: year.value,
            select : select.value,
            hobby : {'Sport': sport.checked, 
                    'Beauty': beauty.checked, 
                    'It': it.checked, 
                    'Pets': pets.checked}
        }

        const response = (personvalid(data))

        alert(response)
    }

    return (
    <main className="main flex flex-[1_1_auto] w-[400px] mb-5">
        <form
            className="container mx-auto max-w-[400px] px-2"
            onSubmit={submitForm}
        >
            <div className="mb-2">
                <label htmlFor="text" className="block">First Name</label>
                <input 
                    type="text" 
                    className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl"
                    placeholder=""
                    {...firstName}
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="text" className="block">Last Name</label>
                <input type="text" className="border rounded-3xl border-amber-500 py-1 px-2 w-full shadow-2xl" {...lastName} required/>
            </div>
            <div className="mb-2">
                <div className="male inline">Sex :</div>
                <label htmlFor='male' className='inline-flex ml-2'>Male
                    <div className="custom-check-radio ml-2 mt-1"><div className={sex.value === 'male'? 'custom-check-input active' : 'custom-check-input'}></div></div>
                    <input type='radio' id='male' name='radiobtn' value={'male'} className='male ml-2' checked={sex.value === 'male'? true : false} onChange={sex.onChange} required/>
                </label>
                <label htmlFor='female' className="ml-2 inline-flex">Female
                    <div className="custom-check-radio ml-2 mt-1"><div className={sex.value === 'female'? 'custom-check-input active' : 'custom-check-input'}></div></div>
                    <input type='radio' id='female' name='radiobtn' value={'female'} className='female ml-2' checked={sex.value === 'female'? true : false } onChange={sex.onChange} required/>
                </label>
            </div>
            <div className='mb-2'>
                <div className="Birthday inline">Birthday : </div>
                <label htmlFor='number' className='day'></label>
                <input type='number' className='day border rounded-3xl border-amber-500 pl-2.5 w-[45px] text-lg ml-2' min={1} max={31} placeholder='DD' {...day} required/>
                <label htmlFor='number' className='month'></label>
                <input type='number' className='month border rounded-3xl border-amber-500 pl-1.5 w-[45px] text-lg ml-2' min={1} max={12} placeholder='MM' {...month} required/>
                <label htmlFor='number' className="year"></label>
                <input type='number' className='year border rounded-3xl border-amber-500 pl-1.5 w-[55px] text-lg ml-2' min={1932} max={2000} placeholder='YYYY' {...year} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor='oceans' className='oceans'>Your Favorite Ocean : </label>
                <select 
                    name="oceans"
                    id="oceans"
                    {...select}
                    required
                >
                    <option value="" disabled>No selected</option>
                    <option value="Atlantic">Atlantic</option>
                    <option value="Pacific">Pacific</option>
                    <option value="Indian">Indian</option>
                    <option value="Arctic">Arctic</option>
                </select>
            </div>
            <div className='mb-2'>
                <div className="male inline-flex mr-2">Hobby : </div>
                <label htmlFor='sport' className='inline-flex '>Sport
                    <div className="custom-check ml-2 mt-1"><div className={sport.checkedinput()}></div></div>
                    <input type='checkbox' className='input' id="sport" checked={sport.checked} onChange={sport.onChange}/>
                </label>
                <label htmlFor='beauty' className='inline-flex mr-2'>Beauty
                    <div className="custom-check ml-2 mt-1"><div className={beauty.checkedinput()}></div></div>
                    <input type='checkbox' id="beauty" checked={beauty.checked} onChange={beauty.onChange}/>
                </label>
                <label htmlFor='it' className='inline-flex mr-2'>IT
                    <div className="custom-check ml-2 mt-1"><div className={it.checkedinput()}></div></div>
                    <input type='checkbox' id="it" checked={it.checked} onChange={it.onChange}/>
                </label>
                <label htmlFor='pets' className='inline-flex mr-2'>Pets
                    <div className="custom-check ml-2 mt-1"><div className={pets.checkedinput()}></div></div>
                    <input type='checkbox' id="pets" checked={pets.checked} onChange={pets.onChange}/>
                </label>
            </div>
            <button
                type="button" 
                className='change border rounded-3xl border-amber-500 py-1 w-44 shadow-2xl'
                onClick={changeSignUp}>Change SignUp</button>
            <button type="submit" className='submit border rounded-3xl py-1 w-44 shadow-2xl float-right bg-gradient-to-r from-amber-500 to-amber-400'>Complete</button>
        </form>
    </main>
    )
}