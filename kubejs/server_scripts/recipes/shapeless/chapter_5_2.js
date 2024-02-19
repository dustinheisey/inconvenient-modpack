onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('chapter_5_2')
    .setFunction(config => event.shapeless(config.output, config.inputs));
});
