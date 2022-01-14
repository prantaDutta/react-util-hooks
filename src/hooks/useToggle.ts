import { useCallback, useState } from 'react'

export function useToggle(initialState = false) {
  // Initialize the state
  const [stateValue, setStateValue] = useState(initialState)

  // Define and memorize toggle function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setStateValue((state) => !state), [])

  return [stateValue, toggle]
}
