onEvent('server.datapack.high_priority', event => {
  function removeAdvancements(id) {
    let [mod, path] = id.split(':');
    event.addJson(`${mod}:advancements/${path}.json`, {
      criteria: {
        impossible: {
          trigger: 'minecraft:impossible',
        },
      },
    });
  }

  removeAdvancements('immersivepetroleum:main/root');
  removeAdvancements('biomancy:biomancy/root');
  removeAdvancements('architects_palette:main/root');
  removeAdvancements('lootr:root');
  removeAdvancements('butchercraft:root');
  removeAdvancements('botania:challenge/root');
  removeAdvancements('botania:main/root');
  removeAdvancements('charcoal_pit:charcoal_pit/root');
  removeAdvancements('create:root');
  removeAdvancements('dungeons_arise:wda_root');
  removeAdvancements('endrem:main/root');
  removeAdvancements('minecraft:adventure/root');
  removeAdvancements('minecraft:biomancy/root');
  removeAdvancements('minecraft:end/root');
  removeAdvancements('minecraft:husbandry/root');
  removeAdvancements('minecraft:nether/root');
  removeAdvancements('minecraft:recipes/root');
  removeAdvancements('minecraft:story/root');
  removeAdvancements('naturesaura:root');
  removeAdvancements('occultism:occultism/familiar/root');
  removeAdvancements('paraglider:root');
  removeAdvancements('pneumaticcraft:root');
  removeAdvancements('rankine:challenges/rankine_challenges');
  removeAdvancements('rankine:story/root');
  removeAdvancements('relics:obtain/root');
  removeAdvancements('tconstruct:tools/materials_and_you');
  removeAdvancements('trashcans:trash_can');
  removeAdvancements('the_bumblezone:the_bumblezone/root');
  removeAdvancements('compactmachines:root');
  removeAdvancements('hem:meltedsteelanvancement');
  removeAdvancements('hem:cracked_stone');
  removeAdvancements('ecofriendly:welcome_to_ecofreindly');
  removeAdvancements('trajanscore:parts/trajanstanks');
  removeAdvancements('undergarden:undergarden/root');
  removeAdvancements('immersiveengineering:tools/tools_root');
  removeAdvancements('immersiveengineering:multiblocks/multiblocks_root');
  removeAdvancements('immersiveengineering:main/main_root');
  removeAdvancements('viescraftmachines:root');
  removeAdvancements('crockpot:root');
  removeAdvancements('energeticsheep:root');
  removeAdvancements('blue_skies:root');
  removeAdvancements('twilightforest:root');
  removeAdvancements('farmersdelight:main/root');
  removeAdvancements('minerslung:root');
  removeAdvancements('cataclysm:root');
  removeAdvancements('cold_sweat:root');
  removeAdvancements('mythicbotany:mythicbotany/root');
  removeAdvancements('tofucraft:tofucraft/roots');
});
