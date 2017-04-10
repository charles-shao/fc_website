function EffectObserver() {
  var effects = [];

  this.add = function(effect) {
    effects.push(effect);
  }

  this.remove = function(effect) {
    ko.utils.arrayRemoveItem(effects, effect);
  }

  this.removeAtIndex = function(index) {
    if (index > - 1) {
      effects.splice(index, 1);
    } else {
      console.log("Error removing element at index");
    }
  }

  this.replaceAtIndex = function(index, effect) {
    if (index > - 1) {
      effects[index] = effect;
    }
  }

  this.tick = function(time) {
    $.each(effects, function(index, effect) {
      effect.duration = effect.duration - time;

      if (expirable(effect.duration, time)) {
        this.remove(effect);
      }
    });
  }

  this.indexOf = function(klass) {
    var klassIndexAt = -1;
    for (var i in effects) {
      effect = effects[i]
      if (effect.obj instanceof klass) {
        klassIndexAt = i;
      }
    }

    return klassIndexAt;
  }

  this.activeEffects = function() {
    return effects;
  }

  function expirable(duration, time) {
    return (duration <= 0) || (duration < time);
  }
}
