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
  fluid('liquid_tau', 0xffca00);
  fluid('flaxseed_oil', 0xd0c478);
  fluid('crystallized_sap', 0xb994b7, true);
  fluid('molten_iesnium', 0x9fd3dd);
  fluid('polar_pigments', 0xd3e1eb);
  fluid('verdant_variants', 0x394827);
  fluid('sunset_shades', 0x9f392b);
  fluid('twilight_tones', 0xad70a4);
  fluid('berry_juice', 0xb183b1);
  fluid('carbonate_slurry', 0x8b8378);
  fluid('tar_slurry', 0x000000);
  fluid('crimson_resin', 0xdc143c);
  fluid('warped_resin', 0x008b8b);

  // Chapter 5.1
  fluid('antibiotics', 0xa091b3, true);
});
