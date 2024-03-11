// onEvent('recipes', event => {
//   milestoneRecipes({
//     id: 'chromatic_compound',
//     recipe: () => {},
//     children: [
//       {
//         id: 'inert_compound',
//         recipe: () => {
//           event.recipes.create
//             .mixing('kubejs:inert_compound', [
//               'kubejs:dust_mixed',
//               'mekanism:dust_quartz',
//             ])
//             .superheated();
//         },
//         children: [
//           {
//             id: 'mineral_blend',
//             recipe: () => {},
//             children: [
//               {
//                 id: 'quartz_dust',
//                 recipe: () => {},
//                 children: [{id: 'rose_quartz', recipe: () => {}}],
//               },
//               {
//                 id: 'zinc_oxide',
//                 recipe: () => {},
//                 children: [
//                   {
//                     id: 'zinc_dust',
//                     recipe: () => {},
//                     children: [
//                       {
//                         id: 'zinc_ingot',
//                         recipe: () => {},
//                         children: [{id: 'raw_zinc', recipe: () => {}}],
//                       },
//                     ],
//                   },
//                   {id: 'oxygen', recipe: () => {}},
//                 ],
//               },
//               {
//                 id: 'witherite_dust',
//                 recipe: () => {},
//                 children: [{id: 'witherite_ingot', recipe: () => {}}],
//               },
//               {
//                 id: 'electrum_dust',
//                 recipe: () => {},
//                 children: [
//                   {
//                     id: 'electrum_ingot',
//                     recipe: () => {},
//                     children: [{id: 'rose_gold_ingot', recipe: () => {}}],
//                   },
//                 ],
//               },
//               {
//                 id: 'silica_dust',
//                 recipe: () => {},
//                 children: [{id: 'silicon', recipe: () => {}}],
//               },
//               {
//                 id: 'gunpowder',
//                 recipe: () => {},
//                 children: [],
//               },
//             ],
//           },
//           {id: 'elastic_fiber', recipe: () => {}},
//           {id: 'strong_fiber', recipe: () => {}},
//           {
//             id: 'crimson_resin',
//             recipe: () => {
//               event.custom({
//                 type: 'rankine:treetapping',
//                 tapTime: 400,
//                 input: {
//                   item: 'minecraft:crimson_stem',
//                 },
//                 result: {
//                   fluid: 'kubejs:warped_resin',
//                   amount: 50,
//                 },
//               });
//             },
//           },
//           {
//             id: 'warped_resin',
//             recipe: () => {
//               event.custom({
//                 type: 'rankine:treetapping',
//                 tapTime: 400,
//                 input: {
//                   item: 'minecraft:warped_stem',
//                 },
//                 result: {
//                   fluid: 'kubejs:crimson_resin',
//                   amount: 50,
//                 },
//               });
//             },
//           },
//           {
//             id: 'drop_of_tar',
//             recipe: () => {},
//             children: [
//               {
//                 id: 'tar_slurry',
//                 recipe: () => {},
//                 children: [{id: 'tar_sand', recipe: () => {}}],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 'polar_pigments',
//         recipe: () => {},
//         children: [
//           {id: 'blue_pigment', recipe: () => {}},
//           {id: 'light_blue_pigment', recipe: () => {}},
//           {id: 'cyan_pigment', recipe: () => {}},
//           {id: 'white_pigment', recipe: () => {}},
//         ],
//       },
//       {
//         id: 'verdant_variants',
//         recipe: () => {},
//         children: [
//           {id: 'green_pigment', recipe: () => {}},
//           {id: 'lime_pigment', recipe: () => {}},
//           {id: 'dark_gray_pigment', recipe: () => {}},
//           {id: 'black_pigment', recipe: () => {}},
//         ],
//       },
//       {
//         id: 'sunset_shades',
//         recipe: () => {},
//         children: [
//           {id: 'red_pigment', recipe: () => {}},
//           {id: 'orange_pigment', recipe: () => {}},
//           {id: 'yellow_pigment', recipe: () => {}},
//           {id: 'brown_pigment', recipe: () => {}},
//         ],
//       },
//       {
//         id: 'twilight_tones',
//         recipe: () => {},
//         children: [
//           {id: 'purple_pigment', recipe: () => {}},
//           {id: 'magenta_pigment', recipe: () => {}},
//           {id: 'pink_pigment', recipe: () => {}},
//           {id: 'light_gray_pigment', recipe: () => {}},
//         ],
//       },
//     ],
//   });

//   event.custom({
//     type: 'naturesaura:altar',
//     input: {
//       item: config.input,
//     },
//     output: {
//       item: config.output,
//     },
//     aura_type: `naturesaura:${config.aura_type || 'overworld'}`,
//     aura: config.aura || 15000,
//     time: config.time || 80,
//   });

//   event.custom({
//     type: 'bloodmagic:altar',
//     input: {
//       item: config.input,
//     },
//     output: {
//       item: config.output,
//     },
//     upgradeLevel: config.level || 0,
//     altarSyphon: config.syphon,
//     consumptionRate: config.rate,
//     drainRate: config.rate,
//   });
// });
