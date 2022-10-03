import { ChangeEvent, useState } from 'react'

export const useCheckBox = (initialstate: boolean) => {

    const [checked, setChecked] = useState(initialstate)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const checkedinput = () => {
        return (checked) ? "custom-check-icon active" : "custom-check-icon"
    }

    return {
        checked,
        onChange,
        checkedinput
    }
}