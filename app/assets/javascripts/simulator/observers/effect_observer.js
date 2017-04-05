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

      if (effect.duration <= 0) {
        self.remove(effect);
      }
    });
  }

}
