module.exports = (context,token) => {
  const {payload} = context;
  const {issue} = payload;
  const {pull_request} = issue
  console.log(token)
  console.log(JSON.stringify(context))
    return payload.user.id.toString()
  }