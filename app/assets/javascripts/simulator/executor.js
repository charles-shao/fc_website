function Executor(observers) {
  const BASE_MULTIPLIER = 1.0

  var self = this;

  self.mutliplier = BASE_MULTIPLIER;

  // Initialise some defaults
  self.action = observers.actionObserver.action;
  self.effects = observers.effectObserver.actions;

  // Expire any effects due
  observers.effectObserver.tick(self.action.castTime);

  // Calculate effect on actions first
  self.multiplier = stackMultiplierActions(self.effects);
  self.effectivePotency = potencyMultiplier(self.action.potency, self.multiplier)

  // Handle encounter duration and GCDs
  observers.encounterObserver.extend(self.action.castTime)
  self.encounterTime = observers.encounterObserver.timeAt();

  function potencyMultiplier(potency, multiplier) {
    return potency * multiplier;
  }

  function stackMultiplierActions(actions) {
    multiplier = 1.0;

    for (var i in actions) {
      action = actions[i];
      if (action.isDmgBuff()) {
        multiplier = multiplier * action.modifier;
      }
    }

    return multiplier;
  }

}
