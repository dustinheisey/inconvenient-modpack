onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('chapter_4')
    .setFunction(config => event.shapeless(config.output, config.inputs))
    .modifyOutputs([
      {
        output: 'occultism:chalk_red_impure',
        inputs: [
          'bloodmagic:weakbloodshard',
          'minecraft:blaze_powder',
          'occultism:chalk_purple_impure',
        ],
      },
      {
        output: 'minecraft:magma_cream',
        inputs: ['minecraft:blaze_powder', 'malum:unholy_sapball'],
      },
    ]);
});
