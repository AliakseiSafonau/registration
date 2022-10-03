import { ChangeEvent, useState } from 'react'

export const useSelect = (initialstate: string) => {

    const [value, setValue] = useState(initialstate)

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }
    
    return {
        value,
        onChange
    }
}