import items from './Items';
const crafting = {
  grass_twine: {
    title: "grass twine",
    action: "Crafting grass twine",
    time: 1500,
    requirements: {
      items: {
        grass_fiber: 3
      }
    },
    reward: {
      items: [
        {
          item: items.grass_twine,
          amount: {
            min: 1,
            max: 1,
          },
          chance: 1,
        },
      ]
    },
  },
  grass_rope: {
    title: "grass rope",
    action: "Crafting grass rope",
    time: 3000,
    requirements: {
      items: {
        grass_twine: 3
      }
    },
    reward: {
      items: [
        {
          item: items.grass_rope,
          amount: {
            min: 1,
            max: 1,
          },
          chance: 1,
        },
      ]
    },
  },
  stone_axe: {
    id: 1,
    title: "stone axe",
    action: "Crafting stone axe",
    time: 4000,
    requirements: {
      items: {
        stone: 2,
        stick: 1,
        grass_fiber: 3
      }
    },
    reward: {
      items: [
        {
          item: items.stone_axe,
          amount: {
            min: 1,
            max: 1,
          },
          chance: 1,
        },
      ]
    },
  },
}
export default crafting;