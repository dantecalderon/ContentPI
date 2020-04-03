// Dependencies
import React, { FC, ReactElement, useState, createContext } from 'react'

// Interfaces
interface iFormContext {
  form: {
    onChange(e: any): any
    values: any
  }
}

interface iProps {
  children: ReactElement
  initialValues: object
}

export const FormContext = createContext<iFormContext>({
  form: {
    onChange: () => null,
    values: {}
  }
})

const FormProvider: FC<iProps> = ({
  children,
  initialValues = {}
}): ReactElement => {
  const [state, setState] = useState(initialValues)

  function onChange(e: any) {
    setState(state => ({
      ...state,
      [name]: e.target.value
    }))
  }

  const context = {
    form: {
      onChange,
      values: state
    }
  }

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

export default FormProvider
