import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { ControlledForm, ReactHookForm, UncontrolledForm } from './components'

const App = () => {
  return (
    <div>
      <ControlledForm />
      <UncontrolledForm />
      <ReactHookForm />
    </div>
  )
}

export default App
