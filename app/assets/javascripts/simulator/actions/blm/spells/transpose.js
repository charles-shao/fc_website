blm.actions.Transpose = function(observers) {
  var action = observers.actionObserver.action;
  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  var effects = observers.effectObserver.activeEffects();

  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);

  // Swap to AF is UI is present, grant one stack
  if (indexOfUmbralIce > -1) {
    astralFire = new blm.traits.AstralFire();
    // Replace index of UI with AF
    observers.effectObserver.replaceAtIndex(indexOfUmbralIce, new Effect(astralFire));
  } else if (indexOfAstralFire > -1) {
    umbralIce = new blm.traits.UmbralIce();
    // Replace index of AF with UI
    observers.effectObserver.replaceAtIndex(indexOfAstralFire, new Effect(umbralIce));
  }

  // If weaved between GCDs then do not count towards encounter time


  this.viewer = new Viewer({
    name: action.name,
    potency: 0,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
