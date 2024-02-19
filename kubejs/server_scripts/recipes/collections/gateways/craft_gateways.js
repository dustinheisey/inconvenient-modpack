onEvent('recipes', event => {
  function craftGateways(config) {
    config.forEach(item => {
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: item.activation_item,
        },
        pentacle_id: item.pentacle_id,
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual',
        },
        ingredients: item.inputs,
        result: item.output,
      });
    });
  }

  craftGateways([
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:summon_foliot',
      inputs: [
        {
          item: 'blue_skies:aquite',
        },
        {
          item: 'blue_skies:aquite',
        },
        {
          item: 'blue_skies:soul_fragment',
        },
        {
          item: 'blue_skies:cryo_root',
        },
        {
          item: 'blue_skies:winter_leaves',
        },
        {
          item: 'blue_skies:municipal_monkfish',
        },
        {
          item: 'blue_skies:grittle_flatfish',
        },
        {
          item: 'rankine:white_marble',
        },
        {
          item: 'rankine:white_marble',
        },
        {
          item: 'blue_skies:starlit_sapling',
        },
        {
          item: 'blue_skies:chilled_lily_pad',
        },
        {
          item: 'blue_skies:azulfo_horn',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_everbright_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:craft_foliot',
      inputs: [
        {
          item: 'undergarden:bloody_stew',
        },
        {
          item: 'undergarden:inky_stew',
        },
        {
          item: 'undergarden:indigo_stew',
        },
        {
          item: 'undergarden:veiled_stew',
        },
        {
          item: 'undergarden:utherium_crystal',
        },
        {
          item: 'undergarden:forgotten_nugget',
        },
        {
          item: 'undergarden:twistytwig',
        },
        {
          item: 'undergarden:utherium_crystal',
        },
        {
          item: 'undergarden:forgotten_nugget',
        },
        {
          item: 'undergarden:twistytwig',
        },
        {
          item: 'undergarden:rotten_blisterberry',
        },
        {
          item: 'undergarden:brute_tusk',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_undergarden_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:craft_djinni',
      inputs: [
        {
          item: 'blue_skies:crescent_fruit',
        },
        {
          item: 'blue_skies:monitor_tail',
        },
        {
          item: 'blue_skies:charscale_moki',
        },
        {
          item: 'blue_skies:horizofin_tunid',
        },
        {
          item: 'blue_skies:fox_pelt',
        },
        {
          item: 'blue_skies:bug_guts',
        },
        {
          item: 'blue_skies:horizonite_ingot',
        },
        {
          item: 'blue_skies:bug_guts',
        },
        {
          item: 'blue_skies:horizonite_ingot',
        },
        {
          item: 'blue_skies:venom_sac',
        },
        {
          item: 'blue_skies:blaze_bud',
        },
        {
          item: 'blue_skies:moonlit_water_lily',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_everdawn_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:summon_wild_greater_spirit',
      inputs: [
        {
          item: 'twilightforest:charm_of_keeping_2',
        },
        {
          item: 'twilightforest:charm_of_keeping_2',
        },
        {
          item: 'twilightforest:raw_ironwood',
        },
        {
          item: 'twilightforest:experiment_115',
        },
        {
          item: 'twilightforest:huge_water_lily',
        },
        {
          item: 'twilightforest:transformation_powder',
        },
        {
          item: 'twilightforest:transformation_powder',
        },
        {
          item: 'twilightforest:carminite',
        },
        {
          item: 'twilightforest:fiery_tears',
        },
        {
          item: 'twilightforest:fiery_blood',
        },
        {
          item: 'twilightforest:fiery_blood',
        },
        {
          item: 'twilightforest:thorn_rose',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_twilight_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:summon_marid',
      inputs: [
        {
          item: 'minecraft:wither_rose',
        },
        {
          item: 'minecraft:crimson_fungus',
        },
        {
          item: 'minecraft:warped_fungus',
        },
        {
          item: 'minecraft:quartz',
        },
        {
          item: 'minecraft:porkchop',
        },
        {
          item: 'cataclysm:witherite_ingot',
        },
        {
          item: 'rankine:carbon_dioxide_gas_bottle',
        },
        {
          item: 'minecraft:porkchop',
        },
        {
          item: 'cataclysm:witherite_ingot',
        },
        {
          item: 'rankine:carbon_dioxide_gas_bottle',
        },
        {
          item: 'occultism:iesnium_ingot',
        },
        {
          item: 'minecraft:blaze_powder',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_nether_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:craft_marid',
      inputs: [
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'rankine:steel_ingot',
        },
        {
          item: 'rankine:steel_ingot',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_blueleaf_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:craft_marid',
      inputs: [
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'rankine:steel_ingot',
        },
        {
          item: 'rankine:steel_ingot',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_bumblezone_gateway"}',
      },
    },
    {
      activation_item: 'blue_skies:soul_fragment',
      pentacle_id: 'occultism:craft_marid',
      inputs: [
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'hem:copparite',
        },
        {
          item: 'rankine:vulcanized_rubber',
        },
        {
          item: 'hem:lush_flower_1',
        },
        {
          item: 'hem:shotgun_shell',
        },
        {
          item: 'create:chromatic_compound',
        },
        {
          item: 'rankine:steel_ingot',
        },
        {
          item: 'rankine:steel_ingot',
        },
      ],
      output: {
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_end_gateway"}',
      },
    },
  ]);
});
