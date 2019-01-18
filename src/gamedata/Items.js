/* rarity:
  1: poor: found everywhere
  2: common: found in most places / easily craftable
  3: uncommon: found sometimes in nature / still easy to craft.
  4: decent: 
  5: rare:
  6: super rare:
  7: ultra rare:
  8: epic:
  9: legendary:
  10: mythical:
  11: godlike:
  12: beyond godlike:
*/

const items = {
  stick: { 
    id: 1,
    name: "stick",
    plural: "sticks",
    description: "A brown stick. They're needed in every game, trust me.",
    rarity: 1,
  },
  grass_fiber: {
    id: 2,
    name: "grass fiber",
    plural: "grass fibers",
    description: "Obtained by pulling grass from the ground.",
    rarity: 1,
  },
  pebble: {
    id: 3,
    name: "pebble",
    plural: "pebbles",
    description: "Yum... fruity peb- ouch! never mind...",
    rarity: 1,
  },
  dirt: {
    id: 4,
    name: "dirt",
    plural: "dirt",
    description: "I have two chests full of it.",
    rarity: 1,
  },
  stone: {
    id: 5,
    name: "stone",
    plural: "stones",
    description: "A hard rock.",
    rarity: 1,
  },
  sharp_stone:{
    id: 6,
    name: "sharp stone",
    plural: "sharp stones",
    description: "I kept rubbing a rock on a rock and it made it pointy.",
    rarity: 2,
  },
}
export default items;