onEvent('item.registry', event => {
  let item = (id, name, duration) => {
    if (duration)
      event
        .create(id)
        .displayName(name || global.toTitleCase(id))
        .useDuration(itemstack => duration)
        .use((level, player, hand) => true);
    else event.create(id).displayName(name || global.toTitleCase(id));
  };

  // Chapter 1
  item('stitched_hide');
  item('stripped_hide');
  item('salted_hide');
  item('dried_hide');
  item('wet_tanned_hide');

  // Chapter 2
  item('glass_tube');
  item('lost_page_everbright', 'Frigid Lost Page', 64);
  item('lost_story_everbright', "A Grandmother's Story");
  item('everbright_token', 'Aquatic Token');

  // Chapter 3
  item('lost_page_undergarden', 'Slimy Lost Page', 64);
  item('lost_page_everdawn', 'Tattered Lost Page', 64);
  item('lost_page_twilight', 'Magical Lost Page', 64);
  item('lost_story_undergarden', 'A Virus');
  item('lost_story_everdawn', 'Climate Chaos');
  item('lost_story_twilight', 'The Rise of a Dictator');
  item('undergarden_token', 'Forgotten Token');
  item('everdawn_token', 'Poisonous Token');
  item('twilight_token', 'Magical Token');
  item('powdered_fiery');

  // Chapter 4
  item('lost_page_nether', 'Burnt Lost Page', 64);
  item('lost_page_blueleaf', 'Sooty Lost Page', 64);
  item('lost_story_nether', 'A Dire Warning');
  item('lost_story_blueleaf', 'Welcome to Blueleaf');
  item('nether_token', 'Hellish Token');
  item('blueleaf_token', 'Sooty Token');

  // Chapter 5.1
  item('wheat');
  item('wheat_flakes');
  item('corn_flakes');
  item('oat_flakes');
  item('sorghum_flakes');
  item('millet_flakes');
  item('rye_flakes');
  item('barley_flakes');
  item('soy_flakes');
  item('pre_mix');
  item('feed_mix');
  item('lost_page_bumblezone', 'Sticky Lost Page', 64);
  item('lost_story_bumblezone', 'The Last Flower');
  item('bumblezone_token', 'Buzzing Token');

  // Chapter 5.2
  item('catalyst');

  // Chapter 7.1
  item('end_token', 'Mysterious Token');
  item('restoration_token');
  item('earth_token');

  // Chapter 7.2
  item('hell_token');
});
