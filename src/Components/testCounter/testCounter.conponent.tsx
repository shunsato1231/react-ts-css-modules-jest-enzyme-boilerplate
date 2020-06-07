import React from 'react'
import { css } from '@emotion/core'

import useCounter from './testCounter.hook'

interface Props {
    initialCount?: number
}

const TestCounter: React.SFC<Props> = () => {
    const [count, increment, decrement] = useCounter(0)

    return (
        <div css={wrapper}>
            <div 
                data-testid='count'
                css={counter}
            >
                {count}
            </div>
            <button 
                data-testid='decrementButton'
                css={button}
                onClick={() => decrement()}
            >
                -1
            </button>
            <button 
                data-testid='incrementButton'
                css={button}
                onClick={() => increment()}
            >
                +1
            </button>
        </div>
    )
}

const wrapper = css`
  display: table;
  margin: 20px auto;
  text-align: center;
`

const counter = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const button = css`
  padding: 10px 15px;
  background: #333;
  color: #fff;
  font-size: 14px;
  border: 1px solid #ddd;
  outline: none;
`

export default TestCounter