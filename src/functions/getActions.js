import actions from '../gamedata/Actions';
const getActions = () => {
  for (let key in actions) {
    return {
      id: actions[key].id,
      title: actions[key].title,
      action: actions[key].action,
      time: actions[key].time,
      reward: actions[key].reward,
      requirements: actions[key].requirements,
    }
  }
}
export default getActions;