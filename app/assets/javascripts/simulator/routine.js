function Routine(chart) {
  var self = this;

  self.chart = chart;
  self.slots = ko.observableArray([]);

  var effectObserver = new EffectObserver();
  var gcdObserver = new GcdObserver();
  var encounterObserver = new EncounterObserver();

  self.addAction = function(actionBase) {
    action = new Action(actionBase);
    actionObserver = new ActionObserver(action)

    observers = {
      actionObserver: actionObserver,
      effectObserver: effectObserver,
      gcdObserver: gcdObserver,
      encounterObserver: encounterObserver
    }

    slot = new Slot(currentIndex(), observers)
    self.slots.push(slot);

    // FIX DURATION
    self.chart.series[0].addPoint({
      x: slot.viewer.encounterTime,
      y: slot.viewer.effectivePotency
    });

  }

  self.removeSlot = function(slot) {
    self.slots.remove(slot);

    // Recalculate everything
  };

  self.recalibrate = function() {

  }

  function currentIndex() {
    return self.slots().length;
  }
}
