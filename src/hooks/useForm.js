import { useReducer } from 'react';

export const useForm = (initialState, onSubmit) => {
  const reducer = (state, action) => {
    if (!action.type.startsWith('update_'))
      throw new Error(`${action.type} is not valid type`);

    const field = action.type.replace('update_', '');

    if (!initialState.hasOwnProperty(field))
      throw new Error(`${field} is not in initial state!`);

    return { ...state, [field]: action.payload };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = () => {
    const submitState = Object.keys(state).reduce(
      (newState, key) => ({ ...newState, [key]: state[key].trim() }),
      {}
    );

    onSubmit(submitState);
  };

  return { state, dispatch, submit };
};
