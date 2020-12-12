import React, {
    useState,
    useEffect,
} from 'react'

export default function useLocalStorage(
    key: string,
    initialValue,
) {
    const [isInitialized, setIsInitialized] = useState(false)
    const [storedValue, setStoredValue] = useState(initialValue)

    useEffect(
        () => {
            if (isInitialized) {
                localStorage.setItem(
                    key,
                    JSON.stringify(storedValue),
                )
            }
        },
        [storedValue]
    )

    useEffect(() => {
        setStoredValue(
            () => JSON.parse(
                localStorage.getItem(key)
                || JSON.stringify(initialValue)
            )
        )

        setIsInitialized(true)
    })

    return [
        storedValue,
        setStoredValue,
    ]
}
