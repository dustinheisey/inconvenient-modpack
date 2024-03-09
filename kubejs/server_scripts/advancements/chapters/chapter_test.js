onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_test', {
    icon: 'create:brass_hand',
    item: 'endrem:lost_eye',
    title: 'Chapter 4: Inconvenient Truths',
    description: 'Understand what happened',
    background: 'chipped:textures/block/nether_bricks/nether_bricks_9.png',
    children: [
      {
        item: 'create:mechanical_press',
        title: 'Mechanical Press',
        description: 'Craft a mechanical press',
        frame: 'goal',
        children: [
          {
            item: 'create:sturdy_sheet',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'bloodmagic:ritualdiviner',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'bloodmagic:strong_tau',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'bloodmagic:weakbloodshard',
                        title: 'Weak Blood Shard',
                        description: 'Create a weak blood shard',
                        children: [
                          {
                            item: 'occultism:chalk_red',
                            title: 'Circles of the Pheonix',
                            description: 'Craft some red chalk',
                            children: [
                              {
                                item: 'occultism:infused_pickaxe',
                                title: 'Infused Pickaxe',
                                description: 'Craft an infused pickaxe',
                              },
                            ],
                          },
                          {
                            item: 'bloodmagic:masterbloodorb',
                            title: "Magician's Blood Orb",
                            description: "Create a magician's blood orb",
                          },
                        ],
                      },
                      {
                        item: 'kubejs:liquid_tau_bucket',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            item: 'chemlib:copper_plate',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'create:item_drain',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [],
              },
              {
                item: 'create:deployer',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [],
              },
              {
                item: 'create:fluid_tank',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:spout',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            item: 'chemlib:iron_plate',
            title: 'Bread',
            frame: 'goal',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'adchimneys:metal_chimney',
                title: 'Chimney',
                description: 'Craft a metal chimney',
                children: [
                  {
                    item: 'adchimneys:metal_vent',
                    title: 'Vent',
                    description: 'Craft a metal vent',
                    children: [
                      {
                        item: 'adchimneys:metal_pump',
                        title: 'Pump',
                        description: 'Craft a metal pump',
                      },
                    ],
                  },
                ],
              },
              {
                item: 'create:whisk',
                title: 'Bread',
                frame: 'goal',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:mechanical_mixer',
                    title: 'Bread',
                    frame: 'goal',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'kubejs:carbonate_slurry_bucket',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'minecraft:potion',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'charcoal_pit:alcohol_bucket',
                                title: 'Tainted Gold',
                                description:
                                  'Collect a tainted gold ingot from a crimson altar',
                              },
                              {
                                item: 'charcoal_pit:vinegar_bucket',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [],
                              },
                              {
                                item: 'kubejs:tartaric_acid',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'kubejs:cream_of_tartar',
                                    title: 'Bread',
                                    description:
                                      'Make your first piece of bread',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        item: 'create:cinder_flour',
                        title: 'Bread',
                        frame: 'goal',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'kubejs:cake_mix',
                            title: 'Bread',
                            frame: 'goal',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'kubejs:cake_batter',
                                title: 'Bread',
                                frame: 'goal',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'create:blaze_cake_base',
                                    title: 'Bread',
                                    frame: 'goal',
                                    description:
                                      'Make your first piece of bread',
                                    children: [
                                      {
                                        item: 'create:blaze_cake',
                                        title: 'Bread',
                                        frame: 'goal',
                                        description:
                                          'Make your first piece of bread',
                                        children: [
                                          {
                                            icon: 'endrem:nether_eye',
                                            title: 'Forest Fires',
                                            description:
                                              'Go to sleep after brewing some purulent tea',
                                            frame: 'challenge',
                                            id: 'eye_nether',
                                            criteria: {
                                              consume: {
                                                trigger:
                                                  'minecraft:consume_item',
                                                conditions: {
                                                  item: {
                                                    items: [
                                                      'farmersrespite:purulent_tea',
                                                    ],
                                                  },
                                                },
                                              },
                                              sleep: {
                                                trigger:
                                                  'minecraft:slept_in_bed',
                                              },
                                            },
                                            reward: 'im:eyes/eye_nether',
                                          },
                                          {
                                            item: 'farmersrespite:purulent_tea',
                                            title: 'Bread',
                                            frame: 'goal',
                                            description:
                                              'Make your first piece of bread',
                                            children: [
                                              {
                                                title: 'Burning Truth',
                                                description:
                                                  'Find a page from a lost story in the Nether',
                                                item: 'kubejs:lost_page_nether',
                                                children: [
                                                  {
                                                    title: 'A Dire Warning',
                                                    id: 'lost_story_nether',
                                                    frame: 'challenge',
                                                    description:
                                                      'Remake the lost story from the Nether',
                                                    item: 'kubejs:lost_story_nether',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'minecraft:warped_fungus',
                                                title: 'Tainted Gold',
                                                description:
                                                  'Collect a tainted gold ingot from a crimson altar',
                                                children: [
                                                  {
                                                    item: 'kubejs:warped_resin_bucket',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'kubejs:polar_pigments_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                      {
                                                        item: 'kubejs:twilight_tones_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },

                                              {
                                                item: 'minecraft:crimson_fungus',
                                                title: 'Tainted Gold',
                                                description:
                                                  'Collect a tainted gold ingot from a crimson altar',
                                                children: [
                                                  {
                                                    item: 'kubejs:crimson_resin_bucket',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'kubejs:verdant_variants_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                      {
                                                        item: 'kubejs:sunset_shades_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'cataclysm:altar_of_fire',
                                                title: 'Tainted Gold',
                                                description:
                                                  'Collect a tainted gold ingot from a crimson altar',
                                                children: [
                                                  {
                                                    item: 'biomancy:elastic_fibers',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'malum:blazing_quartz',
                                                title: 'Tainted Gold',
                                                description:
                                                  'Collect a tainted gold ingot from a crimson altar',
                                                children: [
                                                  {
                                                    item: 'mekanism:dust_quartz',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'minecraft:netherite_ingot',
                                                title: 'Tainted Gold',
                                                description:
                                                  'Collect a tainted gold ingot from a crimson altar',
                                                children: [
                                                  {
                                                    item: 'biomancy:tough_fibers',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                  },
                                                  {
                                                    item: 'cataclysm:witherite_ingot',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'kubejs:witherite_dust',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'minecraft:gold_ingot',
                                                title: 'Gold',
                                                description:
                                                  'Forge a gold ingot',
                                                children: [
                                                  {
                                                    item: 'rankine:rose_gold_ingot',
                                                    title: 'Rose Gold',
                                                    description:
                                                      'Create a rose gold ingot',
                                                    children: [
                                                      {
                                                        item: 'immersiveengineering:ingot_electrum',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [
                                                          {
                                                            item: 'immersiveengineering:dust_electrum',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'kubejs:dust_mixed',
                                                                title:
                                                                  'Tainted Gold',
                                                                description:
                                                                  'Collect a tainted gold ingot from a crimson altar',
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
                                                item: 'rankine:zinc_ingot',
                                                title: 'Zinc',
                                                description:
                                                  'Forge a zinc ingot',
                                                children: [
                                                  {
                                                    item: 'chemlib:zinc_oxide_dust',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                  },
                                                  {
                                                    item: 'rankine:brass_ingot',
                                                    title: 'Brass',
                                                    description:
                                                      'Forge a brass ingot',
                                                    children: [
                                                      {
                                                        item: 'kubejs:brass_dust',
                                                        title: 'Alloy Furnace',
                                                        description:
                                                          'Craft an alloy furnace',
                                                      },
                                                      {
                                                        item: 'rankine:alloy_furnace',
                                                        title: 'Alloy Furnace',
                                                        description:
                                                          'Craft an alloy furnace',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'naturesaura:aura_bottle',
                                                title: 'Gunpowder',
                                                description: 'Create gunpowder',
                                              },
                                              {
                                                item: 'minecraft:netherrack',
                                                frame: 'goal',
                                                title: 'Gunpowder',
                                                description: 'Create gunpowder',
                                                children: [
                                                  {
                                                    item: 'kubejs:tar_sand',
                                                    frame: 'goal',
                                                    title: 'Gunpowder',
                                                    description:
                                                      'Create gunpowder',
                                                    children: [
                                                      {
                                                        item: 'kubejs:tar_slurry_bucket',
                                                        frame: 'goal',
                                                        title: 'Gunpowder',
                                                        description:
                                                          'Create gunpowder',
                                                        children: [
                                                          {
                                                            item: 'kubejs:drop_of_tar',
                                                            frame: 'goal',
                                                            title: 'Gunpowder',
                                                            description:
                                                              'Create gunpowder',
                                                            children: [
                                                              {
                                                                item: 'create:chromatic_compound',
                                                                title:
                                                                  'Gunpowder',
                                                                frame: 'goal',
                                                                description:
                                                                  'Create gunpowder',
                                                                children: [
                                                                  {
                                                                    item: 'create:chromatic_compound',
                                                                    frame:
                                                                      'goal',
                                                                    title:
                                                                      'Gunpowder',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'create:shadow_steel',
                                                                        frame:
                                                                          'challenge',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                      },
                                                                      {
                                                                        item: 'create:refined_radiance',
                                                                        frame:
                                                                          'challenge',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
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
                                                item: 'rankine:sulfur',
                                                title: 'Sulfur',
                                                description: 'Mine some sulfur',
                                                children: [
                                                  {
                                                    item: 'minecraft:gunpowder',
                                                    title: 'Gunpowder',
                                                    description:
                                                      'Create gunpowder',
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
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
                        item: 'kubejs:egg_whip',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [],
                      },
                      {
                        item: 'kubejs:flaxseed_oil_bucket',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                      },
                    ],
                  },
                ],
              },
              {
                item: 'create:propeller',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:encased_fan',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'minecraft:soul_torch',
                        title: 'Soul Torch',
                        description: 'Create a soul torch',
                        children: [
                          {
                            item: 'cold_sweat:soulspring_lamp',
                            title: 'Soulspring Lamp',
                            id: 'soulspring_lamp',
                            description:
                              'Craft a soulspring lamp to stay cool in the nether',
                          },
                        ],
                      },
                      {
                        item: 'minecraft:magma_cream',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'tconstruct:magma_bucket',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [],
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
            item: 'chemlib:silver_plate',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'create:blaze_burner',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'kubejs:cinder_ingot',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'create:mechanical_crafter',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'create:crushing_wheel',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'kubejs:pebble_mixed',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [],
                              },
                              {
                                item: 'kubejs:dust_trona',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'kubejs:carbonate_slurry_bucket',
                                    title: 'Bread',
                                    description:
                                      'Make your first piece of bread',
                                    children: [
                                      {
                                        item: 'kubejs:soda_ash',
                                        title: 'Bread',
                                        description:
                                          'Make your first piece of bread',
                                        children: [
                                          {
                                            item: 'kubejs:baking_soda',
                                            title: 'Bread',
                                            description:
                                              'Make your first piece of bread',
                                            children: [
                                              {
                                                item: 'kubejs:baking_powder',
                                                title: 'Bread',
                                                description:
                                                  'Make your first piece of bread',
                                                children: [],
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
                                item: 'kubejs:calcium_carbonate_dust',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'rankine:carbon_dioxide_gas_bottle',
                                    title: 'Bread',
                                    description:
                                      'Make your first piece of bread',
                                    children: [],
                                  },
                                ],
                              },
                              {
                                item: 'minecraft:sugar',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [],
                              },
                              {
                                item: 'delightful:matcha',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});
