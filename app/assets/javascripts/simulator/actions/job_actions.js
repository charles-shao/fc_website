// ============================================================================
// Actions for BLM/ THM
// ============================================================================
var actions = {
  Fire: function(observers) {
    var action = observers.actionObserver.action;
    var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
    var potency = jobActions.utils.calculatePotency(action, multiplier);

    // Trigger Firestarter proc; if Sharpcast is active then set the proc chance
    // to 100%

    // Remove Umbral Ice, no stacks of Astral Fire is gained
    indexOfUmbralIce = observers.effectObserver.indexOf(jobActions.traits.UmbralIce);
    if (indexOfUmbralIce > -1) {
      observers.effectObserver.removeAtIndex(indexOfUmbralIce);
    } else {
      // Grant Astral Fire if none is found in effects
      indexOfAstralFire = observers.effectObserver.indexOf(jobActions.traits.AstralFire);
      if (indexOfAstralFire > -1) {
        // Grant additional stack
        effect = observers.effectObserver.effects[indexOfAstralFire];
        astralFire = effect.obj;
        astralFire.increaseStack();
        effect.refreshDuration(astralFire.attributes().duration);
      } else {
        astralFire = new jobActions.traits.AstralFire();
        astralFire.increaseStack();

        effect = new Effect(astralFire);
        observers.effectObserver.add(effect);
      }
    }

    this.viewerAttr = function() {
      return {
        name: action.name,
        potency: potency,
        multiplier: multiplier,
        activeEffects: observers.effectObserver.effects
      };
    }
  },
  Blizzard: function() {
  },
  FireIII: function() {
  }
};

// ============================================================================
// Traits for BLM/ THM
// ============================================================================
var traits = {
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

var utils = {
  calculatePotency: function(action, multiplier) {
    return action.potency * multiplier;
  },
  calculateDamageBuffs: function(effects) {
    base = 1.0;

    // for (var i in effects) {
    //   effect = effects[i];
    //
    //   if (effect.isDmgBuff()) {
    //     base = base * effect.modifier;
    //   }
    // }

    return base;
  },
  calculateCriticalBuffs: function(effects) {
    percentage = 10;

    // for (var i in effects) {
    //   effect = effects[i];
    //
    //   if (effect.isCritBuff()) {
    //     percentage = percentage + effect.modifier;
    //   }
    // }

    return percentage;
  }
};

// ============================================================================
// Initialise job actions
// ============================================================================
var jobActions = {
  blm: {
    actions: actions,
    traits: traits
  }
  utils: utils
};
