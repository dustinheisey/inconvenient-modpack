// {
//   id: 'silicon_dust',
//   recipe: () => {
//     event.recipes.create.crushing(
//       ['chemlib:silicon_dust'],
//       'rankine:silicon'
//     );
//   },
//   children: [
//     {
//       id: 'silicon',
//       recipe: () => {
//         event.recipes.create
//           .mixing('rankine:silicon', [
//             Fluid.of('kubejs:pure_silicon_solution', 1000),
//           ])
//           .superheated();
//       },
//     },
//   ],
// },
// add hydrocloric acid to washed sand
// dry washed sand
// add sodium hydroxide and heat
// add distilled water
// filter mixture through a sand filter to get filtered mixture
// add sulfuric acid
// filter solution
// heat solution to very high temperature :check
// pulverize mixture in a mortar and pestle to make silicon dioxide dust :check
// {
//   id: 'sifted_soul_sand',
//   recipe: () => {
//     event.remove({output: 'chipped:soul_sand_10'});
//     event.recipes.create
//       .sequenced_assembly(
//         ['chipped:soul_sand_10'],
//         'minecraft:soul_sand',
//         [
//           event.recipes.create.mixing('minecraft:soul_sand', [
//             'minecraft:soul_sand',
//             Fluid.of('minecraft:water', 1000000),
//           ]),
//           event.recipes.create.mixing('minecraft:soul_sand', [
//             'minecraft:soul_sand',
//             Fluid.of('minecraft:water', 1000000),
//           ]),
//           event.recipes.create.mixing('minecraft:soul_sand', [
//             'minecraft:soul_sand',
//             Fluid.of('minecraft:water', 1000000),
//           ]),
//           event.recipes.create.mixing('minecraft:soul_sand', [
//             'minecraft:soul_sand',
//             Fluid.of('minecraft:water', 1000000),
//           ]),
//           event.recipes.create.mixing('minecraft:soul_sand', [
//             'minecraft:soul_sand',
//             Fluid.of('minecraft:water', 1000000),
//           ]),
//         ]
//       )
//       .transitionalItem('minecraft:soul_sand')
//       .loops(1);
//   },
// },
// sulfur, charcoal, potasium nitrate, chilli pepper for capsasin
// potasium nitrate - nether compost mixed with water then dripped through a sand filter then heated

onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'computer',
    recipe: () => {},
    children: [],
  });
});
