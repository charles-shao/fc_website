blm.actions.Enochian = function(observers) {
  var action = observers.actionObserver.action;
  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  var effects = observers.effectObserver.activeEffects();

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  // Apply AF multipliers
  if (indexOfAstralFire > -1) {
    astralFire = effects[indexOfAstralFire].obj;
    multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  }

  enochian = new blm.traits.Enochian();
  effect = new Effect(enochian);
  observers.effectObserver.add(effect);

  // If weaved between GCDs then do not count towards encounter time
  // observers.effectObserver.tick(castTime);

  // Table viewer wrapper
  this.viewer = new Viewer({
    name: action.name,
    potency: 0,
    potencyPerSecond: 0,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
