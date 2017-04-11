blm.traits.UmbralIce = function() {
  var stack = 0;
  var valuesAtStack = [
    {
      name: "Umbral Ice",
      duration: 12,
      iceDmgMultiplier: 1.0,
      fireDmgMultiplier: 0.9,
      fireMpCostScaler: 0.5,
      iceMpCostScaler: 1.0,
      fireCastTimeMultiplier: 1.0,
      mpRegen: true,
      imagePath: simulation.trait_images.blm.umbral_ice
    },
    {
      name: "Umbral Ice II",
      duration: 12,
      iceDmgMultiplier: 1.0,
      fireDmgMultiplier: 0.8,
      fireMpCostScaler: 0.25,
      iceMpCostScaler: 1.0,
      fireCastTimeMultiplier: 1.0,
      mpRegen: true,
      imagePath: simulation.trait_images.blm.umbral_ice_ii
    },
    {
      name: "Umbral Ice III",
      duration: 12,
      iceDmgMultiplier: 1.0,
      fireDmgMultiplier: 0.7,
      fireMpCostScaler: 0.25,
      iceMpCostScaler: 1.0,
      fireCastTimeMultiplier: 0.5,
      mpRegen: true ,
      imagePath: simulation.trait_images.blm.umbral_ice_iii
    }
  ]

  this.increaseStack = function() {
    if (currentStack() < 2) {
      stack += 1;
    }
  }

  this.maxStack = function() {
    stack = 2;
  }

  this.attributes = function() {
    return valuesAtStack[stack];
  }

}
