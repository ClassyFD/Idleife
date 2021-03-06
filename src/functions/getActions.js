import actions from '../gamedata/Actions';
const getActions = () => {
  const actionArr = [];
  for (let key in actions) {
    actionArr.push({
      title: actions[key].title,
      action: actions[key].action,
      time: actions[key].time,
      reward: actions[key].reward,
      requirements: actions[key].requirements,
      success: actions[key].success,
      failure: actions[key].failure,
    })
  }
  return actionArr
}
export default getActions;