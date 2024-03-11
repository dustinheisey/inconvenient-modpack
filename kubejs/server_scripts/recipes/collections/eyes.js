onEvent('recipes', event => {
  new recipes(event)
    .setFunction(config => {
      event.remove({output: `endrem:${config.id}_eye`});

      event
        .shaped(`endrem:${config.id}_eye`, ['aba', 'bcb', 'aba'], config.key)
        .stage(`eye_${config.id}`);
    })
    .modifyOutputs([
      {
        id: 'cold',
        key: {
          a: 'minecraft:packed_ice',
          b: 'minecraft:leather',
          c: 'minecraft:iron_ingot',
        },
      },
      {
        id: 'exotic',
        key: {
          a: 'blue_skies:diopside_gem',
          b: 'naturesaura:gold_powder',
          c: 'blue_skies:starlit_sapling',
        },
      },
      {
        id: 'undead',
        key: {
          a: 'naturesaura:infused_iron',
          b: 'endrem:undead_soul',
          c: 'undergarden:forgotten_nugget',
        },
      },
      {
        id: 'wither',
        key: {
          a: 'minecraft:soul_sand',
          b: 'bloodmagic:reinforcedslate',
          c: 'minecraft:nether_star',
        },
      },
      {
        id: 'corrupted',
        key: {
          a: 'blue_skies:horizonite_ingot',
          b: 'malum:processed_soulstone',
          c: 'bloodmagic:infusedslate',
        },
      },
      {
        id: 'lost',
        key: {
          a: 'create:andesite_alloy',
          b: 'kubejs:dust_cinder',
          c: 'twilightforest:carminite',
        },
      },
      {
        id: 'nether',
        key: {
          a: 'tconstruct:pig_iron_ingot',
          b: 'minecraft:blaze_powder',
          c: 'bloodmagic:weakbloodshard',
        },
      },
      {
        id: 'black',
        key: {
          a: 'cataclysm:witherite_ingot',
          b: 'hem:circuit_board',
          c: 'create:shadow_steel',
        },
      },

      {
        id: 'cursed',
        key: {
          a: 'naturesaura:tainted_gold',
          b: 'botania:pixie_dust',
          c: 'farmersdelight:hamburger',
        },
      },
      {
        id: 'evil',
        key: {
          a: 'pneumaticcraft:ingot_iron_compressed',
          b: 'coinsje:iron_coin',
          c: 'create:precision_mechanism',
        },
      },
      // {
      //   id: 'rogue',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
      // {
      //   id: 'witch',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
      // {
      //   id: 'old',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
      // {
      //   id: 'cryptic',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
      // {
      //   id: 'guardian',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
      // {
      //   id: 'magical',
      //   key: {
      //      a: '',
      //      b: '',
      //      c: '',
      //   },
      // },
    ]);
});
