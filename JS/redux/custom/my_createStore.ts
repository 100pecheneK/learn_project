export type CallbackType = () => any
export type ActionType<A> = A | { type: '__INIT__' }
export type StateType = any
export type ReducerType<S, A> = (state: S, action: A) => S
export interface CreateStoreInterface<A, S> {
  dispatch: (action: A) => void
  subscribe: (callback: CallbackType) => void
  getState: () => S
}

export function createStore<A, S>(
  rootReducer: ReducerType<S, ActionType<A>>,
  initialState?: S
): CreateStoreInterface<ActionType<A>, S> {
  const subscribers: CallbackType[] = []
  let state = rootReducer(initialState, { type: '__INIT__' })

  return {
    dispatch(action: ActionType<A>) {
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return state
    },
  }
}
