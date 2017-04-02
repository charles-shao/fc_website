// Timeline
//
//
function Timeline() {
  var self = this;

  self.timeElapsed = 0;
  self.actionQueue = ko.observableArray([]);
  self.actionsObserved = ko.observableArray([]);
  self.effectsObserved = ko.observableArray([]);

  self.elapseTime = function(time) {
    self.timeElapsed = self.timeElapsed + time;
  }

  self.addToActionQueue = function(action) {
    self.actionQueue.push(action);
    self.observeActionUsage();
  }

  self.removeFromActionQueue = function(observer) {
    var action = observer.action;

    self.actionQueue.remove(action);

    if (action instanceof Spell) {
      self.actionsObserved.remove(observer);
    } else if (action instanceof DamageMultiplierAbility) {
      self.actionsObserved.remove(observer);
      self.effectsObserved.remove(observer);
    }

    self.observeActionUsage();
  }

  self.observeActionUsage = function(){
    // Clear current spells observed
    self.timeElapsed = 0;
    self.actionsObserved([]);
    self.effectsObserved([]);

    // Repopulate observed spells
    $.each(self.actionQueue(), function(indexInArray, action) {
      if (action instanceof Spell) {
        self.actionsObserved.push(new TimelineSpellObserver(self, action, indexInArray));
      } else if (action instanceof DamageMultiplierAbility) {
        self.actionsObserved.push(new TimelineEffectObserver(self, action, indexInArray));
        self.effectsObserved.push(new TimelineEffectObserver(self, action, indexInArray));
      }
    });
  };
}
