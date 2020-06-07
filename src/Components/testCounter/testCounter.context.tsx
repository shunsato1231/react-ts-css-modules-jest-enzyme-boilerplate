import React, { useState, createContext } from 'react'
 
export const IncrementContext = createContext(null)

type Props = {
    step: number
    children: React.ReactNode
}
export const IncrementProvider: React.FC<Props> = (props) => {
    const [value, setValue] = useState(0)

    return (
        <IncrementContext.Provider value={[value, setValue]}>
            {props.children}
        </IncrementContext.Provider>
    )
}