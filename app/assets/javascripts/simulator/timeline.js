// Timeline
//
//
function Timeline() {
  var self = this;

  self.timeElapsed = 0;
  self.actionId = 1; // Increment on every action added. Does not decrease, used as a temp PK
  self.actionQueue = ko.observableArray([]);
  self.actionsObserved = ko.observableArray([]);
  self.effectsActive = ko.observableArray([]);

  self.elapseTime = function(time) {
    self.timeElapsed = self.timeElapsed + time;
  }

  self.sequenceActionId = function() {
    self.actionId = self.actionId++;
    return self.actionId;
  }

  self.addToActionQueue = function(action) {
    self.actionQueue.push(action);
    self.observeActionUsage();
  }

  self.removeFromActionQueue = function(observer) {
    var action = observer.action;

    self.actionQueue.remove(action);
    self.actionsObserved.remove(observer);

    if (action instanceof DamageMultiplierAbility) {
      self.effectsActive.remove(observer);
    }

    self.observeActionUsage();
  }

  self.observeActionUsage = function(){
    // Clear current spells observed
    self.timeElapsed = 0;
    self.actionsObserved([]);
    self.effectsActive([]);

    // Repopulate observed spells
    $.each(self.actionQueue(), function(indexInArray, action) {
      actionObserver = new ActionObserver(self, action, self.effectsActive(), indexInArray)
      self.actionsObserved.push(actionObserver);

      if (action.type instanceof DamageMultiplierAbility) {
        self.effectsActive.push(new DamageEffectObserver(action));
      } else if (action.type instanceof CriticalMultiplierAbility) {
        self.effectsActive.push(new CriticalEffectObserver(action));
      }
    });
  };
}
