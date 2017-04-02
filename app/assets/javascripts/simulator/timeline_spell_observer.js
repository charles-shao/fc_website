// TimelineSpellObserver
//
// Keeps track of skills and spells that have been used
function TimelineSpellObserver(timeline, action, sequence) {
  const BASE_MULTIPLIER = 1.0;

  var self = this;

  self.timeline = timeline;
  self.action = action;
  self.sequence = sequence;

  // delegate common variables for table view
  self.name = action.name;
  self.potency = action.potency();

  self.timeSinceEncounter = ko.computed(function() {
    self.timeline.elapseTime(self.action.castTime());
    return self.timeline.timeElapsed;
  });

  self.multiplier = calculateEffectiveMultipliers();
  self.multiplierText = ko.computed(function() {
    return self.multiplier.toFixed(2);
  });
  self.totalPotency = ko.computed(function() {
    var total = self.potency * self.multiplier;
    return total.toFixed(2);
  });

  function calculateEffectiveMultipliers() {
    var totalMultiplier = BASE_MULTIPLIER;

    $.each(self.timeline.effectsObserved(), function(indexInArray, dmgAbility) {
      totalMultiplier = totalMultiplier * dmgAbility.multiplier;
    });

    return totalMultiplier;
  }
}
