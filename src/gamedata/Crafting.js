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
  stone_hammer: {
    title: "stone hammer",
    action: "Crafting stone hammer",
    time: 4000,
    requirements: {
      items: {
        stone: 2,
        stick: 1,
        grass_rope: 1
      }
    },
    reward: {
      items: [
        {
          item: items.stone_hammer,
          amount: {
            min: 1,
            max: 1,
          },
          chance: 1,
        },
      ]
    },
  },
  stone_knife: {
    title: "stone knife",
    action: "Crafting stone knife",
    time: 4000,
    requirements: {
      items: {
        sharp_stone: 1,
        stick: 1,
        grass_twine: 1
      }
    },
    reward: {
      items: [
        {
          item: items.stone_knife,
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
    title: "stone axe",
    action: "Crafting stone axe",
    time: 4000,
    requirements: {
      items: {
        sharp_stone: 1,
        stone: 1,
        stick: 1,
        grass_rope: 1
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