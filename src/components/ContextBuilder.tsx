import React, { createContext } from 'react'

type Props = {
  children: React.ReactNode
}

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (p: Props & P) => {
      const value = hook()

      return <Context.Provider value={value}>{p.children}</Context.Provider>
    },
  }
}
