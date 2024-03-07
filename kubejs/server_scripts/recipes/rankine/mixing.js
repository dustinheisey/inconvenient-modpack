onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:mixing')
    .setFunction(config => {
      let json = {
        type: 'rankine:mixing',
        mixTime: 100,
        ingredientTotal: config.inputs.length,
        matScale: 1,
        fluidInput: {
          fluid: config.fluid_input.id,
          amount: config.fluid_input.amount || 1000,
        },
        result: {
          item: config.output,
        },
      };

      config.inputs.forEach((input, index) => {
        let input_json = {
          required: true,
          min: input.min,
          max: input.max,
        };

        if (input.id) input_json.item = input.id;
        else if (input.tag) input_json.tag = input.tag;

        json[`input${index + 1}`] = input_json;
      });

      event.custom(json);
    })
    .removeOutputs([
      'rankine:unaged_cheese',
      'rankine:tofu',
      'rankine:pumice_soap',
      'rankine:pancake_batter',
      'rankine:fire_clay_ball',
      'rankine:beta_alumina_solid_electrolyte',
      'rankine:dough',
      'rankine:bitumen',
      'rankine:mariposite',
      'rankine:cement_mix',
      'rankine:porcelain_clay_ball',
    ])
    .modifyOutputs([
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'minecraft:dirt',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'minecraft:sand',
            min: 0.4,
            max: 0.6,
          },
          {
            id: 'paragon_textiles:plant_fibers',
            min: 0.05,
            max: 0.25,
          },
        ],
        output: 'rankine:cob',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'minecraft:sand',
            min: 0.6,
            max: 0.75,
          },
          {
            id: 'rankine:fire_clay_ball',
            min: 0.05,
            max: 0.2,
          },
          {
            id: 'paragon_textiles:plant_fibers',
            min: 0.2,
            max: 0.5,
          },
        ],
        output: 'rankine:refined_cob',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 100,
        },
        inputs: [
          {
            tag: 'minecraft:sand',
            min: 0.5,
            max: 0.8,
          },
          {
            id: 'rankine:mortar',
            min: 0.2,
            max: 0.5,
          },
        ],
        output: 'rankine:roman_concrete',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 100,
        },
        inputs: [
          {
            tag: 'minecraft:sand',
            min: 0.5,
            max: 0.8,
          },
          {
            id: 'rankine:quicklime',
            min: 0.2,
            max: 0.5,
          },
        ],
        output: 'rankine:mortar',
      },
    ])
    .add([
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:asphalt',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
          {
            id: 'rankine:black_dacite',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:blue_asphalt',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
          {
            id: 'rankine:black_marble',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:dark_gray_asphalt',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
          {
            tag: 'forge:stones/andesite',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:gray_asphalt',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
          {
            tag: 'forge:stones/peridotite',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:green_asphalt',
      },
      {
        fluid_input: {
          id: 'minecraft:water',
          amount: 50,
        },
        inputs: [
          {
            tag: 'forge:gravel',
            min: 0.4,
            max: 0.6,
          },
          {
            tag: 'forge:sand',
            min: 0.2,
            max: 0.3,
          },
          {
            tag: 'forge:bitumen',
            min: 0.1,
            max: 0.2,
          },
          {
            tag: 'forge:stones/granite',
            min: 0.1,
            max: 0.2,
          },
        ],
        output: 'rankine:red_asphalt',
      },
      {
        fluid_input: {id: 'minecraft:water', amount: 20},
        inputs: [
          {tag: 'forge:stones/pumice', min: 0.9, max: 0.95},
          {tag: 'rankine:alkali_hydroxides', min: 0.05, max: 0.1},
        ],
        output: 'rankine:pumice_soap',
      },
      {
        fluid_input: {
          id: 'kubejs:tanning_fluid',
          amount: 250,
        },
        inputs: [
          {
            id: 'kubejs:hide_dried',
            required: true,
            min: 1.0,
            max: 1.0,
          },
        ],
        output: 'kubejs:hide_wet_tanned',
      },
      {
        fluid_input: {
          id: 'rankine:resin',
          amount: 250,
        },
        inputs: [
          {
            id: 'kubejs:hide_dried',
            required: true,
            min: 1.0,
            max: 1.0,
          },
        ],
        output: 'kubejs:hide_wet_tanned',
      },
    ]);
});
