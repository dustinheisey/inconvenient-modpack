onEvent('jei.add.items', event => {
  list({
    realistictorches: ['realistictorches:unlit_torch'],
    endrem: ['endrem:cryptic_eye'],
    cataclysm: ['cataclysm:witherite_ingot'],
    create: [
      'create:chromatic_compound',
      'create:refined_radiance',
      'create:shadow_steel',
    ],
  }).forEach(item => {
    event.add(item);
  });
});
