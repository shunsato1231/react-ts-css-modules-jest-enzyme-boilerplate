import { useState } from 'react'

const useCounter = (
    initialCount: number
): [number, ()=>void, ()=> void] => {
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return [count, increment, decrement]
}

export default useCounter