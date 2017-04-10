blm.traits.AstralFire = function() {
  var stack = 0;
  var valuesAtStack = [
    {
      name: "Astral Fire",
      duration: 12,
      fireDmgMultiplier: 1.4,
      iceDmgMultiplier: 0.9,
      fireMpCostScaler: 2.0,
      iceMpCostScaler: 0.5,
      iceCastTimeMultiplier: 1.0,
      mpRegen: false,
      imagePath: simulation.trait_images.blm.astral_fire
    },
    {
      name: "Astral Fire II",
      duration: 12,
      fireDmgMultiplier: 1.6,
      iceDmgMultiplier: 0.8,
      fireMpCostScaler: 2.0,
      iceMpCostScaler: 0.25,
      iceCastTimeMultiplier: 1.0,
      mpRegen: false,
      imagePath: simulation.trait_images.blm.astral_fire_ii
    },
    {
      name: "Astral Fire III",
      duration: 12,
      fireDmgMultiplier: 1.8,
      iceDmgMultiplier: 0.7,
      fireMpCostScaler: 2.0,
      iceMpCostScaler: 0.25,
      iceCastTimeMultiplier: 1.5,
      mpRegen: false,
      imagePath: simulation.trait_images.blm.astral_fire_iii
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
    return valuesAtStack[currentStack()];
  }

  var currentStack = function() {
    return stack;
  }

}
