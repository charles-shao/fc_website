// Keeps track of abilities that have elapsed
function DamageEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.multiplier = self.action.type.multiplier;
  self.duration = self.action.type.duration;
  self.castedTime = 0;

  self.tick = function(time) {
    self.duration = self.duration - time;
  };

  // self.displayDuration = ko.observable(self.duration.toFixed(1) + "s");
}
