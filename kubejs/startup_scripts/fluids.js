onEvent('fluid.registry', event => {
  function fluid(id, color, thin) {
    if (thin)
      event
        .create(id)
        .thinTexture(color)
        .bucketColor(color)
        .displayName(global.toTitleCase(id));
    else
      event
        .create(id)
        .thickTexture(color)
        .bucketColor(color)
        .displayName(global.toTitleCase(id));
  }

  // Chapter 1
  fluid('tanning_fluid', 0xe6c83d, true);

  // Chapter 2
  fluid('molten_ventium', 0xe78c8e);
  fluid('molten_falsite', 0xb188cb);
  fluid('molten_charoite', 0xc9add6);
  fluid('molten_aquite', 0xa0def0);
  fluid('freezing_sap', 0xbaddff, true);
  fluid('molten_sterling_silver', 0xfefefe);
  fluid('molten_crystal_glass', 0xb2b4c0);
  fluid('molten_midnight_glass', 0x878c94);

  // Chapter 3
  fluid('molten_froststeel', 0xcbdcef);
  fluid('molten_cloggrum', 0xad9f9a);
  fluid('molten_regalium', 0xe2b388);
  fluid('molten_utherium', 0xeb99192);
  fluid('molten_forgotten_metal', 0x95f2d7);
  fluid('molten_ironwood', 0xc0b9b9);
  fluid('molten_steeleaf', 0x95b08e);
  fluid('molten_horizonite', 0xffc395);
  fluid('molten_redstone', 0xee08184);
  fluid('fiery_blood', 0xc23616);
  fluid('fiery_tears', 0xe84118);

  // Chapter 4

  // Blaze Cake
  fluid('liquid_tau', 0xffca00);
  fluid('berry_juice', 0xb183b1);
  fluid('carbonate_slurry', 0x8b8378);
  fluid('blaze_cake_batter', 0xff4019);
  fluid('wine', 0x4e032b);

  // Chromatic Compound
  fluid('tar_slurry', 0x1e272e);
  fluid('pure_tar', 0x1e272e);
  fluid('mysterious_adhesive', 0x1e272e);
  fluid('crimson_resin', 0xdc143c);
  fluid('warped_resin', 0x008b8b);
  fluid('hellish_resin', 0x008b8b);

  // Gunpowder
  fluid('compost', 0x1e272e);

  // Silica Dust
  fluid('distilled_water', 0x1e272e);
  fluid('polar_pigments', 0xd3e1eb);
  fluid('blue_dye', 0x1e3799);
  fluid('light_blue_dye', 0x82ccdd);
  fluid('cyan_dye', 0x079992);
  fluid('white_dye', 0xffffff);
  fluid('verdant_variants', 0x394827);
  fluid('green_dye', 0x009432);
  fluid('lime_dye', 0xc4e538);
  fluid('gray_dye', 0x485460);
  fluid('black_dye', 0x1e272e);
  fluid('sunset_shades', 0x9f392b);
  fluid('red_dye', 0xc23616);
  fluid('orange_dye', 0xffa801);
  fluid('yellow_dye', 0xe1b12c);
  fluid('brown_dye', 0x7c3f00);
  fluid('twilight_tones', 0xad70a4);
  fluid('purple_dye', 0x82589f);
  fluid('magenta_dye', 0xb33771);
  fluid('pink_dye', 0xfd7272);
  fluid('light_gray_dye', 0xcad3c8);

  fluid('molten_iesnium', 0x9fd3dd);

  // Chapter 5.1
  fluid('antibiotics', 0xa091b3, true);

  // Chapter 5.2
  fluid('crystallized_sap', 0xb994b7, true);
});
