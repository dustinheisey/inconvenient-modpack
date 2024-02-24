onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_3', {
    icon: 'minecraft:spyglass',
    item: 'naturesaura:eye',
    title: 'Chapter 3: Searching For Secrets',
    description: 'Search for answers',
    background: 'undergarden:textures/block/depthrock.png',
    children: [
      {
        item: 'chest',
        title: 'Beyond Primitive Storage',
        description: 'Craft a chest',
      },
      {
        item: 'occultism:crushed_end_stone',
        title: 'Ender Echos',
        frame: 'goal',
        description: 'Create an iron hoe',
        children: [
          {
            item: 'occultism:chalk_gold',
            title: 'Circles of the Sun',
            description: 'Craft some golden chalk',
            children: [
              {
                item: 'wither_skeleton_skull',
                title: 'Summoning the Storm',
                description: 'Collect a wither skull from the wild hunt',
              },
            ],
          },
          {
            item: 'naturesaura:token_joy',
            title: 'Joyful Journeys',
            frame: 'goal',
            description: 'Create an iron hoe',
            children: [
              {
                item: 'naturesaura:nature_altar',
                title: 'Aura Artisan',
                frame: 'goal',
                description: 'Create an iron hoe',
                children: [
                  {
                    item: 'naturesaura:infused_stone',
                    title: "Shale's Shadow",
                    description: 'Craft a basic crushing head',
                    children: [
                      {
                        item: 'rankine:shale',
                        title: 'Pillars of the Past',
                        description: 'Craft a basic crushing head',
                      },
                    ],
                  },

                  {
                    item: 'naturesaura:infused_iron',
                    title: 'Weight of Progress',
                    frame: 'goal',
                    description: 'Create an iron hoe',
                    children: [
                      {
                        item: 'undergarden:catalyst',
                        title: 'Legacy of the Lost',
                        frame: 'goal',
                        description: 'Create an iron hoe',
                        children: [
                          {
                            item: 'undergarden:forgotten_nugget',
                            frame: 'goal',
                            title: 'Echos of Confinement',
                            description: 'Create an iron hoe',
                            children: [
                              {
                                icon: 'endrem:undead_eye',
                                title: 'A Pandemic',
                                description:
                                  'Go to sleep after slaying a Forgotten Guardian',
                                id: 'eye_undead',
                                frame: 'challenge',
                                criteria: {
                                  collect: {
                                    trigger: 'minecraft:inventory_changed',
                                    conditions: {
                                      items: [
                                        {
                                          items: [
                                            'undergarden:forgotten_nugget',
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  sleep: {
                                    trigger: 'minecraft:slept_in_bed',
                                  },
                                },
                                reward: 'im:eyes/undead',
                              },
                              {
                                item: 'malum:spirit_altar',
                                title: "Soulsmith's Forge",
                                frame: 'goal',
                                description: 'Create an iron hoe',
                                children: [
                                  {
                                    item: 'malum:esoteric_spool',
                                    title: 'Spectrum Spun',
                                    description: 'Craft a basic crushing head',
                                  },
                                  {
                                    id: 'blood',
                                    frame: 'goal',
                                    item: 'hexerei:blood_bottle',
                                    title: "Vein's Vessel",
                                    description: 'Create an iron hoe',
                                    children: [
                                      {
                                        parent: 'blood',
                                        item: 'bloodmagic:sacrificialdagger',
                                        title: "Vein's Verdict",
                                        description: 'Upgrade your chest',
                                      },
                                      {
                                        item: 'bloodmagic:altar',
                                        parent: 'blood',
                                        frame: 'goal',
                                        title: "Vein's Altar",
                                        description: 'Create an iron hoe',
                                        children: [
                                          {
                                            item: 'bloodmagic:blankslate',
                                            title: 'Slate of the Sacrificed',
                                            description: 'Create a blank slate',
                                            reward: 'im:dimensions/undergarden',
                                          },
                                          {
                                            item: 'bloodmagic:weakbloodorb',
                                            title: 'Crimson Conduit',
                                            description: 'Create a blood orb',
                                          },
                                          {
                                            item: 'bloodmagic:incensealtar',
                                            title: 'Pyre of Potency',
                                            description:
                                              'Craft an incense altar',
                                          },
                                          {
                                            item: 'rankine:blood_obsidian',
                                            title: 'Crimson to the Core',
                                            frame: 'goal',
                                            description: 'Create an iron hoe',
                                            children: [
                                              {
                                                item: 'create:powdered_obsidian',
                                                title: 'Crushed to the Core',
                                                description:
                                                  'Grind some blood obsidian in your millstone',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'occultism:satchel',
                                                    title:
                                                      'Capacity Beyond Belief',
                                                    description:
                                                      'upgrade your bag into a substantial satchel',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'blue_skies:everdawn_portal',
                                                title: 'Heatwave Herald',
                                                frame: 'goal',
                                                description:
                                                  'Create an iron hoe',
                                                children: [
                                                  {
                                                    item: 'blue_skies:horizonite_ingot',
                                                    title: 'Embers Refined',
                                                    description:
                                                      'Forge a horizonite ingot',
                                                  },
                                                  {
                                                    item: 'blue_skies:loot_bag_alchemist',
                                                    title:
                                                      'Silence of the Alchemist',
                                                    description:
                                                      'Create an iron hoe',
                                                    children: [
                                                      {
                                                        item: 'malum:cluster_of_brilliance',
                                                        title:
                                                          'Brilliant Discovery',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            item: 'malum:brilliant_obelisk',
                                                            title:
                                                              'Harmonized Brilliance',
                                                            description:
                                                              'Create an iron hoe',
                                                          },
                                                          {
                                                            item: 'occultism:chalk_purple',
                                                            title:
                                                              'Circles of the Veil',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [
                                                              {
                                                                item: 'occultism:afrit_essence',
                                                                title:
                                                                  'Infernal Invasion',
                                                                description:
                                                                  'Create an iron hoe',
                                                                children: [],
                                                              },
                                                              {
                                                                item: 'tconstruct:blazing_blood_bucket',
                                                                title: 'Crate',
                                                                description:
                                                                  'Blaze of Glory',
                                                                children: [
                                                                  {
                                                                    item: 'minecraft:torch',
                                                                    title:
                                                                      'Light Unto the Darkness',
                                                                    description:
                                                                      'Upgrade your chest',
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'minecraft:enchanting_table',
                                                        title:
                                                          'Arcane Awakening',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    title: 'Chaotic Truth',
                                                    description:
                                                      'Find a page from a lost story in the Everdawn',
                                                    item: 'kubejs:lost_page_everdawn',
                                                    children: [
                                                      {
                                                        title: 'Climate Chaose',
                                                        id: 'lost_story_everdawn',
                                                        frame: 'challenge',
                                                        description:
                                                          'Remake the lost story from the Everdawn',
                                                        item: 'kubejs:lost_story_everdawn',
                                                      },
                                                    ],
                                                  },

                                                  {
                                                    item: 'blue_skies:loot_bag_arachnarch',
                                                    title:
                                                      'Silence of the Arachnid',
                                                    frame: 'goal',
                                                    description:
                                                      'Create an iron hoe',
                                                    children: [
                                                      {
                                                        item: 'malum:raw_soulstone',
                                                        frame: 'goal',
                                                        title:
                                                          "Soulstone's Secret",
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            item: 'malum:corrupted_resonance',
                                                            title: 'Iron Hoe',
                                                            frame: 'goal',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [
                                                              {
                                                                item: 'twilightforest:twilight_portal_miniature_structure',
                                                                title:
                                                                  'Echos of Asylum',
                                                                frame: 'goal',
                                                                description:
                                                                  'Create an iron hoe',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Dark Truth',
                                                                    description:
                                                                      'Find a page from a lost story in the Twilight Forest',
                                                                    item: 'kubejs:lost_page_twilight',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'The Rise of a Dictator',
                                                                        id: 'lost_story_twilight',
                                                                        frame:
                                                                          'challenge',
                                                                        description:
                                                                          'Remake the lost story from the Twilight Forest',
                                                                        item: 'kubejs:lost_story_twilight',
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:carminite',
                                                                    title:
                                                                      'Spark of Creation',
                                                                    description:
                                                                      'Collect some carminite',
                                                                    children: [
                                                                      {
                                                                        item: 'minecraft:piston',
                                                                        title:
                                                                          'Pushing Past',
                                                                        description:
                                                                          'Craft a basic crushing head',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'rankine:wood_tier_crushing_head',
                                                                              title:
                                                                                'Crushing History',
                                                                              description:
                                                                                'Craft a basic crushing head',
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'ecofriendly:garbage_item_ym',
                                                                    title:
                                                                      "Waste's Warning",
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'explorerscompass:explorerscompass',
                                                                        title:
                                                                          'Dungeon Seeker',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        item: 'create:andesite_alloy',
                                                                        title:
                                                                          'Alloyed Aspirations',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'create:millstone',
                                                                              title:
                                                                                'Grinding Gears',
                                                                              description:
                                                                                'Create an iron hoe',
                                                                              children:
                                                                                [],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:ironwood_ingot',
                                                                    title:
                                                                      "Forest's Forge",
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'extendedcrafting:black_iron_ingot',
                                                                        title:
                                                                          "Twilight's Temper",
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'extendedcrafting:basic_table',
                                                                              title:
                                                                                'Altar of Ambition',
                                                                              description:
                                                                                'Create an iron hoe',
                                                                              children:
                                                                                [],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'minecraft:egg',
                                                                    title:
                                                                      "This Won't End Well",
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'naturesaura:birth_spirit',
                                                                        title:
                                                                          "Brood's Beginning",
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:fiery_ingot',
                                                                    title:
                                                                      "Inferno's Mark",
                                                                    frame:
                                                                      'goal',
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'create:cinder_flour',
                                                                        title:
                                                                          "Inferno's Promise",
                                                                        frame:
                                                                          'goal',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              icon: 'endrem:lost_eye',
                                                                              title:
                                                                                'Automation',
                                                                              description:
                                                                                'Go to sleep after air create some cinder flour',
                                                                              frame:
                                                                                'challenge',
                                                                              id: 'eye_lost',
                                                                              criteria:
                                                                                {
                                                                                  collect:
                                                                                    {
                                                                                      trigger:
                                                                                        'minecraft:inventory_changed',
                                                                                      conditions:
                                                                                        {
                                                                                          items:
                                                                                            [
                                                                                              {
                                                                                                items:
                                                                                                  [
                                                                                                    'create:cinder_flour',
                                                                                                  ],
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                  sleep:
                                                                                    {
                                                                                      trigger:
                                                                                        'minecraft:slept_in_bed',
                                                                                    },
                                                                                },
                                                                              reward:
                                                                                'im:chapters/chapter_4',
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
                                                            item: 'malum:soulwood_totem_base',
                                                            title:
                                                              'Corrupted Core',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'blue_skies:venom_sac',
                                                        title: "Toxin's Touch",
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            id: 'sacrifice',
                                                            item: 'bloodmagic:daggerofsacrifice',
                                                            title:
                                                              "Toxin's Harvest",
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [
                                                              {
                                                                icon: 'endrem:corrupted_eye',
                                                                title:
                                                                  'TODO: Fill In Title',
                                                                description:
                                                                  'Go to sleep after crafting a dagger of sacrifice',
                                                                frame:
                                                                  'challenge',
                                                                parent:
                                                                  'sacrifice',
                                                                id: 'eye_corrupted',
                                                                criteria: {
                                                                  collect: {
                                                                    trigger:
                                                                      'minecraft:inventory_changed',
                                                                    conditions:
                                                                      {
                                                                        items: [
                                                                          {
                                                                            items:
                                                                              [
                                                                                'bloodmagic:daggerofsacrifice',
                                                                              ],
                                                                          },
                                                                        ],
                                                                      },
                                                                  },
                                                                  sleep: {
                                                                    trigger:
                                                                      'minecraft:slept_in_bed',
                                                                  },
                                                                },
                                                                reward:
                                                                  'im:eyes/corrupted',
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
                                            item: 'bloodmagic:basemonstersoul',
                                            title: 'Luring the Lost',
                                            description:
                                              'Extract will using the soul snares',
                                            children: [
                                              {
                                                item: 'minecraft:soul_sand',
                                                title: 'Graveyard Grains',
                                                description:
                                                  'Cast some will onto sand',
                                                children: [
                                                  {
                                                    item: 'minecraft:nether_star',
                                                    title:
                                                      'Shattering Stardust',
                                                    description:
                                                      'Summon & slay the wither',
                                                    children: [
                                                      {
                                                        icon: 'endrem:wither_eye',
                                                        title: 'The Bunker',
                                                        description:
                                                          'Go to sleep after air conditioning your room',
                                                        frame: 'challenge',
                                                        id: 'eye_wither',
                                                        criteria: {
                                                          collect: {
                                                            trigger:
                                                              'minecraft:inventory_changed',
                                                            conditions: {
                                                              items: [
                                                                {
                                                                  items: [
                                                                    'bloodmagic:daggerofsacrifice',
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          },
                                                          sleep: {
                                                            trigger:
                                                              'minecraft:slept_in_bed',
                                                          },
                                                        },
                                                        reward:
                                                          'im:eyes/corrupted',
                                                      },
                                                      {
                                                        item: 'chunkloaders:single_chunk_loader',
                                                        title:
                                                          'Compact Continuity',
                                                        description:
                                                          'Create your first chunk loader',
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
                            item: 'undergarden:regalium_crystal',
                            title: 'Gleam Amidst Gloom',
                            description: 'Collect some regalium crystals',
                          },
                          {
                            title: 'Lost Truth',
                            description:
                              'Find a page from a lost story in the Undergarden',
                            item: 'kubejs:lost_page_undergarden',
                            children: [
                              {
                                title: 'A Virus',
                                id: 'lost_story_undergarden',
                                frame: 'challenge',
                                description:
                                  'Remake the lost story from the Undergarden',
                                item: 'kubejs:lost_story_undergarden',
                              },
                            ],
                          },
                          {
                            item: 'undergarden:grongle_log',
                            title: 'Fungal Forests',
                            description: 'Collect a grongle log',
                            children: [
                              {
                                item: 'rankine:sawdust',
                                title: 'Guilt Ground Down',
                                description: 'Crush the log into sawdust',
                                children: [
                                  {
                                    icon: 'balanced_crates:oak_crate',
                                    tag: 'im:crates',
                                    title: 'Storage Savvy',
                                    description: 'Upgrade your chest',
                                  },
                                  {
                                    item: 'paper',
                                    title: 'Pages of Promise',
                                    description: 'Form a sheet of paper',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            item: 'undergarden:masticator_scales',
                            title: "Masticator's Bane",
                            description:
                              "Complete a forgotten gateway, kill a Masticator, and collect it's scales",
                            children: [
                              {
                                item: 'hexerei:blood_sigil',
                                title: 'Seal of Sacrifice',
                                description:
                                  'Create a blood sigil used to prick your finger and collect blood',
                              },
                            ],
                          },
                          {
                            item: 'undergarden:mogmoss',
                            title: 'Moss of Mourning',
                            description:
                              'Ttransmute the mogmoss into arcane ashes',
                            children: [
                              {
                                item: 'bloodmagic:arcaneashes',
                                title: 'Dust of the Damned',
                                description:
                                  'Ttransmute the mogmoss into arcane ashes',
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
