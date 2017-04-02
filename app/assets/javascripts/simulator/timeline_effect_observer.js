// TimelineEffectObserver
//
// Keeps track of abilities that have elapsed
function TimelineEffectObserver(timeline, action, sequence) {
  var self = this;

  self.timeline = timeline;
  self.action = action;
  self.sequence = sequence;

  // delegate common variables for table view
  self.name = action.name;
  self.potency = null;
  self.totalPotency = null;

  self.multiplier = action.multiplier;
  self.multiplierText = ko.computed(function() {
    return `${self.multiplier.toFixed(2)}`;
  });

  self.timeSinceEncounter = ko.computed(function() {
    self.timeline.elapseTime(0);
    return self.timeline.timeElapsed;
  });
}
