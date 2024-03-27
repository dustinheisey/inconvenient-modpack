onEvent('recipes', event => {
  new recipes(event)
    .setFunction(config => {
      event.shaped(
        `kubejs:${config.dimension}_lost_story`,
        ['abb', 'bcc', 'bcc'],
        {
          a: 'paragon_textiles:silk',
          b: 'minecraft:leather',
          c: `kubejs:${config.dimension}_lost_page`,
        }
      );
    })
    .add([
      {
        dimension: 'everbright',
      },
      {
        dimension: 'undergarden',
      },
      {
        dimension: 'everdawn',
      },
      {
        dimension: 'twilight',
      },
      {
        dimension: 'nether',
      },
      {
        dimension: 'blueleaf',
      },
      {
        dimension: 'bumblezone',
      },
    ]);
});

onEvent('item.right_click', event => {
  [
    'everbright',
    'undergarden',
    'everdawn',
    'twilight',
    'nether',
    'blueleaf',
  ].forEach(dimension => {
    if (event.item.id == `kubejs:${dimension}_lost_story`) {
      event.item.count--;
      event.cancel();
    }
  });
});
