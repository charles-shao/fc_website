//= require simulator/actions/blm/blm.js

var utils = {
  calculatePotency: function(action, multiplier) {
    return action.potency * multiplier;
  },
  calculateDamageBuffs: function(effects) {
    base = 1.0;

    for (var i in effects) {
      effect = effects[i];
      console.log(effect)
      base = base * effect.dmgMultiplier;
    }

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
  blm: blm,
  utils: utils
};
