//= require simulator/actions/blm/fire.js

var blm = {
  actions: {
    Fire: fire
  },
  traits: {
    AstralFire: function() {
      var stack = 0;
      var valuesAtStack = [
        { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.0, iceDmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, iceHasteMultiplier: 1.0, mpRegen: true },
        { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.4, iceDmgMultiplier: 0.9, fireMpCostScaler: 2.0, iceMpCostScaler: 0.5, iceHasteMultiplier: 1.0, mpRegen: false },
        { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.6, iceDmgMultiplier: 0.8, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceHasteMultiplier: 1.0, mpRegen: false },
        { name: "Astral Fire", duration: 12, fireDmgMultiplier: 1.8, iceDmgMultiplier: 0.7, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceHasteMultiplier: 1.5, mpRegen: false },
      ]

      this.increaseStack = function() {
        if (stack < 3) {
          stack += 1;
        }
      }

      this.attributes = function() {
        return valuesAtStack[stack];
      }
    },
    UmbralIce: function() {
      var stacks = 0;
      var valuesAtStack = [
        { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
        { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.9, fireMpCostScaler: 0.5, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
        { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.8, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
        { name: "Umbral Ice", duration: 12, iceDmgMultiplier: 1.0, fireDmgMultiplier: 0.7, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.5, mpRegen: true },
      ]

      this.increaseStack = function() {
        if (stack < 3) {
          stack += 1;
        }
      }

      this.attributes = function() {
        return valuesAtStack[stack];
      }
    },
    Firestarter: function() {
      this.procChance = 0.4;
      this.duration = 15;
    }
  }
}
