function EffectObserver() {
  var self = this;

  self.effects = [];

  self.add = function(effect) {
    self.effects.push(effect);
  }

  self.remove = function(effect) {
    ko.utils.arrayRemoveItem(self.effects, effect);
  }

  self.tick = function(time) {
    $.each(self.effects, function(index, effect) {
      effect.duration = effect.duration - time;

      if (expirable(effect.duration, time)) {
        self.remove(effect);
      }
    });
  }

  self.indexOf = function(klass) {
    var klassIndexAt = -1;
    for (var i in self.effects) {
      effect = self.effects[i]
      if (effect instanceof klass) {
        klassIndexAt = i;
      }
    }

    return klassIndexAt;
  }

  function expirable(duration, time) {
    return (duration <= 0) || (duration < time);
  }
}
