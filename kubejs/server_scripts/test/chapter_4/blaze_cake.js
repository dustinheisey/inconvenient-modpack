onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'blaze_cake',
    recipe: () => {
      event.remove({output: 'create:blaze_cake'});
      event.recipes
        .createSequencedAssembly(
          ['create:blaze_cake'],
          'create:blaze_cake_base',
          [
            event.recipes.createFilling('create:blaze_cake_base', [
              'create:blaze_cake_base',
              Fluid.of('createaddition:seed_oil', 500000),
            ]),
            event.recipes.createFilling('create:blaze_cake_base', [
              'create:blaze_cake_base',
              Fluid.of('kubejs:liquid_tau', 100000),
            ]),
            event.recipes.createFilling('create:blaze_cake_base', [
              'create:blaze_cake_base',
              Fluid.of('tconstruct:magma', 500000),
            ]),
            event.recipes.createFilling('create:blaze_cake_base', [
              'create:blaze_cake_base',
              Fluid.of('bloodmagic:life_essence_fluid', 1000000),
            ]),
            event.recipes.createFilling('create:blaze_cake', [
              'create:blaze_cake_base',
              Fluid.of('minecraft:lava', 500000),
            ]),
          ]
        )
        .transitionalItem('create:blaze_cake_base')
        .loops(1);
    },
    children: [
      {
        id: 'blaze_cake_base',
        recipe: () => {
          event.remove({output: 'create:blaze_cake_base'});
          event.recipes
            .createCompacting(
              'create:blaze_cake_base',
              Fluid.of('kubejs:blaze_cake_batter', 1000000)
            )
            .heated();
        },
        children: [
          {
            id: 'cake_batter',
            recipe: () => {
              event.recipes.create.mixing(
                Fluid.of('kubejs:blaze_cake_batter', 1000),
                [
                  Fluid.of('charcoal_pit:sunflower_oil', 1000),
                  'kubejs:egg_whip',
                  'kubejs:cake_mix',
                ]
              );
            },
            children: [
              {
                id: 'sunflower_oil',
                recipe: () => {
                  event.recipes.createCompacting(
                    Fluid.of('charcoal_pit:sunflower_oil', 250),
                    'minecraft:sunflower'
                  );
                },
              },
              {
                id: 'vinegar',
                recipe: () => {
                  event.custom({
                    type: 'charcoal_pit:barrel',
                    item_in: {
                      tag: 'forge:mushrooms',
                    },
                    fluid_in: {
                      fluid: 'charcoal_pit:alcohol_still',
                      amount: 1000,
                    },
                    fluid_out: {
                      fluid: 'charcoal_pit:vinegar_still',
                      amount: 1000,
                    },
                    flags: 1,
                    time: 6000,
                  });
                },
                children: [
                  {
                    id: 'alcohol',
                    recipe: () => {
                      event.recipes.create
                        .mixing(Fluid.of('charcoal_pit:alcohol_still', 250), [
                          Fluid.of('kubejs:wine', 1000),
                        ])
                        .heated();
                    },
                    children: [
                      {
                        id: 'wine',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              tag: 'forge:mushrooms',
                            },
                            fluid_in: {
                              fluid: 'kubejs:berry_juice',
                              amount: 16000,
                            },
                            fluid_out: {
                              fluid: 'kubejs:wine',
                              amount: 4000,
                            },
                            item_out: {
                              item: 'kubejs:tartaric_acid',
                            },
                            flags: 1,
                            time: 6000,
                          });
                        },
                        children: [
                          {
                            id: 'berry_juice',
                            recipe: () => {
                              event.recipes.createCompacting(
                                Fluid.of('kubejs:berry_juice', 50),
                                '#forge:berries'
                              );
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 'egg_whip',
                recipe: () => {
                  event.recipes.create.mixing('kubejs:egg_whip', [
                    '2x minecraft:egg',
                  ]);
                },
              },
              {
                id: 'cake_mix',
                recipe: () => {
                  event.recipes.create.mixing('kubejs:cake_mix', [
                    '3x kubejs:dust_cinnamon',
                    '3x minecraft:sugar',
                    'kubejs:baking_powder',
                    '2x create:cinder_flour',
                  ]);
                },
                children: [
                  {
                    id: 'cinnamon_dust',
                    recipe: () => {
                      event.recipes.create.crushing(
                        ['kubejs:dust_cinnamon'],
                        'rankine:cinnamon'
                      );
                    },
                  },
                  {
                    id: 'sugar',
                    recipe: () => {
                      event.remove({output: 'minecraft:sugar'});
                      event.recipes.create.crushing(
                        ['minecraft:sugar'],
                        'minecraft:sugar_cane'
                      );
                    },
                  },
                  {
                    id: 'baking_powder',
                    recipe: () => {
                      event.recipes.create.mixing('kubejs:baking_powder', [
                        'kubejs:baking_soda',
                        'kubejs:cream_of_tartar',
                      ]);
                    },
                    children: [
                      {
                        id: 'baking_soda',
                        recipe: () => {
                          event.recipes.create
                            .mixing('kubejs:baking_soda', [
                              'kubejs:soda_ash',
                              'rankine:carbon_dioxide_gas_bottle',
                            ])
                            .heated();
                        },
                        children: [
                          {
                            id: 'soda_ash',
                            recipe: () => {
                              event.custom({
                                type: 'rankine:evaporation',
                                processTime: 12000,
                                input: {
                                  fluid: 'kubejs:carbonate_slurry',
                                },
                                outputs: [
                                  {item: 'kubejs:soda_ash', weight: 100},
                                ],
                              });
                            },
                            children: [
                              {
                                id: 'carbonate_slurry',
                                recipe: () => {
                                  event.recipes.create
                                    .mixing(
                                      Fluid.of('kubejs:carbonate_slurry', 1000),
                                      [
                                        Fluid.of('minecraft:water', 1000),
                                        'kubejs:dust_trona',
                                      ]
                                    )
                                    .heated();
                                },
                                children: [
                                  {
                                    id: 'trona_dust',
                                    recipe: () => {
                                      event.recipes.create.crushing(
                                        ['kubejs:dust_trona'],
                                        'kubejs:crushed_trona'
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'crushed_trona',
                                        recipe: () => {
                                          event.recipes.create.crushing(
                                            ['kubejs:crushed_trona'],
                                            'rankine:trona'
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'trona',
                                            recipe: () => {
                                              event.remove({
                                                id: 'rankine:evaporation/water_river_evaporation',
                                              });
                                              event.custom({
                                                type: 'rankine:evaporation',
                                                processTime: 12000,
                                                biomes: {
                                                  biomeTags: [
                                                    'minecraft:is_river',
                                                    'forge:is_swamp',
                                                  ],
                                                },
                                                input: {
                                                  fluid: 'minecraft:water',
                                                },
                                                outputs: [
                                                  {
                                                    item: 'minecraft:sand',
                                                    weight: 30,
                                                  },
                                                  {
                                                    item: 'rankine:silt',
                                                    weight: 50,
                                                  },
                                                  {
                                                    item: 'minecraft:clay_ball',
                                                    weight: 20,
                                                  },
                                                  {
                                                    item: 'rankine:trona',
                                                    weight: 4,
                                                  },
                                                ],
                                              });
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            id: 'carbon_dioxide',
                            recipe: () => {
                              event.recipes.create
                                .mixing('rankine:carbon_dioxide_gas_bottle', [
                                  Fluid.of('charcoal_pit:vinegar_still', 1000),
                                  'kubejs:dust_calcium_carbonate',
                                ])
                                .heated();
                            },
                            children: [
                              {
                                id: 'calcium_carbonate',
                                recipe: () => {
                                  event.recipes.create.crushing(
                                    ['kubejs:dust_calcium_carbonate'],
                                    'rankine:gray_marble'
                                  );
                                },
                                children: [
                                  {
                                    id: 'gray_marble',
                                    recipe: () => {
                                      event.remove({
                                        id: 'rankine:stonegen_metamorphic/gray_marble_generator',
                                      });
                                      event.recipes.create
                                        .mixing('rankine:gray_marble', [
                                          'rankine:white_marble',
                                          'rankine:black_marble',
                                        ])
                                        .heated();
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 'cream_of_tartar',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:cream_of_tartar'],
                            'kubejs:tartaric_acid'
                          );
                        },
                      },
                    ],
                  },
                  {
                    id: 'cinder_flour',
                    recipe: () => {
                      event.remove({output: 'create:cinder_flour'});
                      event.recipes.create
                        .mixing('create:cinder_flour', ['kubejs:dust_cinder'])
                        .heated();
                    },
                    children: [
                      {
                        id: 'cinder_dust',
                        recipe: () => {
                          event.recipes.create
                            .mixing('kubejs:dust_cinder', [
                              'create:powdered_obsidian',
                            ])
                            .heated();
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'liquid_tau',
        recipe: () => {
          event.custom({
            type: 'tconstruct:melting',
            ingredient: {
              item: 'bloodmagic:strong_tau',
            },
            result: {
              fluid: 'kubejs:liquid_tau',
              amount: 1000,
            },
            temperature: 1200,
            time: 30,
          });
        },
      },
      {
        id: 'lava',
        recipe: () => {
          event.remove({id: 'rankine:treetapping/crimson_stem_treetapping'});
          event.remove({id: 'rankine:treetapping/warped_stem_treetapping'});
          event.custom({
            type: 'tconstruct:melting',
            ingredient: {
              item: 'kubejs:pebble_mixed',
            },
            result: {
              fluid: 'minecraft:lava',
              amount: 50,
            },
            temperature: 600,
            time: 30,
          });
        },
        children: [
          {
            id: 'mixed_pebble',
            recipe: () => {
              event.recipes.create.mixing('kubejs:pebble_mixed', [
                'kubejs:pebble_turquoise',
                'undergarden:depthrock_pebble',
                'kubejs:pebble_lunar',
                'kubejs:pebble_deadrock',
              ]);
            },
            children: [
              {
                id: 'turquoise_pebble',
                recipe: () => {
                  event.recipes.create.crushing(
                    [Item.of('kubejs:pebble_turquoise').withChance(0.5)],
                    'blue_skies:turquoise_stone'
                  );
                },
              },
              {
                id: 'depthrock_pebble',
                recipe: () => {
                  event.remove({output: 'undergarden:depthrock_pebble'});
                  event.recipes.create.crushing(
                    [Item.of('undergarden:depthrock_pebble').withChance(0.5)],
                    'undergarden:depthrock'
                  );
                },
              },
              {
                id: 'lunar_pebble',
                recipe: () => {
                  event.recipes.create.crushing(
                    [Item.of('kubejs:pebble_lunar').withChance(0.5)],
                    'blue_skies:lunar_stone'
                  );
                },
              },
              {
                id: 'deadrock_pebble',
                recipe: () => {
                  event.recipes.create.crushing(
                    [Item.of('kubejs:pebble_deadrock').withChance(0.5)],
                    'twilightforest:deadrock'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        id: 'magma_cream',
        recipe: () => {
          event.remove({
            output: `minecraft:magma_cream`,
            type: 'minecraft:crafting_shapeless',
          });
          event.recipes.create.haunting(
            'minecraft:magma_cream',
            'malum:unholy_sapball'
          );
        },
      },
    ],
  });
});
