onEvent('server.datapack.high_priority', event => {
  // ? Functions
  function removeGateways(ids) {
    ids.forEach(id => {
      event.addJson(`gateways:gateways/${id}_small.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:gateways/${id}.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:gateways/${id}_large.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });

      event.addJson(`gateways:recipes/${id}_small.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:recipes/${id}.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:recipes/${id}_large.json`, {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false',
              },
            ],
          },
        ],
      });
    });
  }

  removeGateways([
    'blaze_gate',
    'creeper_gate',
    'enderman_gate',
    'ghast_gate',
    'magma_cube_gate',
    'shulker_gate',
    'skeleton_gate',
    'slime_gate',
    'spider_gate',
    'witch_gate',
    'zombie_gate',
  ]);
});
