blm.actions.FireIII = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var uiMultiplier = blm.utils.baseDmgMultiplier;
  var afMultiplier = blm.utils.baseDmgMultiplier;

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  var effects = observers.effectObserver.activeEffects();

  // The presence of Umbral Ice should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks
  if (indexOfUmbralIce > -1) {
    umbralIce = effects[indexOfUmbralIce].obj;
    multiplier = multiplier * umbralIce.attributes().fireDmgMultiplier;

    // The presence of Umbral Ice should reduce the cast time of the fire spell
    // when at 3 stacks
    castTime = castTime * umbralIce.attributes().fireCastTimeMultiplier;
  } else if (indexOfAstralFire > -1) {
    // We are currently in Astral fire
    astralFire = effects[indexOfAstralFire].obj;

    multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  }

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Remove Umbral Ice
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  }

  // Grant max Astral Fire stacks
  if (indexOfAstralFire > -1) {
    // Ensure AF is at max stacks before refreshing duration
    effect = effects[indexOfAstralFire];
    astralFire = effect.obj;
    astralFire.maxStack();

    effect.refreshDuration(astralFire.attributes().duration);

    // Update observer
    observers.effectObserver.replaceAtIndex(indexOfAstralFire, new Effect(astralFire));
  } else {
    // Apply maximum stacks
    astralFire = new blm.traits.AstralFire();
    astralFire.maxStack();

    // Apply multipliers
    effect = new Effect(astralFire);
    observers.effectObserver.add(effect);
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
