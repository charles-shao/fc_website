blm.actions.Blizzard = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  var effects = observers.effectObserver.activeEffects();

  // The presence of Astral Fire should reduce the potency of the ice action
  // by the base * scalar depending on the number of stacks
  if (indexOfAstralFire > -1) {
    astralFire = effects[indexOfAstralFire].obj;
    multiplier = multiplier * astralFire.attributes().iceDmgMultiplier;

    // The presence of Astral Fire should reduce the cast time of the ice spell
    // when at 3 stacks
    castTime = castTime * astralFire.attributes().iceCastTimeMultiplier;
  }

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  if (indexOfAstralFire > -1) {
    // Remove Astral Fire, no stacks of Umbral Ice is gained
    observers.effectObserver.removeAtIndex(indexOfAstralFire);
  } else {
    // Grant stack of Umbral Ice if found in effects
    if (indexOfUmbralIce > -1) {
      effect = effects[indexOfUmbralIce];
      umbralIce = effect.obj;

      // Grant additional stack
      umbralIce.increaseStack();

      effect.refreshDuration(umbralIce.attributes().duration);

      // Update observer
      observers.effectObserver.replaceAtIndex(indexOfUmbralIce, new Effect(umbralIce));
    } else {
      umbralIce = new blm.traits.UmbralIce();

      effect = new Effect(umbralIce);

      // Add brand new UI to effects
      observers.effectObserver.add(effect);
    }
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  // Table viewer wrapper
  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
