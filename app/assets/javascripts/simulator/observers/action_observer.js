function ActionObserver(timeline, action, effectsActive, sequence) {
  var self = this;

  self.timeline = timeline;
  self.action = action;
  self.effectsActive = effectsActive;
  self.sequence = sequence;
  self.name = action.type.name;
  self.observer = getObserver();

  self.timeSinceEncounter = ko.computed(function() {
    castedTime = self.observer.castedTime;
    self.timeline.elapseTime(castedTime);
    return self.timeline.timeElapsed;
  });

  self.potency = self.observer.potency;
  self.totalPotency = self.observer.totalPotency;
  self.multiplierText = ko.computed(function() {
    return self.observer.multiplier.toFixed(2);
  });

  function getObserver() {
    if (action.category == "Spell") {
      return new SpellObserver(self.action, self.effectsActive);
    } else if (action.category == "DamageMultiplierAbility") {
      return new EffectObserver(self.action);
    }
  }
}
