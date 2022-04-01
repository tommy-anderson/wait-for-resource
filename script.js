module.exports = (context,token) => {
  const {payload} = context;
  const {issue} = payload
  const {pull_request} = issue
  console.log(JSON.stringify(pull_request))
    return payload.comments.user.id.toString()
  }