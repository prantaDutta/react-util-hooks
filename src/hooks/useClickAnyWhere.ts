import { useEventListener } from './useEventListener'

type Handler = (event: Event) => void

export function useClickAnyWhere(handler: Handler) {
  useEventListener('click', event => {
    handler(event)
  })
}
