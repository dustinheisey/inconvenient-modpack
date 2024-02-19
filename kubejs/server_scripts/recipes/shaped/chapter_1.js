onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shaped')
    .setStage('chapter_1')
    .setFunction(config => {
      return event.shaped(config.output, config.pattern, config.key);
    })
    .modifyOutputs([
      {
        output: 'justaraftmod:acacia_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:acacia_log'},
      },
      {
        output: 'justaraftmod:spruce_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:spruce_log'},
      },
      {
        output: 'justaraftmod:jungle_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:jungle_log'},
      },
      {
        output: 'justaraftmod:birch_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:birch_log'},
      },
      {
        output: 'justaraftmod:oak_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:oak_log'},
      },
      {
        output: 'justaraftmod:dark_oak_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:dark_oak_log'},
      },
      {
        output: 'justaraftmod:bamboo_raft',
        pattern: ['a a', 'bbb', 'a a'],
        key: {a: 'farmersdelight:rope', b: 'minecraft:bamboo'},
      },
      {
        output: 'cold_sweat:boiler',
        pattern: ['aaa', 'aba', 'aaa'],
        key: {a: '#forge:cobblestone', b: 'rankine:smouldering_tinder_conk'},
      },
      {
        output: '4x thirst:clay_bowl',
        pattern: ['aaa'],
        key: {a: '#forge:clay_balls'},
      },
      {
        output: 'hexerei:dowsing_rod',
        pattern: [' a ', 'aba', 'aca'],
        key: {
          a: '#forge:rods/wooden',
          b: 'minecraft:flint',
          c: 'farmersdelight:rope',
        },
      },
      {
        output: 'rankine:sodium_chloride_block',
        pattern: ['aa', 'aa'],
        key: {a: 'rankine:sodium_chloride'},
      },
      {
        output: 'rankine:fiber_block',
        pattern: ['aaa', 'aaa', 'aaa'],
        key: {a: 'paragon_textiles:plant_fibers'},
      },
      {
        output: 'rankine:flint_knife',
        pattern: [' a', 'b '],
        key: {a: 'minecraft:flint', b: '#forge:rods/wooden'},
      },
      {
        output: 'rankine:flint_axe',
        pattern: ['ab', ' c'],
        key: {
          a: 'minecraft:flint',
          b: 'farmersdelight:rope',
          c: '#forge:rods/wooden',
        },
      },
      {
        output: 'rankine:flint_pickaxe',
        pattern: ['aaa', ' b ', ' c '],
        key: {
          a: 'minecraft:flint',
          b: 'farmersdelight:rope',
          c: '#forge:rods/wooden',
        },
      },
      {
        output: 'rankine:flint_shovel',
        pattern: [' a ', ' b ', ' c '],
        key: {
          a: 'minecraft:flint',
          b: 'farmersdelight:rope',
          c: '#forge:rods/wooden',
        },
      },
      {
        output: 'rankine:flint_spear',
        pattern: ['  c', 'ab ', 'aa '],
        key: {
          a: 'minecraft:flint',
          b: 'farmersdelight:rope',
          c: '#forge:rods/wooden',
        },
      },
      {
        output: '2x cold_sweat:waterskin',
        pattern: ['  a', ' b ', 'b  '],
        key: {
          a: 'farmersdelight:rope',
          b: 'farmersdelight:canvas',
        },
      },
      {
        output: 'minecraft:furnace',
        pattern: ['aaa', 'a a', 'aaa'],
        key: {
          a: 'minecraft:brick',
        },
      },
      {
        output: 'minecraft:campfire',
        pattern: [' a ', 'aba', 'ccc'],
        key: {
          a: '#forge:rods/wooden',
          b: '#forge:charcoal',
          c: '#minecraft:logs',
        },
      },
      {
        output: 'naturescompass:naturescompass',
        pattern: ['aba', 'bcb', 'aba'],
        key: {
          a: '#minecraft:saplings',
          b: 'farmersdelight:tree_bark',
          c: 'minecraft:copper_ingot',
        },
      },
      {
        output: 'rankine:hardness_tester',
        pattern: ['  a', ' b ', 'c  '],
        key: {
          a: '#forge:stone',
          b: '#forge:rods/wooden',
          c: 'minecraft:flint',
        },
      },
      {
        output: 'rankine:stone_hammer',
        pattern: ['aaa', 'aba', ' b '],
        key: {
          a: '#forge:stone',
          b: '#forge:rods/wooden',
        },
      },
      {
        output: 'antiqueatlas:empty_antique_atlas',
        pattern: ['aaa', 'abc', 'ccc'],
        key: {
          a: 'minecraft:leather',
          b: 'endrem:undead_soul',
          c: 'farmersdelight:canvas',
        },
      },
      {
        output: 'depthmeter:depthmeter',
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'minecraft:copper_ingot',
          b: 'ecofriendly:smelted_iron_can_ym',
        },
      },
      {
        output: 'paraglider:goddess_statue',
        pattern: ['aba', 'cdc', 'ede'],
        key: {
          a: 'rankine:graphite',
          b: 'create:veridium',
          c: 'create:asurine',
          d: 'create:ochrum',
          e: 'create:crimsite',
        },
      },
      {
        output: 'cold_sweat:hearth',
        pattern: ['  a', 'bcb', 'dda'],
        key: {
          a: 'minecraft:iron_ingot',
          b: 'minecraft:leather',
          c: 'endrem:undead_soul',
          d: 'rankine:ultra_high_refractory_bricks',
        },
      },
      {
        output: 'upgrade_aquatic:bedroll',
        pattern: ['aaa', 'bbb'],
        key: {
          a: 'farmersdelight:straw',
          b: 'minecraft:leather',
        },
      },
      {
        output: 'farmersdelight:rope',
        pattern: ['aa', 'aa'],
        key: {
          a: 'paragon_textiles:plant_fibers',
        },
      },
      {
        output: 'charcoal_pit:barrel',
        pattern: ['aba', 'a a', 'aca'],
        key: {
          a: 'rankine:cork',
          b: '#forge:rods/wooden',
          c: '#minecraft:wooden_slabs',
        },
      },
      {
        output: 'rankine:mixing_barrel',
        pattern: ['aba', 'ccc'],
        key: {
          a: 'ecofriendly:smelted_iron_can_ym',
          b: 'charcoal_pit:barrel',
          c: '#minecraft:slabs',
        },
      },
      {
        output: 'rankine:prospecting_stick',
        pattern: [' ab', ' ca', 'a  '],
        key: {
          a: '#forge:rods/wooden',
          b: 'minecraft:flint',
          c: 'farmersdelight:rope',
        },
      },
      {
        output: '4x realistictorches:unlit_torch',
        pattern: ['a', 'b'],
        key: {
          a: 'minecraft:charcoal',
          b: '#forge:rods/wooden',
        },
      },
    ])
    .add([
      {
        output: 'kubejs:stitched_hide',
        pattern: [' a ', 'aaa', ' a '],
        key: {a: 'minecraft:rotten_flesh'},
      },
      {
        output: 'rankine:stick_block',
        pattern: ['aaa', 'aaa', 'aaa'],
        key: {a: '#forge:rods/wooden'},
      },
      {
        output: 'minecraft:campfire',
        pattern: [' a ', 'aba', 'ccc'],
        key: {
          a: '#forge:rods/wooden',
          b: 'charcoal_pit:ash',
          c: '#minecraft:logs',
        },
      },
    ]);
});
