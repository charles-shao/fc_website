function Slot(index, observers) {
  this.id = index;

  var validAction = true;
  var actionObjectName = observers.actionObserver.action.objectName;
  var jobIdentifier = observers.jobObserver.job.identifier;

  observers.gcdObserver.triggerGlobalCooldown();
  var actionBehaviour = new jobActions[jobIdentifier].actions[actionObjectName](observers);

  // TODO: check if the action behaviour is valid before passing it to the view
  this.viewer = actionBehaviour.viewer;

  this.isValidAction = function() {
    return validAction;
  };
}
