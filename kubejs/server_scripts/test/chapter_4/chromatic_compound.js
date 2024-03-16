onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'chromatic_compound',
    recipe: () => {
      event.remove({output: 'create:chromatic_compound'});
      event.recipes.create
        .sequenced_assembly(
          ['create:chromatic_compound'],
          'kubejs:inert_compound',
          [
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:polar_pigments', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:verdant_variants', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:sunset_shades', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:twilight_tones', 1000000),
            ]),
          ]
        )
        .transitionalItem('kubejs:inert_compound')
        .loops(1);
    },
    children: [
      {
        id: 'inert_compound',
        recipe: () => {
          event.recipes.create
            .sequenced_assembly(
              ['kubejs:inert_compound'],
              'create:polished_rose_quartz',
              [
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
              ]
            )
            .transitionalItem('create:polished_rose_quartz')
            .loops(1);
        },
        children: [
          {
            id: 'rose_quartz',
            recipe: () => {
              event.recipes.create.filling('create:rose_quartz', [
                'malum:blazing_quartz',
                Fluid.of('tconstruct:molten_rose_gold', 1000000),
              ]);
            },
          },
          {
            id: 'mysterious_adhesive',
            recipe: () => {
              event.recipes
                .createMixing(Fluid.of('kubejs:mysterious_adhesive', 1000), [
                  'biomancy:tough_fibers',
                  'biomancy:elastic_fibers',
                  'kubejs:dust_mixed',
                  Fluid.of('kubejs:pure_tar', 1000),
                  Fluid.of('kubejs:crimson_resin', 1000),
                  Fluid.of('kubejs:warped_resin', 1000),
                ])
                .superheated();
            },
            children: [
              {
                id: 'pure_tar',
                recipe: () => {
                  event.recipes
                    .createMixing(Fluid.of('kubejs:pure_tar', 1000), [
                      '3x kubejs:drop_of_tar',
                    ])
                    .superheated();
                },
                children: [
                  {
                    id: 'drop_of_tar',
                    recipe: () => {
                      event.custom({
                        type: 'rankine:evaporation',
                        processTime: 12000,
                        input: {
                          fluid: 'kubejs:tar_slurry',
                        },
                        outputs: [{item: 'kubejs:drop_of_tar', weight: 100}],
                      });
                    },
                    children: [
                      {
                        id: 'tar_slurry',
                        recipe: () => {
                          event.recipes.createMixing(
                            Fluid.of('kubejs:tar_slurry', 1000),
                            [
                              'kubejs:tar_sand',
                              Fluid.of('minecraft:water', 1000),
                            ]
                          );
                        },
                        children: [
                          {
                            id: 'tar_sand',
                            recipe: () => {
                              event.remove({output: 'minecraft:netherrack'});
                              event.custom({
                                type: 'rankine:crushing',
                                input: {
                                  item: 'minecraft:netherrack',
                                },
                                guaranteed: [
                                  {
                                    item: 'kubejs:dust_cinder',
                                  },
                                ],
                                outputs: [
                                  {
                                    weight: 99,
                                    remove: false,
                                  },
                                  {
                                    item: 'kubejs:tar_sand',
                                    weight: 1,
                                    remove: false,
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
              {
                id: 'dust_mixed',
                recipe: () => {
                  event.recipes.create
                    .mixing('kubejs:dust_mixed', [
                      'kubejs:dust_witherite',
                      'immersiveengineering:dust_electrum',
                      'minecraft:gunpowder',
                      'chemlib:zinc_oxide_dust',
                    ])
                    .superheated();
                },
                children: [
                  {
                    id: 'witherite_dust',
                    recipe: () => {
                      event.recipes.create.crushing(
                        ['kubejs:dust_witherite'],
                        'cataclysm:witherite_ingot'
                      );
                    },
                    children: [
                      {
                        id: 'witherite_ingot',
                        recipe: () => {
                          event.recipes.create
                            .mixing('cataclysm:witherite_ingot', [
                              'minecraft:netherite_ingot',
                              '3x charcoal_pit:nether_shard',
                            ])
                            .superheated();
                        },
                      },
                    ],
                  },
                  {
                    id: 'electrum_dust',
                    recipe: () => {
                      event.recipes.create.crushing(
                        ['immersiveengineering:dust_electrum'],
                        'immersiveengineering:ingot_electrum'
                      );
                    },
                    children: [
                      {
                        id: 'electrum_ingot',
                        recipe: () => {
                          event.recipes.create
                            .mixing('immersiveengineering:ingot_electrum', [
                              'naturesaura:tainted_gold',
                              'rankine:silver_ingot',
                            ])
                            .superheated();
                        },
                      },
                    ],
                  },
                  {
                    id: 'gunpowder',
                    recipe: () => {
                      event.remove({output: 'minecraft:gunpowder'});
                      event.recipes.createCompacting(
                        'minecraft:gunpowder',
                        '64x charcoal_pit:tiny_gunpowder'
                      );
                    },
                    children: [
                      {
                        id: 'tiny_gunpowder',
                        recipe: () => {
                          event.custom({
                            type: 'bloodmagic:alchemytable',
                            input: [
                              {item: 'bloodmagic:saltpeter'},
                              {item: 'chemlib:sulfur_dust'},
                              {item: 'malum:arcane_charcoal'},
                            ],
                            output: {
                              item: 'charcoal_pit:tiny_gunpowder',
                              count: 1,
                            },
                            syphon: 4000,
                            ticks: 200,
                            upgradeLevel: 1,
                          });
                        },
                        children: [
                          {
                            id: 'saltpeter',
                            recipe: () => {
                              event.recipes.create.crushing(
                                ['bloodmagic:saltpeter'],
                                'kubejs:chunks_potassium_nitrate'
                              );
                            },
                            children: [
                              {
                                id: 'potassium_nitrate_chunks',
                                recipe: () => {
                                  event.recipes.create
                                    .mixing('bloodmagic:saltpeter', [
                                      Fluid.of('kubejs:compost', 1000),
                                    ])
                                    .superheated();
                                },
                                children: [
                                  {
                                    id: 'compost',
                                    recipe: () => {
                                      event.recipes.create.mixing(
                                        Fluid.of('kubejs:compost', 1000),
                                        [
                                          Fluid.of('minecraft:water', 1000),
                                          'nethersdelight:rich_soul_soil',
                                        ]
                                      );
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
                    id: 'zinc_oxide',
                    recipe: () => {
                      event.recipes.create.mixing('chemlib:zinc_oxide_dust', [
                        'chemlib:zinc_dust',
                        'rankine:oxygen_gas_bottle',
                      ]);
                    },
                    children: [
                      {
                        id: 'zinc_dust',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['chemlib:zinc_dust'],
                            'rankine:zinc_ingot'
                          );
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'warped_resin',
                recipe: () => {
                  event.custom({
                    type: 'rankine:treetapping',
                    tapTime: 400,
                    input: {
                      item: 'minecraft:warped_stem',
                    },
                    result: {
                      fluid: 'kubejs:warped_resin',
                      amount: 50,
                    },
                  });
                },
              },
              {
                id: 'crimson_resin',
                recipe: () => {
                  event.custom({
                    type: 'rankine:treetapping',
                    tapTime: 400,
                    input: {
                      item: 'minecraft:crimson_stem',
                    },
                    result: {
                      fluid: 'kubejs:warped_resin',
                      amount: 50,
                    },
                  });
                },
              },
            ],
          },
        ],
      },
      {
        id: 'polar_pigments',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:polar_pigments', 1000), [
              Fluid.of('kubejs:blue_dye', 1000),
              Fluid.of('kubejs:light_blue_dye', 1000),
              Fluid.of('kubejs:cyan_dye', 1000),
              Fluid.of('kubejs:white_dye', 1000),
            ])
            .superheated();
        },
        children: [
          {
            id: 'blue_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:blue_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:blue_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'blue_dye',
                recipe: () => {
                  event.recipes.create.crushing(
                    ['minecraft:blue_dye'],
                    'mekanism:dust_lapis_lazuli'
                  );

                  event.recipes.create.crushing(
                    ['mekanism:dust_lapis_lazuli'],
                    'minecraft:lapis_lazuli'
                  );
                },
              },
            ],
          },
          {
            id: 'light_blue_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:light_blue_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:light_blue_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'light_blue_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:light_blue_dye', [
                    'minecraft:white_dye',
                    'minecraft:blue_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'cyan_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:cyan_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:cyan_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'cyan_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:cyan_dye', [
                    'minecraft:green_dye',
                    'minecraft:blue_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'white_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:white_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:white_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'white_dye',
                recipe: () => {
                  event.recipes.create.milling(
                    'minecraft:white_dye',
                    'minecraft:bone_meal'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        id: 'verdant_variants',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:verdant_variants', 1000), [
              Fluid.of('kubejs:green_dye', 1000),
              Fluid.of('kubejs:lime_dye', 1000),
              Fluid.of('kubejs:gray_dye', 1000),
              Fluid.of('kubejs:black_dye', 1000),
            ])
            .superheated();
        },
        children: [
          {
            id: 'green_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:green_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:green_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'green_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:green_dye', [
                    'minecraft:yellow_dye',
                    'minecraft:blue_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'lime_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:lime_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:lime_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'lime_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:lime_dye', [
                    'minecraft:green_dye',
                    'minecraft:white_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'gray_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:gray_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:gray_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'gray_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:gray_dye', [
                      Fluid.of('minecraft:water', 1000),
                      'rankine:oyster_mushroom',
                    ])
                    .superheated();
                },
              },
            ],
          },
          {
            id: 'black_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:black_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:black_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'black_dye',
                recipe: () => {
                  event.recipes.create.milling(
                    'minecraft:black_dye',
                    'rankine:bone_char'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        id: 'sunset_shades',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:sunset_shades', 1000), [
              Fluid.of('kubejs:red_dye', 1000),
              Fluid.of('kubejs:orange_dye', 1000),
              Fluid.of('kubejs:yellow_dye', 1000),
              Fluid.of('kubejs:brown_dye', 1000),
            ])
            .superheated();
        },
        children: [
          {
            id: 'red_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:red_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:red_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'red_dye',
                recipe: () => {
                  event.custom({
                    type: 'hexerei:mixingcauldron',
                    liquid: {
                      fluid: 'minecraft:water',
                    },
                    ingredients: [
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                      'kubejs:madder_root',
                    ],
                    output: {
                      item: 'minecraft:red_dye',
                      count: 1,
                    },
                    fluidLevelsConsumed: 1000,
                  });

                  event.recipes.create.milling(
                    'minecraft:red_dye',
                    'kubejs:madder_root'
                  );
                },
              },
            ],
          },
          {
            id: 'orange_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:orange_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:orange_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'orange_dye',
                recipe: () => {
                  event.custom({
                    type: 'hexerei:mixingcauldron',
                    liquid: {
                      fluid: 'minecraft:water',
                    },
                    ingredients: [
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                      'kubejs:juniper_bark',
                    ],
                    output: {
                      item: 'minecraft:orange_dye',
                      count: 1,
                    },
                    fluidLevelsConsumed: 1000,
                  });

                  event.recipes.create.milling(
                    'minecraft:orange_dye',
                    'kubejs:juniper_bark'
                  );
                },
              },
            ],
          },
          {
            id: 'yellow_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:yellow_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:yellow_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'yellow_dye',
                recipe: () => {
                  event.custom({
                    type: 'hexerei:mixingcauldron',
                    liquid: {
                      fluid: 'minecraft:water',
                    },
                    ingredients: [
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                      'kubejs:onion_skin',
                    ],
                    output: {
                      item: 'minecraft:yellow_dye',
                      count: 1,
                    },
                    fluidLevelsConsumed: 1000,
                  });

                  event.recipes.create.milling(
                    'minecraft:yellow_dye',
                    'kubejs:onion_skin'
                  );
                },
              },
            ],
          },
          {
            id: 'brown_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:brown_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:brown_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'brown_dye',
                recipe: () => {
                  event.recipes.create.milling(
                    'minecraft:brown_dye',
                    'rankine:roasted_walnut'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        id: 'twilight_tones',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:twilight_tones', 1000), [
              Fluid.of('kubejs:purple_dye', 1000),
              Fluid.of('kubejs:magenta_dye', 1000),
              Fluid.of('kubejs:pink_dye', 1000),
              Fluid.of('kubejs:light_gray_dye', 1000),
            ])
            .superheated();
        },
        children: [
          {
            id: 'purple_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:purple_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:purple_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'purple_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:purple_dye', [
                      Fluid.of('minecraft:water', 1000),
                      'naturalist:snail_shell',
                    ])
                    .superheated();
                },
              },
            ],
          },
          {
            id: 'magenta_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:magenta_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:magenta_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'magenta_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:magenta_dye', [
                    'minecraft:purple_dye',
                    'minecraft:white_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'pink_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:pink_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:pink_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'pink_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:pink_dye', [
                    'minecraft:magenta_dye',
                    'minecraft:white_dye',
                  ]);
                },
              },
            ],
          },
          {
            id: 'light_gray_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:light_gray_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:light_gray_dye',
                ])
                .heated();
            },
            children: [
              {
                id: 'light_gray_dye',
                recipe: () => {
                  event.recipes.create.mixing('minecraft:light_gray_dye', [
                    'minecraft:gray_dye',
                    'minecraft:white_dye',
                  ]);
                },
              },
            ],
          },
        ],
      },
    ],
  });

  // Shadow Steel
  event.custom({
    type: 'bloodmagic:altar',
    input: {
      item: 'create:chromatic_compound',
    },
    output: {
      item: 'create:shadow_steel',
    },
    upgradeLevel: 3,
    altarSyphon: 25000,
    consumptionRate: 25,
    drainRate: 25,
  });

  // Refined Radiance
  event.custom({
    type: 'createaddition:charging',
    input: {
      item: 'create:chromatic_compound',
      count: 1,
    },
    result: {
      item: 'create:refined_radiance',
      count: 1,
    },
    energy: 10000,
  });
});
