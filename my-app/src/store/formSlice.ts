import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
    mobilePhone : string,
    email : string,
    password : string,
}

const initialState: FormState = {
    mobilePhone : '',
    email : '',
    password : '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        registration : (state, action: PayloadAction<FormState>) => {
            state.mobilePhone = action.payload.mobilePhone
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
})
export const { registration } = formSlice.actions
export default formSlice.reducer