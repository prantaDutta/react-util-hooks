import { Dispatch, SetStateAction } from 'react'
import { useSessionStorage } from './useSessionStorage'

export function useSessionStorageWithObject<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const [state, setState, clear] = useSessionStorage(key, JSON.stringify(initialValue))
  const item: T = JSON.parse(state)
  const setItem = (value: SetStateAction<T>) => {
    if (value instanceof Function) {
      setState((prevState) => JSON.stringify(value(JSON.parse(prevState))))
      return
    }
    setState(JSON.stringify(value))
  }
  return [item, setItem, clear]
}
