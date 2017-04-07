function EffectObserver() {
  var self = this;

  self.actions = [];

  self.add = function(action) {
    self.actions.push(action);
  }

  self.remove = function(action) {
    ko.utils.arrayRemoveItem(self.actions, action);
  }

  self.tick = function(time) {
    $.each(self.actions, function(index, action) {
      action.duration = action.duration - time;

      if (expirable(action.duration, time)) {
        self.remove(action);
      }
    });
  }

  function expirable(duration, time) {
    return (duration <= 0) || (duration < time);
  }
}
