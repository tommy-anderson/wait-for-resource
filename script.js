module.exports = ({github, context}) => {
  const {payload} = context;
  const {issue} = payload;
  const {pull_request} = issue
  console.log(JSON.stringify(context))
    return 'Hello World!'
  }