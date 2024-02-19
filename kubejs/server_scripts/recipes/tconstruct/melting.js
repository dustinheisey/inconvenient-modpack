onEvent('recipes', event => {
  event.remove({
    output: Fluid.of('tconstruct:blood'),
  });

  [
    'tconstruct:smeltery/melting/metal/gold/gilded_blackstone',
    'twilightforest:smeltery/melting/metal/knightmetal/nugget',
    'twilightforest:smeltery/melting/metal/fiery/nugget',
    'tconstruct:smeltery/alloys/molten_pig_iron',
    'tconstruct:__default',
    'tconstruct:smeltery/entity_melting/zombie',
    'tconstruct:smeltery/entity_melting/villager',
    'bloodsmeltery:smeltery/entity_melting/vex',
    'tconstruct:smeltery/entity_melting/skeletons',
    'tconstruct:smeltery/entity_melting/illager',
    'tconstruct:smeltery/alloys/molten_obsidian_from_soup',
    'tconstruct:smeltery/melting/obsidian/beacon',
    'tconstruct:smeltery/melting/obsidian/foundry_io',
    'tconstruct:smeltery/melting/obsidian/foundry_controller',
    'tconstruct:smeltery/melting/obsidian/block',
  ].forEach(id => {
    event.remove({id: id});
  });
  [
    'aluminum',
    'iron',
    'cobalt',
    'copper',
    'gold',
    'lead',
    'nickel',
    'osmium',
    'silver',
    'tin',
    'tungsten',
    'uranium',
    'zinc',
  ].forEach(id => {
    event.remove({
      id: `tconstruct:smeltery/melting/metal/${id}/ore_singular`,
    });
  });

  ['emerald', 'diamond', 'quartz'].forEach(id => {
    event.remove({
      id: `tconstruct:smeltery/melting/${id}/ore_singular`,
    });
  });

  ['gold'].forEach(id => {
    event.remove({
      id: `tconstruct:smeltery/melting/metal/${id}/ore_sparse`,
    });
  });

  ['copper'].forEach(id => {
    event.remove({
      id: `tconstruct:smeltery/melting/metal/${id}/ore_dense`,
    });
  });

  new recipes(event)
    .setType('tconstruct:melting')
    .setFunction(config =>
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {
          item: config.input,
        },
        result: {
          fluid: config.fluid,
          amount: config.amount,
        },
        temperature: 605,
        time: 54,
      })
    )
    .removeInputs([
      'minecraft:ender_chest',
      'rankine:snowflake_obsidian',
      'minecraft:obsidian',
      'minecraft:crying_obsidian',
      'minecraft:redstone',
      'tconstruct:grout',
      'tconstruct:nether_grout',
      'minecraft:rotten_flesh',
      'minecraft:zombie_head',
      'tconstruct:husk_head',
      'tconstruct:piglin_head',
      'tconstruct:piglin_brute_head',
      'tconstruct:zombified_piglin_head',
      '#minecraft:sand',
      '#tconstruct:casts',
      // "rankine:sphalerite_ore",
      // "rankine:bauxite_ore",
      // "rankine:cobaltite_ore",
      // "minecraft:gold_ore",
      // "minecraft:deepslate_gold_ore",
      // "undergarden:depthrock_gold_ore",
      // "mythicbotany:gold_ore",
      // "minecraft:nether_gold_ore",
    ])
    .add([
      {
        input: 'rankine:blood_obsidian',
        fluid: 'tconstruct:molten_obsidian',
        amount: 250,
      },
      {
        input: 'architects_palette:plating_block',
        fluid: 'tconstruct:molten_iron',
        amount: 30,
      },
      {
        input: 'architects_palette:plating_slab',
        fluid: 'tconstruct:molten_iron',
        amount: 15,
      },
      {
        input: 'architects_palette:plating_stairs',
        fluid: 'tconstruct:molten_iron',
        amount: 45,
      },
      {
        input: 'architects_palette:plating_wall',
        fluid: 'tconstruct:molten_iron',
        amount: 5,
      },
      {
        input: 'hexerei:blood_bottle',
        fluid: 'tconstruct:blood',
        amount: 250,
      },
      {
        input: 'create:crushed_raw_aluminum',
        fluid: 'tconstruct:molten_aluminum',
        amount: 90,
      },
      {
        input: 'chemlib:nickel_dust',
        fluid: 'tconstruct:molten_nickel',
        amount: 90,
      },
      {
        input: 'chemlib:uranium_dust',
        fluid: 'tconstruct:molten_uranium',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_lead',
        fluid: 'tconstruct:molten_lead',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_tin',
        fluid: 'tconstruct:molten_tin',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_silver',
        fluid: 'tconstruct:molten_silver',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_osmium',
        fluid: 'tconstruct:molten_osmium',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_zinc',
        fluid: 'tconstruct:molten_zinc',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_copper',
        fluid: 'tconstruct:molten_copper',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_gold',
        fluid: 'tconstruct:molten_gold',
        amount: 90,
      },
      {
        input: 'create:crushed_raw_iron',
        fluid: 'tconstruct:molten_iron',
        amount: 90,
      },
      {
        input: 'occultism:raw_iesnium',
        fluid: 'kubejs:molten_iesnium',
        amount: 90,
      },
      {
        input: 'occultism:iesnium_dust',
        fluid: 'kubejs:molten_iesnium',
        amount: 90,
      },
      {
        input: 'minecraft:redstone',
        fluid: 'kubejs:molten_redstone',
        amount: 90,
      },
      {
        input: 'blue_skies:raw_aquite',
        fluid: 'kubejs:molten_aquite',
        amount: 90,
      },
      {
        input: 'blue_skies:aquite',
        fluid: 'kubejs:molten_aquite',
        amount: 90,
      },
      {
        input: 'blue_skies:aquite_block',
        fluid: 'kubejs:molten_aquite',
        amount: 810,
      },
      {
        input: 'blue_skies:raw_aquite_block',
        fluid: 'kubejs:molten_aquite',
        amount: 810,
      },

      {
        input: 'blue_skies:raw_charoite',
        fluid: 'kubejs:molten_charoite',
        amount: 90,
      },
      {
        input: 'blue_skies:charoite',
        fluid: 'kubejs:molten_charoite',
        amount: 90,
      },
      {
        input: 'blue_skies:charoite_block',
        fluid: 'kubejs:molten_charoite',
        amount: 810,
      },
      {
        input: 'blue_skies:raw_charoite_block',
        fluid: 'kubejs:molten_charoite',
        amount: 810,
      },

      {
        input: 'blue_skies:raw_falsite',
        fluid: 'kubejs:molten_falsite',
        amount: 90,
      },
      {
        input: 'blue_skies:falsite_ingot',
        fluid: 'kubejs:molten_falsite',
        amount: 90,
      },
      {
        input: 'blue_skies:falsite_nugget',
        fluid: 'kubejs:molten_falsite',
        amount: 10,
      },
      {
        input: 'blue_skies:falsite_block',
        fluid: 'kubejs:molten_falsite',
        amount: 810,
      },
      {
        input: 'blue_skies:raw_falsite_block',
        fluid: 'kubejs:molten_falsite',
        amount: 810,
      },

      {
        input: 'blue_skies:raw_ventium',
        fluid: 'kubejs:molten_ventium',
        amount: 90,
      },
      {
        input: 'blue_skies:ventium_ingot',
        fluid: 'kubejs:molten_ventium',
        amount: 90,
      },
      {
        input: 'blue_skies:ventium_nugget',
        fluid: 'kubejs:molten_ventium',
        amount: 10,
      },
      {
        input: 'blue_skies:ventium_block',
        fluid: 'kubejs:molten_ventium',
        amount: 810,
      },
      {
        input: 'blue_skies:raw_ventium_block',
        fluid: 'kubejs:molten_ventium',
        amount: 810,
      },

      {
        input: 'rankine:mercury',
        fluid: 'rankine:liquid_mercury',
        amount: 90,
      },
      {
        input: 'rankine:mercury_nugget',
        fluid: 'rankine:liquid_mercury',
        amount: 10,
      },
      {
        input: 'rankine:mercury_block',
        fluid: 'rankine:liquid_mercury',
        amount: 810,
      },

      {
        input: 'blue_skies:midnight_sand',
        fluid: 'kubejs:molten_midnight_glass',
        amount: 1000,
      },
      {
        input: 'blue_skies:crystal_sand',
        fluid: 'kubejs:molten_crystal_glass',
        amount: 1000,
      },
      {
        input: 'ecofriendly:sea_glass_ym',
        fluid: 'tconstruct:molten_glass',
        amount: 1000,
      },
      {
        input: 'undergarden:raw_froststeel',
        fluid: 'kubejs:molten_froststeel',
        amount: 90,
      },
      {
        input: 'undergarden:froststeel_nugget',
        fluid: 'kubejs:molten_froststeel',
        amount: 10,
      },
      {
        input: 'undergarden:froststeel_ingot',
        fluid: 'kubejs:molten_froststeel',
        amount: 90,
      },
      {
        input: 'undergarden:froststeel_block',
        fluid: 'kubejs:molten_froststeel',
        amount: 810,
      },
      {
        input: 'undergarden:raw_froststeel_block',
        fluid: 'kubejs:molten_froststeel',
        amount: 810,
      },

      {
        input: 'undergarden:raw_cloggrum',
        fluid: 'kubejs:molten_cloggrum',
        amount: 90,
      },
      {
        input: 'undergarden:cloggrum_nugget',
        fluid: 'kubejs:molten_cloggrum',
        amount: 10,
      },
      {
        input: 'undergarden:cloggrum_ingot',
        fluid: 'kubejs:molten_cloggrum',
        amount: 90,
      },
      {
        input: 'undergarden:cloggrum_block',
        fluid: 'kubejs:molten_cloggrum',
        amount: 810,
      },
      {
        input: 'undergarden:raw_cloggrum_block',
        fluid: 'kubejs:molten_cloggrum',
        amount: 810,
      },

      {
        input: 'undergarden:regalium_crystal',
        fluid: 'kubejs:molten_regalium',
        amount: 90,
      },
      {
        input: 'undergarden:regalium_block',
        fluid: 'kubejs:molten_regalium',
        amount: 810,
      },

      {
        input: 'undergarden:forgotten_nugget',
        fluid: 'kubejs:molten_forgotten_metal',
        amount: 10,
      },
      {
        input: 'undergarden:forgotten_ingot',
        fluid: 'kubejs:molten_forgotten_metal',
        amount: 90,
      },
      {
        input: 'undergarden:forgotten_block',
        fluid: 'kubejs:molten_forgotten_metal',
        amount: 810,
      },

      {
        input: 'undergarden:utherium_crystal',
        fluid: 'kubejs:molten_utherium',
        amount: 90,
      },
      {
        input: 'undergarden:utheric_shard',
        fluid: 'kubejs:molten_utherium',
        amount: 10,
      },
      {
        input: 'undergarden:utherium_block',
        fluid: 'kubejs:molten_utherium',
        amount: 810,
      },

      {
        input: 'blue_skies:raw_horizonite',
        fluid: 'kubejs:molten_horizonite',
        amount: 90,
      },
      {
        input: 'blue_skies:horizonite_nugget',
        fluid: 'kubejs:molten_horizonite',
        amount: 10,
      },
      {
        input: 'blue_skies:horizonite_ingot',
        fluid: 'kubejs:molten_horizonite',
        amount: 90,
      },
      {
        input: 'twilightforest:fiery_blood',
        fluid: 'kubejs:fiery_blood',
        amount: 90,
      },
      {
        input: 'twilightforest:fiery_tears',
        fluid: 'kubejs:fiery_tears',
        amount: 90,
      },
      {
        input: 'blue_skies:horizonite_block',
        fluid: 'kubejs:molten_horizonite',
        amount: 810,
      },
      {
        input: 'blue_skies:raw_horizonite_block',
        fluid: 'kubejs:molten_horizonite',
        amount: 810,
      },

      {
        input: 'twilightforest:raw_ironwood',
        fluid: 'kubejs:molten_ironwood',
        amount: 90,
      },
      {
        input: 'twilightforest:ironwood_ingot',
        fluid: 'kubejs:molten_ironwood',
        amount: 90,
      },
      {
        input: 'twilightforest:ironwood_block',
        fluid: 'kubejs:molten_ironwood',
        amount: 810,
      },

      {
        input: 'twilightforest:steeleaf_ingot',
        fluid: 'kubejs:molten_steeleaf',
        amount: 90,
      },
      {
        input: 'twilightforest:steeleaf_block',
        fluid: 'kubejs:molten_steeleaf',
        amount: 810,
      },
    ]);
});
