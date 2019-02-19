import items from './Items';
const actions = {
  gatherMaterials: {
    title: 'Gather materials',
    action: 'Gathering materials',
    success: 'Gathered',
    failure: 'You searched for a while, but found nothing.',
    requirements: null,
    time: 1000,
    reward: {
      items: [
      {
        item: items.stick,
        amount: {
          min: 1,
          max: 2,
        },
        chance: 2,
      },
      {
        item: items.grass_fiber,
        amount: {
          min: 1,
          max: 2,
        },
        chance: 2,
      },
      {
        item: items.stone,
        amount: {
          min: 1,
          max: 1,
        },
        chance: 3,
      },
      {
        item: items.dirt,
        amount: {
          min: 1,
          max: 1,
        },
        chance: 2,
      },
      {
        item: items.pebble,
        amount: {
          min: 1,
          max: 1,
        },
        chance: 2,
      },
    ]},
  },
  sharpenStone: {
    title: 'Sharpen stone',
    action: 'Sharpening stone',
    success: 'Created',
    failure: 'Failed to sharpen stone, received nothing.',
    time: 2000,
    requirements: {
      items: {
        stone: 1,
      }
    },
    reward: {
      items: [
        {
          item: items.sharp_stone,
          amount: {
            min: 0,
            max: 1,
          },
          chance: 2,
        },
      ]
    },
  }
  // name: {
  //   id: 0,
  //   title: "",
  //   action: "",
  //   success: "",
  //   failure: "",
  //   time: 0,
  //   requirements: {
  //     items: {
  //       stone: 0,
  //     }
  //   },
  //   reward: {
  //     items: [
  //       {
  //         item: items.,
  //         amount: {
  //           min: 0,
  //           max: 0,
  //         },
  //         chance: 0,
  //       },
  //     ]
  //   },
  // },
}
export default actions;