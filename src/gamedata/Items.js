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
    name: "stick",
    plural: "sticks",
    description: "A brown stick. They're needed in every game, trust me.",
    rarity: 1,
  },
  grass_fiber: {
    name: "grass_fiber",
    plural: "grass fibers",
    description: "Obtained by pulling grass from the ground.",
    rarity: 1,
  },
  grass_twine: {
    name: "grass_twine",
    plural: "grass twines",
    description: "Stronger together.",
    rarity: 2,
  },
  grass_rope: {
    name: "grass_rope",
    plural: "grass ropes",
    description: "Strong enough to hold most things together.",
    rarity: 2,
  },
  pebble: {
    name: "pebble",
    plural: "pebbles",
    description: "Yum... fruity peb- *crack* never mind...",
    rarity: 1,
  },
  dirt: {
    name: "dirt",
    plural: "dirt",
    description: "I have 8 chests full of this stuff.",
    rarity: 1,
  },
  stone: {
    name: "stone",
    plural: "stones",
    description: "Well it's a small rock.",
    rarity: 1,
  },
  sharp_stone: {
    name: "sharp_stone",
    plural: "sharp stones",
    description: "I kept grinding a rock on the floor until it was pointy.",
    rarity: 2,
  },
  stone_knife: {
    name: "stone_knife",
    plural: "stone knives",
    description: "Careful, it's sharp!",
    durability: 50,
    rarity: 2,
  },
  stone_hammer: {
    name: "stone_hammer",
    plural: "stone hammers",
    description: "Makes it much easier to smash things.",
    durability: 50,
    rarity: 2,
  },
  stone_axe: {
    name: "stone_axe",
    plural: "stone axes",
    description: "Cuts trees down with ease.",
    durability: 50,
    rarity: 3,
  },
}
// name: {
//   id: ,
//   name: "",
//   plural: "",
//   description: "",
//   rarity: ,
// },
export default items;