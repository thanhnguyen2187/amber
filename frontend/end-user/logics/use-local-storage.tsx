import React, {
    useState,
} from 'react'

export default function useLocalStorage(
    key: string,
    initialValue: string,
) {

    const [
        storedValue,
        setStoredValue
    ] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item
                ? JSON.parse(item)
                : initialValue
        } catch (error) {
            // console.log(error)
            return initialValue
        }
    })

    const setValue = newValue => {
        try {
            const valueToStore =
                newValue instanceof Function
                    ? newValue(storedValue)
                    : newValue
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            // console.log(error)
        }
    }

    return [
        storedValue,
        setValue
    ]
}