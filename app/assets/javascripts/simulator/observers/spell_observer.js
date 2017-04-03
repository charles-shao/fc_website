// SpellObserver
//
// Keeps track of skills and spells that have been used
function SpellObserver(action, effectsActive) {
  const BASE_MULTIPLIER = 1.0;

  var self = this;
  self.action = action;
  self.effectsActive = effectsActive;

  // Common
  self.potency = self.action.type.potency();
  self.castedTime = self.action.type.castTime();

  self.multiplier = calculateEffectiveMultipliers();
  self.totalPotency = ko.computed(function() {
    var total = self.potency * self.multiplier;
    return total.toFixed(2);
  });

  function calculateEffectiveMultipliers() {
    var totalMultiplier = BASE_MULTIPLIER;

    $.each(self.effectsActive, function(indexInArray, effect) {
      totalMultiplier = totalMultiplier * effect.multiplier;
    });

    return totalMultiplier;
  }
}
