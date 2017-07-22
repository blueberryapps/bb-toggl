export default function isPromise(value) {
  if (value && typeof value === 'object') {
    return typeof value.then === 'function';
  }

  return false;
}
