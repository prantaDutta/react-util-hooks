import { useEventListener } from './useEventListener'

type Handler = (event: Event) => void

function useClickAnyWhere(handler: Handler) {
  useEventListener('click', event => {
    handler(event)
  })
}

export default useClickAnyWhere
