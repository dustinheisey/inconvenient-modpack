onEvent('item.registry', event => {
  function item(id, label) {
    event.create(id).displayName(label || global.toTitleCase(id));
  }

  function items(group, ids) {
    ids.forEach(id => {
      event
        .create(`${group}_${id}`)
        .displayName(global.toTitleCase(id) + ' ' + global.toTitleCase(group));
    });
  }

  items('hide', ['stitched', 'stripped', 'salted', 'dried', 'wet_tanned']);
  items('dust', [
    'witherite',
    'fiery',
    'cinder',
    'calcium_carbonate',
    'trona',
    'cinnamon',
    'silica',
    'electrum',
    'brass',
    'mixed',
  ]);
  items('pebble', ['turquoise', 'depthrock', 'lunar', 'deadrock', 'mixed']);
  items('flakes', [
    'wheat',
    'corn',
    'oat',
    'sorghum',
    'millet',
    'rye',
    'barley',
    'soy',
  ]);
  items('coin', [
    'copper',
    'tin',
    'iron',
    'lead',
    'silver',
    'zinc',
    'aluminum',
    'gold',
    'steel',
    'nickel',
    'platinum',
  ]);

  item('cake_batter');
  item('cake_mix');
  item('crushed_trona');
  item('cinder_ingot');
  item('glass_tube');
  item('wheat');
  item('egg_whip');
  item('baking_powder');
  item('cream_of_tartar');
  item('tartaric_acid');
  item('baking_soda');
  item('soda_ash');
  item('drop_of_tar');
  item('pre_mix');
  item('feed_mix');
  item('catalyst');
  item('inert_compound');

  item('lost_page_everbright', 'Frigid Lost Page');
  item('lost_page_undergarden', 'Slimy Lost Page');
  item('lost_page_everdawn', 'Tattered Lost Page');
  item('lost_page_twilight', 'Dark Lost Page');
  item('lost_page_nether', 'Burnt Lost Page');
  item('lost_page_bumblezone', 'Sticky Lost Page');
  item('lost_page_blueleaf', 'Sooty Lost Page');

  item('lost_story_everbright', "A Grandmother's Story");
  item('lost_story_undergarden', 'The Virus');
  item('lost_story_everdawn', 'Climate Chaos');
  item('lost_story_twilight', 'The Rise of a Dictator');
  item('lost_story_nether', 'A Dire Warning');
  item('lost_story_bumblezone', 'The Last Flower');
  item('lost_story_blueleaf', 'Welcome to Blueleaf');

  item('token_everbright', 'Aquatic Token');
  item('token_undergarden', 'Forgotten Token');
  item('token_everdawn', 'Poisonous Token');
  item('token_twilight', 'Dark Token');
  item('token_nether', 'Hellish Token');
  item('token_bumblezone', 'Buzzing Token');
  item('token_blueleaf', 'Sooty Token');
  item('token_end', 'Mysterious Token');
  item('token_restoration', 'Restoration Token');
  item('token_earth', 'Earth Token');
  item('token_hell', 'Hell Token');
});
