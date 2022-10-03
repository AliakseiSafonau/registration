import { ChangeEvent, useState } from 'react'

export const useRadioInput = (initialstate: string) => {

    const [value, setValue] = useState(initialstate)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange,
    }
}