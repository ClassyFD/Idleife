import actions from '../gamedata/Actions';
const getActions = () => {
  const actionArr = [];
  for (let key in actions) {
    actionArr.push({
      id: actions[key].id,
      title: actions[key].title,
      action: actions[key].action,
      time: actions[key].time,
      reward: actions[key].reward,
      requirements: actions[key].requirements,
    })
  }
  return actionArr
}
export default getActions;