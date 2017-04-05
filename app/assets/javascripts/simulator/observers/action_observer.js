function ActionObserver(action, effectObserver) {
  var self = this;

  self.action = action;
  self.effects = effectObserver.effects;

  self.effectivePotency = ko.computed(function() {
    // Iterate through effects
    return self.action.potency;
  });

  // Tick effects after cast
  effectObserver.tick(action.castTime);
}
