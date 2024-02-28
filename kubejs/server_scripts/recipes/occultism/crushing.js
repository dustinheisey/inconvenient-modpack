onEvent('recipes', event => {
  new recipes(event)
    .setType('occultism:crushing')
    .setFunction(config =>
      event.custom({
        type: 'occultism:crushing',
        ingredient: config.input,
        result: config.output,
        crushing_time: 200,
      })
    )
    .removeOutputs([
      'mekanism:dust_lapis_lazuli',
      'mekanism:dust_diamond',
      'chemlib:tungsten_dust',
      'immersiveengineering:dust_steel',
      'chemlib:platinum_dust',
      'chemlib:cobalt_dust',
      'immersiveengineering:dust_nickel',
      'occultism:obsidian_dust',
      'immersiveengineering:dust_constantan',
      'mekanism:dust_netherite',
      'immersiveengineering:dust_aluminum',
      'mekanism:dust_fluorite',
      'immersiveengineering:dust_uranium',
      'mekanism:dust_osmium',
      'immersiveengineering:dust_electrum',
      'immersiveengineering:dust_lead',
      'mekanism:dust_bronze',
      'chemlib:graphite_dust',
      'mekanism:dust_tin',
      'mekanism:dust_emerald',
      'mekanism:dust_quartz',
      'immersiveengineering:dust_sulfur',
      'chemlib:iridium_dust',
      'mekanism:dust_coal',
      'immersiveengineering:dust_copper',
      'immersiveengineering:dust_gold',
      'immersiveengineering:dust_iron',
      'immersiveengineering:dust_silver',
    ])
    .add([
      {
        input: {item: 'rankine:blood_obsidian'},
        output: {item: 'create:powdered_obsidian', count: 1},
      },
      {
        input: {tag: 'forge:ores/froststeel'},
        output: {item: 'undergarden:raw_froststeel', count: 2},
      },
      {
        input: {tag: 'forge:ores/cloggrum'},
        output: {item: 'undergarden:raw_cloggrum', count: 2},
      },
      {
        input: {tag: 'forge:ores/uranium'},
        output: {item: 'rankine:uraninite', count: 2},
      },
      {
        input: {tag: 'forge:ores/zinc'},
        output: {item: 'rankine:sphalerite', count: 2},
      },
      {
        input: {tag: 'forge:ores/nickel'},
        output: {item: 'rankine:pentlandite', count: 2},
      },
      {
        input: {tag: 'forge:ores/iron'},
        output: {item: 'rankine:hematite', count: 2},
      },
      {
        input: {tag: 'forge:ores/lead'},
        output: {item: 'rankine:galena', count: 2},
      },
      {
        input: {tag: 'forge:ores/cobalt'},
        output: {item: 'rankine:cobaltite', count: 2},
      },
      {
        input: {tag: 'forge:ores/tin'},
        output: {item: 'rankine:cassiterite', count: 2},
      },
      {
        input: {tag: 'forge:ores/aluminum'},
        output: {item: 'rankine:bauxite', count: 2},
      },
      {
        input: {tag: 'forge:ores/silver'},
        output: {item: 'rankine:acanthite', count: 2},
      },
      {
        input: {tag: 'blue_skies:ores/horizonite'},
        output: {item: 'blue_skies:raw_horizonite', count: 2},
      },
      {
        input: {tag: 'blue_skies:ores/ventium'},
        output: {item: 'blue_skies:raw_ventium', count: 2},
      },
      {
        input: {tag: 'blue_skies:ores/falsite'},
        output: {item: 'blue_skies:raw_falsite', count: 2},
      },
      {
        input: {tag: 'blue_skies:ores/charoite'},
        output: {item: 'blue_skies:raw_charoite', count: 2},
      },
      {
        input: {tag: 'blue_skies:ores/aquite'},
        output: {item: 'blue_skies:raw_aquite', count: 2},
      },
      {
        input: {item: 'mythicbotany:gold_ore'},
        output: {item: 'minecraft:raw_gold', count: 2},
      },
    ]);
});
