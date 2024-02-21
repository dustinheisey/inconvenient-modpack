onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_2', {
    icon: 'naturesaura:gold_leaf',
    item: 'cold_sweat:hearth',
    title: 'Chapter 2: Lingering Questions',
    description: 'Who am I? What Happened Here? Why am I here?',
    background: 'occultism:textures/block/otherstone.png',
    children: [
      {
        item: 'minecraft:iron_hoe',
        title: "Plow's Promise",
        description: 'Craft an iron hoe',
        children: [
          {
            item: 'astikorcarts:plow',
            title: 'Promise Fufilled',
            description: 'Craft a plow',
          },
        ],
      },
      {
        item: 'rankine:wooden_gold_pan',
        title: "Sifter's Start",
        description: 'Craft a wooden gold pan',
        children: [
          {
            item: 'rankine:jute',
            title: 'Weave of The Wild',
            description: 'Grow some jute',
            children: [
              {
                item: 'tconstruct:pattern',
                title: 'First Draft',
                description: 'Craft a pattern',
                children: [
                  {
                    item: 'tconstruct:tinker_station',
                    title: 'Workbench Wonders',
                    description: 'Craft a tinker station',
                  },
                ],
              },
            ],
          },
          {
            item: 'rankine:compost',
            title: 'Cycle of Life',
            description: 'Collect some compost',
            children: [
              {
                item: 'farmersdelight:organic_compost',
                title: 'Bounty of Decay',
                description: 'Craft some organic compost',
                children: [
                  {
                    item: 'farmersdelight:rich_soil_farmland',
                    title: 'Fertile Grounds',
                    description: 'Develop some rich farmland',
                  },
                ],
              },
            ],
          },
          {
            item: 'occultism:datura',
            title: 'Fruit of Nightmares',
            description: 'Grow some demon dream fruit',
            children: [
              {
                item: 'occultism:burnt_otherstone',
                title: 'Burnt Into Memory',
                description: 'Create some burnt otherstone',
                children: [
                  {
                    item: 'tconstruct:seared_brick',
                    title: 'Rekindling The Flames',
                    description: 'Craft a seared brick',
                    children: [
                      {
                        item: 'tconstruct:seared_melter',
                        title: "Forge's Beginnings",
                        description: 'Craft a seared melter',
                        children: [
                          {
                            item: 'tconstruct:smeltery_controller',
                            title: 'Heart of the Forge',
                            description: 'Craft a smeltery controller',
                            children: [
                              {
                                item: 'glass',
                                title: 'Clarity in Sand',
                                description: 'Melt sand and create some glass',
                                children: [
                                  {
                                    item: 'kubejs:glass_tube',
                                    title: 'Glass and Shadow',
                                    description: 'Craft a slender glass tube',
                                  },
                                ],
                              },
                              {
                                item: 'bucket',
                                title: 'Metallic Pour',
                                description: 'Upgrade your bucket',
                              },
                              {
                                item: 'tconstruct:ingot_cast',
                                title: 'Casting Futures',
                                description:
                                  'Forge an ingot cast in your smeltery',
                                frame: 'goal',
                                children: [
                                  {
                                    item: 'tconstruct:amethyst_bronze_ingot',
                                    title: 'Mystic Metallurgy',
                                    description:
                                      'Forge an amethyst bronze ingot',
                                    children: [
                                      {
                                        item: 'hexerei:mixing_cauldron',
                                        title: "Cauldron's Call",
                                        description: 'Craft a mixing cauldron',
                                        frame: 'goal',
                                        children: [
                                          {
                                            item: 'hexerei:candle_dipper',
                                            title: "Dipper's Dance",
                                            description:
                                              'Craft a candle dipper',
                                            frame: 'goal',
                                            children: [
                                              {
                                                item: 'blue_skies:bluebright_sapling',
                                                title: 'Whisper of Winter',
                                                description:
                                                  'Dip a sapling in molten amethyst bronze',
                                              },
                                              {
                                                item: 'blue_skies:turquoise_stone',
                                                title: "Winter's Framework",
                                                description:
                                                  'Create some turquoise stone',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    icon: 'blue_skies:everbright_portal',
                                                    id: 'everbright',
                                                    title: 'Winter Bound',
                                                    description:
                                                      'Construct and light a portal to Everbright, then enter',
                                                    frame: 'goal',
                                                    criteria: {
                                                      dimension_change: {
                                                        trigger:
                                                          'minecraft:changed_dimension',
                                                        conditions: {
                                                          from: 'minecraft:overworld',
                                                          to: 'blue_skies:everbright',
                                                        },
                                                      },
                                                    },
                                                    children: [
                                                      {
                                                        item: 'blue_skies:loot_bag_summoner',
                                                        title:
                                                          'Silence of Summons',
                                                        parent: 'everbright',
                                                        description:
                                                          'Kill the Summoner',
                                                        children: [
                                                          {
                                                            item: 'totemic:medicine_bag',
                                                            title:
                                                              "Wanderer's Pouch",
                                                            description:
                                                              'Collect a medicine bag from the Summoner',
                                                          },
                                                          {
                                                            item: 'malum:crude_scythe',
                                                            title:
                                                              'Soulful Harvest',
                                                            description:
                                                              'Collect a crude scythe from the Summoner',
                                                            children: [
                                                              {
                                                                item: 'malum:sacred_spirit',
                                                                title:
                                                                  'Innocence Lost',
                                                                description:
                                                                  'Kill an innocent animal and reap their spirit',
                                                                children: [
                                                                  {
                                                                    item: 'relics:researching_table',
                                                                    title:
                                                                      "Echo's of The Forgotten",
                                                                    description:
                                                                      'Craft an research table',
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                item: 'hexerei:animal_fat',
                                                                title:
                                                                  'Visceral Harvest',
                                                                description:
                                                                  'Kill some animals in Everbright and collect their fat',
                                                                children: [
                                                                  {
                                                                    item: 'hexerei:tallow_bucket',
                                                                    title:
                                                                      'Waxen Concoction',
                                                                    description:
                                                                      'Make some tallow',
                                                                    children: [
                                                                      {
                                                                        item: 'hexerei:candle',
                                                                        title:
                                                                          'First Flicker',
                                                                        description:
                                                                          'Create some candles with the tallow',
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
                                                        item: 'blue_skies:loot_bag_starlit_crusher',
                                                        title:
                                                          'Silence of The Verdant',
                                                        parent: 'everbright',
                                                        description:
                                                          'Kill the Starlit Crusher',
                                                        frame: 'goal',
                                                        children: [
                                                          {
                                                            item: 'malum:runewood_sapling',
                                                            title:
                                                              'Roots of Renewal',
                                                            description:
                                                              'Collect a runewood sapling from the Starlit Crusher',
                                                            children: [
                                                              {
                                                                item: 'occultism:otherworld_ashes',
                                                                title:
                                                                  'Dust of Dimensions',
                                                                description:
                                                                  'Burn runewood in a spirit fire',
                                                                children: [
                                                                  {
                                                                    item: 'occultism:chalk_white',
                                                                    title:
                                                                      'Boundry of The Beyond',
                                                                    description:
                                                                      'Craft some white chalk',
                                                                    children: [
                                                                      {
                                                                        icon: 'gateways:gate_pearl',
                                                                        id: 'gateways',
                                                                        title:
                                                                          'Veil of The Waters',
                                                                        description:
                                                                          'Open a portal between Everbright and The Overworld',
                                                                        nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                        frame:
                                                                          'challenge',
                                                                        criteria:
                                                                          {
                                                                            gateway:
                                                                              {
                                                                                trigger:
                                                                                  'minecraft:item_used_on_block',
                                                                                conditions:
                                                                                  {
                                                                                    location:
                                                                                      {
                                                                                        dimension:
                                                                                          'minecraft:overworld',
                                                                                      },
                                                                                    item: {
                                                                                      items:
                                                                                        [
                                                                                          'gateways:gate_pearl',
                                                                                        ],
                                                                                      nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                                    },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'totemic:totem_whittling_knife',
                                                            title:
                                                              'Mark of The Woods',
                                                            frame: 'goal',
                                                            description:
                                                              'Collect a totem whittling knife from the Starlit Crusher',
                                                            children: [
                                                              {
                                                                item: 'totemic:cedar_sapling',
                                                                title:
                                                                  "Cedar's Chorus",
                                                                frame: 'goal',
                                                                description:
                                                                  'Transform a sapling into a cedar sapling',
                                                                children: [
                                                                  {
                                                                    item: 'naturesaura:gold_fiber',
                                                                    title:
                                                                      'Gilded Growth',
                                                                    description:
                                                                      'Apply brilliant fibers to tree leaves, and collect some gold fiber',
                                                                    frame:
                                                                      'goal',
                                                                    children: [
                                                                      {
                                                                        item: 'naturesaura:wood_stand',
                                                                        title:
                                                                          'Sacred Scaffolds',
                                                                        description:
                                                                          'Craft multiple wooden stands',
                                                                        count: 4,
                                                                        frame:
                                                                          'goal',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'naturesaura:eye',
                                                                              title:
                                                                                'Vision of The Verdant',
                                                                              description:
                                                                                "Conduct a ritual of the forest, and see through nature's eyes",
                                                                              frame:
                                                                                'challenge',
                                                                              reward:
                                                                                'im:chapters/chapter_3',
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
                                                        item: 'minecraft:heart_of_the_sea',
                                                        parent: 'everbright',
                                                        id: 'ocean',
                                                        title:
                                                          'Ruins of The Deep',
                                                        description:
                                                          'Slay an elder guardian & collect its heart',
                                                      },
                                                      {
                                                        item: 'rankine:mercury',
                                                        title: "Mercury's Rise",
                                                        parent: 'everbright',
                                                        description:
                                                          'Crush some pyrope ore, a poor form of cinnabar, and collect mercury',
                                                        children: [
                                                          {
                                                            item: 'cold_sweat:thermometer',
                                                            title:
                                                              "Mercury's Message",
                                                            description:
                                                              'Fill a glass tube with mercury to create a thermometer',
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title: 'Thawing Truth',
                                                        description:
                                                          'Find a page from a lost story',
                                                        parent: 'everbright',
                                                        item: 'kubejs:lost_page_everbright',
                                                        children: [
                                                          {
                                                            title:
                                                              "A Grandmother's Story",
                                                            frame: 'challenge',
                                                            description:
                                                              'Remake the lost story from Everbright',
                                                            item: 'kubejs:lost_story_everbright',
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'rankine:steel_gold_pan',
                                                        title:
                                                          "Sifter's Summit",
                                                        description:
                                                          'Upgrade your gold pan',
                                                        parent: 'everbright',
                                                        children: [
                                                          {
                                                            item: 'rankine:cotton',
                                                            title:
                                                              'Cotton Continuum',
                                                            description:
                                                              'Grow some cotton',
                                                            children: [
                                                              {
                                                                item: 'paragon_textiles:silk',
                                                                title:
                                                                  'Silken Start',
                                                                description:
                                                                  'Craft some silk',
                                                                children: [
                                                                  {
                                                                    item: 'fishing_rod',
                                                                    title:
                                                                      'Catch of The Day',
                                                                    description:
                                                                      'Craft a fishing rod',
                                                                  },
                                                                  {
                                                                    icon: 'smallships:oak_cog',
                                                                    tag: 'smallships:cogs',
                                                                    title:
                                                                      'Sails of Silk',
                                                                    description:
                                                                      'Upgrade a raft into a cog',
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                item: 'rankine:gun_cotton',
                                                                title:
                                                                  'Boom Blossom',
                                                                description:
                                                                  'Craft some gun cotton',
                                                                children: [
                                                                  {
                                                                    icon: 'totemic:tipi',
                                                                    title:
                                                                      "Nomad's Nook",
                                                                    description:
                                                                      'Craft a better bed',
                                                                    tag: 'minecraft:beds',
                                                                  },
                                                                  {
                                                                    item: 'totemic:drum',
                                                                    title:
                                                                      'Beat of the Wilds',
                                                                    description:
                                                                      'Craft a drum',
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
                                            item: 'blue_skies:zeal_lighter',
                                            title: "Winter's Breath",
                                            description: 'Craft a zeal lighter',
                                            reward: 'im:dimensions/everbright',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:pewter_ingot',
                                    title: 'Feasts of The Forged',
                                    description: 'Forge a pewter ingot',
                                    children: [
                                      {
                                        item: 'rankine:pewter_gold_pan',
                                        title: "Sifter's Stride",
                                        description: 'Craft a better gold pan',
                                        children: [
                                          {
                                            item: 'kubejs:wheat',
                                            title: 'Harvest Moon',
                                            description: 'Grow some wheat',
                                            children: [
                                              {
                                                icon: 'strawgolem:straw_hat',
                                                title: 'Flicker of Life',
                                                description:
                                                  'Summon a straw golem with hay and a carved pumpkin',
                                                criteria: {
                                                  example: {
                                                    trigger:
                                                      'minecraft:summoned_entity',
                                                    conditions: {
                                                      entity: {
                                                        type: 'strawgolem:strawgolem',
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                          {
                                            item: 'paragon_textiles:flax_seeds',
                                            title: 'Seeds of The Artisan',
                                            description:
                                              'Find some flax seeds in the soil',
                                            children: [
                                              {
                                                item: 'paragon_textiles:wicker',
                                                title: 'Twist of Fate',
                                                description:
                                                  'Collect some wicker',
                                                children: [
                                                  {
                                                    item: 'paragon_textiles:basket',
                                                    title:
                                                      'Sustainable Storage',
                                                    description:
                                                      'Craft a basket',
                                                    children: [
                                                      {
                                                        item: 'paragon_textiles:basket_sturdy',
                                                        title:
                                                          'Fortified Storage',
                                                        description:
                                                          'Reinforce your basket',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'paragon_textiles:fabric_red',
                                                title: 'Crimson Creations',
                                                description:
                                                  'Dye your fabric red',
                                                children: [
                                                  {
                                                    item: 'cold_sweat:sewing_table',
                                                    id: 'sewing_table',
                                                    title: 'Warmth Weaver',
                                                    description:
                                                      'Craft a sewing table and insulate your armor',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'paragon_textiles:fabric_plain',
                                                title: 'Plain Potential',
                                                description:
                                                  'Craft some plain fabric',
                                                children: [
                                                  {
                                                    item: 'ecofriendly:recycled_carrier_bag_ym',
                                                    title:
                                                      'From Scraps to Straps',
                                                    description:
                                                      'Transform a plastic bag into a basic backpack',
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        item: 'farmersdelight:stove',
                                        title: 'Culinary Canvas',
                                        description: 'Craft a stove',
                                        children: [
                                          {
                                            item: 'farmersdelight:cooking_pot',
                                            title: 'Boiling Point',
                                            description: 'Craft a cooking pot',
                                            children: [
                                              {
                                                item: 'farmersdelight:rice_roll_medley_block',
                                                title: 'Seafood Symphony',
                                                description:
                                                  'Make a fish feast',
                                              },
                                            ],
                                          },
                                          {
                                            item: 'farmersrespite:kettle',
                                            title: 'Kettle Craft',
                                            description: 'Craft a kettle',
                                            children: [
                                              {
                                                item: 'farmersrespite:coffee',
                                                title: 'Grinds of Success',
                                                description:
                                                  'Finally make a cup of coffee',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:sterling_silver_ingot',
                                    title: 'Silver Streams',
                                    description:
                                      'Forge a sterling silver ingot',
                                    children: [
                                      {
                                        item: 'rankine:tree_tap',
                                        title: 'Sticky Business',
                                        description: 'Craft a tree tap',
                                        children: [
                                          {
                                            item: 'kubejs:freezing_sap_bucket',
                                            title: 'Chilled to Brim',
                                            description:
                                              'Collect some freezing sap from a bluebright tree',
                                            children: [
                                              {
                                                item: 'rankine:snowflake_obsidian',
                                                title: 'Chilled to The Core',
                                                description:
                                                  'Cast freezing sap on a piece of obsidian',
                                              },
                                            ],
                                          },
                                          {
                                            item: 'rankine:resin_bucket',
                                            title: 'Sticky Fingers',
                                            description:
                                              'Collect resin, a more convenient tanning fluid',
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
            ],
          },
        ],
      },
    ],
  });
});
