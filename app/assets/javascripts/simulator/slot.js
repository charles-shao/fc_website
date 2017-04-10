function Slot(index, observers) {
  this.id = index;

  var validAction = true;
  var actionObjectName = observers.actionObserver.action.objectName;
  var jobIdentifier = observers.jobObserver.job.identifier;
  var actionBehaviour = new jobActions[jobIdentifier].actions[actionObjectName](observers);

  // TODO: check if the action behaviour is valid before passing it to the view
  this.viewer = actionBehaviour.viewer; //new Viewer(actionBehaviour.viewerAttr());

  this.isValidAction = function() {
    return validAction;
  };
}
