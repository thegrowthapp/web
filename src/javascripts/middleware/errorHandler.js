export default (store) => (next) => (action) => {
  try {
    return next(action)
  } catch(error) {
    console.log('An error occured:', error)
  }
}
