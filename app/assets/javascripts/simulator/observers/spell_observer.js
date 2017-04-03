// SpellObserver
//
// Keeps track of skills and spells that have been used
function SpellObserver(action, actionEffectsActive) {
  const BASE_MULTIPLIER = 1.0;
  const BASE_CRITICAL_CHANCE = 10;
  const BASE_CRITICAL_VARIANCE = 1.5;

  var self = this;
  self.action = action;
  self.actionEffectsActive = actionEffectsActive;

  // Common
  self.potency = self.action.type.potency();
  self.castedTime = self.action.type.castTime();

  // Run calculations for spell result
  dmgMultiplier = BASE_MULTIPLIER;
  criticalChance = BASE_CRITICAL_CHANCE;
  criticalVariance = BASE_CRITICAL_VARIANCE;

  $.each(self.actionEffectsActive, function(indexInArray, effect) {
    if (effect instanceof DamageEffectObserver) {
      dmgMultiplier = dmgMultiplier * effect.multiplier;
    } else if (effect instanceof CriticalEffectObserver) {
      criticalChance = criticalChance + effect.percentageGain;
      criticalVariance = criticalVariance + effect.varianceGain;
    }
  });

  self.damageMultiplier = dmgMultiplier;
  self.criticalChance = criticalChance;
  self.criticalVariance = criticalVariance;

  self.totalPotency = ko.computed(function() {
    var total = self.potency * self.damageMultiplier;
    return total;
  });

}
