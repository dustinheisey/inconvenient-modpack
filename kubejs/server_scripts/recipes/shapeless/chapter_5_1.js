onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('chapter_5_1')
    .setFunction(config => event.shapeless(config.output, config.inputs))
    .modifyOutputs([
      {
        output: 'productivebees:bee_nest_diamond_helmet',
        inputs: ['minecraft:beehive', 'botania:terrasteel_helmet'],
      },
    ])
    .add([
      {
        output: 'kubejs:hide_salted',
        inputs: ['kubejs:hide_stripped', 'salt:salt'],
      },
      {
        output: 'bloodmagic:enhancedteleposerfocus',
        inputs: ['bloodmagic:teleposerfocus', 'bloodmagic:strong_tau'],
      },
    ]);

  event
    .shapeless('24x kubejs:hide_stripped', [
      'butchercraft:cow_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
  event
    .shapeless('24x kubejs:hide_stripped', [
      'butchercraft:sheep_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
  event
    .shapeless('24x kubejs:hide_stripped', [
      'butchercraft:pig_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
});
