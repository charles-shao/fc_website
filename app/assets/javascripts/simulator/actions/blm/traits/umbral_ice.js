blm.traits.UmbralIce = function() {
  var stack = 0;
  var valuesAtStack = [
    { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, fireCastTimeMultiplier: 1.0, mpRegen: true },
    { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.9, fireMpCostScaler: 0.5, iceMpCostScaler: 1.0, fireCastTimeMultiplier: 1.0, mpRegen: true },
    { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.8, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireCastTimeMultiplier: 1.0, mpRegen: true },
    { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.7, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireCastTimeMultiplier: 0.5, mpRegen: true },
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
