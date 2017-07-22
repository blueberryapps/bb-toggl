export default function injectDependencies(dependencies) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action !== 'function') {
      return next(action);
    }

    dispatch(action({ ...dependencies, getState, dispatch }));
  };
}
