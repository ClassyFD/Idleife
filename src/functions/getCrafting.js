import Crafting from '../gamedata/Crafting';
const getCrafting = () => {
  const craftArr = [];
  for (let key in Crafting) {
    craftArr.push({
      title: Crafting[key].title,
      action: Crafting[key].action,
      time: Crafting[key].time,
      reward: Crafting[key].reward,
      requirements: Crafting[key].requirements,
      success: Crafting[key].success,
    })
  }
  return craftArr;
}
export default getCrafting;