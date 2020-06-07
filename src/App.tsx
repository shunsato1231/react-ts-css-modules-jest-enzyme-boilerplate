import React from 'react'
import TestCounter from './Components/testCounter/testCounter.conponent'
import { IncrementProvider } from './Components/testCounter/testCounter.context'

const App: React.SFC = () => {
  return(
    <IncrementProvider step={0}>
      <TestCounter/>
    </IncrementProvider>
  )
}

export default App
