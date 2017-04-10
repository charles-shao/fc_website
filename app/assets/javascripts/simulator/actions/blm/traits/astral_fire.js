blm.traits.AstralFire = function() {
  var stack = 0;
  var valuesAtStack = [
    { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.0, iceDmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, iceCastTimeMultiplier: 1.0, mpRegen: true },
    { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.4, iceDmgMultiplier: 0.9, fireMpCostScaler: 2.0, iceMpCostScaler: 0.5, iceCastTimeMultiplier: 1.0, mpRegen: false },
    { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.6, iceDmgMultiplier: 0.8, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceCastTimeMultiplier: 1.0, mpRegen: false },
    { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.8, iceDmgMultiplier: 0.7, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceCastTimeMultiplier: 1.5, mpRegen: false },
  ]

  this.increaseStack = function() {
    if (stack < 3) {
      stack += 1;
    }
  }

  this.maxStack = function() {
    stack = 3;
  }

  this.attributes = function() {
    return valuesAtStack[stack];
  }
}
