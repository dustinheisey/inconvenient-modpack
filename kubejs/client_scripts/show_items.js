onEvent('jei.add.items', event => {
  list({
    realistictorches: ['realistictorches:unlit_torch'],
    endrem: ['endrem:cryptic_eye'],
    cataclysm: ['cataclysm:witherite_ingot'],
  }).forEach(item => {
    event.add(item);
  });
});
