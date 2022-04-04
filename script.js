module.exports = async (context) => {
  const {payload} = context;
  const {issue} = payload
  const {pull_request} = issue
  console.log(JSON.stringify(pull_request))
  await waitForStuffToHappen()
  return payload.comment.user.login.toString()
  }

  async function waitForStuffToHappen() {
    return new Promise(resolve => {
      setTimeout(() => {
      console.log('waited for stuff to happen')
        resolve()
      }, 10000)
    })
  }