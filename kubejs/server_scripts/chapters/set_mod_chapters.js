// priority: 205

// get mods list from `ingredient-list-mod-sort-order.ini` in `config/jei` and group them into chapters

onEvent('tags.items', event => {
  function setModsChapter(chapter, mods) {
    mods.forEach(mod => {
      Ingredient.of(`@${mod}`).itemIds.forEach(id => {
        event.add(`im:${chapter}`, id);
      });
    });
  }

  setModsChapter('chapter_1', [
    'thirst',
    'charcoal_pit',
    'naturescompass',
    'paraglider',
    'rankine',
    'ceramicbucket',
    'minecraft',
    'realistictorches',
    'justaraftmod',
    'antiqueatlas',
    'kubejs',
    'rocks',
    'death_compass',
    'gravestone',
    'depthmeter',
    'salt',
    'labels',
  ]);
  setModsChapter('chapter_2', [
    'farmersdelight',
    'strawgolem',
    'cold_sweat',
    'blue_skies',
    'smallships',
    'tconstruct',
    'gateways',
    'paragon_textiles',
    'farmersrespite',
    'modonomicon',
    'totemic',
    'astikorcarts',
  ]);
  setModsChapter('chapter_3', [
    'comforts',
    'balanced_crates',
    'hexerei',
    'akashictome',
    'twilightforest',
    'explorerscompass',
    'occultism',
    'undergarden',
    'twilighttweaks',
    'malum',
  ]);
  setModsChapter('chapter_4', [
    'immersive_aircraft',
    'bloodmagic',
    'create',
    'constructionwand',
    'chunkloaders',
    'framedblocks',
    'adchimneys',
    'hem',
    'waystones',
    'createaddition',
    'architects_palette',
    'chipped',
  ]);
  setModsChapter('chapter_5_1', [
    'sliceanddice',
    'delightful',
    'butchercraft',
    'energeticsheep',
    'productivebees',
    'botania',
    'the_bumblezone',
    'brewinandchewin',
    'farmingforblockheads',
    'measurements',
  ]);
  setModsChapter('chapter_5_2', [
    'simplylight',
    'morphtool',
    'compactmachines',
    'compactcrafting',
    'immersiveengineering',
    'pneumaticcraft',
    'compressedcreativity',
    'immersivepetroleum',
  ]);
  setModsChapter('chapter_7_1', [
    'za',
    'upgrade_aquatic',
    'naturalist',
    'crittersandcompanions',
    'cnb',
    'chemlib',
    'adpother',
    'extendedcrafting',
    'cataclysm',
    'ecofriendly',
    'mythicbotany',
    'tofucraft',
    'mekanismgenerators',
    'mekanism',
    'naturesaura',
    'endrem',
    'ppr',
  ]);
  setModsChapter('chapter_7_2', [
    'bloodsmeltery',
    'infectum',
    'industrialforegoing',
    'biomancy',
  ]);
});
