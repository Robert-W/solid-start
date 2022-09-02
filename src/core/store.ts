import { createStore } from 'solid-js/store';

export interface State {}

const defaultState: State = {

};

const [state, setState] = createStore(defaultState);

export {
  setState,
  state
}
