onEvent('item.registry', event => {
  let item = (id, name, duration) => {
    event.create(id).displayName(name || global.toTitleCase(id));
  };

  items({
    chapter_1: {
      hide: ['stitched', 'stripped', 'salted', 'dried', 'wet_tanned'],
    },
    chapter_2: {
      thermometer: [],
      lost_pages: [],
      lost_stories: [],
    },
    chapter_3: {},
  });

  // Leather
  item('hide_stitched', 'Stitched Hide');
  item('hide_stripped', 'Stripped Hide');
  item('hide_salted', 'Salted Hide');
  item('hide_dried', 'Dried Hide');
  item('hide_wet_tanned', 'Wet Tanned Hide');

  // Thermometer
  item('tube_glass', 'Glass Tube');

  // Lost Pages
  item('lost_page_everbright', 'Frigid Lost Page');
  item('lost_page_undergarden', 'Slimy Lost Page');
  item('lost_page_everdawn', 'Tattered Lost Page');
  item('lost_page_twilight', 'Magical Lost Page');
  item('lost_page_nether', 'Burnt Lost Page');
  item('lost_page_blueleaf', 'Sooty Lost Page');
  item('lost_page_bumblezone', 'Sticky Lost Page');

  // Lost Stories
  item('lost_story_everbright', "A Grandmother's Story");
  item('lost_story_undergarden', 'A Virus');
  item('lost_story_everdawn', 'Climate Chaos');
  item('lost_story_twilight', 'The Rise of a Dictator');
  item('lost_story_nether', 'A Dire Warning');
  item('lost_story_blueleaf', 'Welcome to Blueleaf');
  item('lost_story_bumblezone', 'The Last Flower');

  // Tokens
  item('token_everbright', 'Aquatic Token');
  item('token_undergarden', 'Forgotten Token');
  item('token_everdawn', 'Poisonous Token');
  item('token_twilight', 'Magical Token');
  item('token_nether', 'Hellish Token');
  item('token_blueleaf', 'Sooty Token');
  item('token_bumblezone', 'Buzzing Token');
  item('token_end', 'Mysterious Token');
  item('token_restoration', 'Restoration Token');
  item('token_earth', 'Earth Token');
  item('token_hell', 'Hell Token');

  // Dusts
  item('dust_fiery', 'Fiery Dust');
  item('dust_cinder', 'Cinder Dust');
  item('dust_calcium_carbonate', 'Calcium Carbonate Dust');
  item('dust_trona', 'Trona Dust');
  item('dust_cinnamon', 'Cinnamon Dust');
  item('dust_silica', 'Silica Dust');
  item('dust_electrum', 'Electrum Dust');
  item('dust_brass', 'Brass Dust');
  item('dust_mineral_blend', 'Mineral Dust Blend');

  // Blaze Cake
  item('blaze_cake_mix');
  item('egg_whip');
  item('baking_powder');
  item('cream_of_tartar');
  item('tartaric_acid');
  item('baking_soda');
  item('soda_ash');
  item('blaze_cake_batter');
  item('mixed_berries');

  // Ingots
  item('ingot_cinder', 'Cinder Ingot');

  // Pebbles
  item('pebble_turquoise', 'Turquoise Pebble');
  item('pebble_lunar', 'Lunar Pebble');
  item('pebble_deadrock', 'Deadrock Pebble');
  item('mixed_pebbles');

  // Chromatic Compound
  item('tar_sands');
  item('drop_of_tar');

  item('wheat');

  item('flakes_wheat', 'Wheat Flakes');
  item('flakes_corn', 'Corn Flakes');
  item('flakes_oat', 'Oat Flakes');
  item('flakes_sorghum', 'Sorghum Flakes');
  item('flakes_millet', 'Millet Flakes');
  item('flakes_rye', 'Rye Flakes');
  item('flakes_barley', 'Barley Flakes');
  item('flakes_soy', 'Soy Flakes');

  item('pre_mix');

  item('feed_mix');

  item('catalyst');
});
