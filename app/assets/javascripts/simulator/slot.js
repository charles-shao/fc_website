function Slot(index, observers) {
  var self = this;

  this.id = index;

  var actionObjectName = observers.actionObserver.action.objectName;
  var jobIdentifier = observers.jobObserver.job.identifier;
  var actionBehaviour = new jobActions[jobIdentifier].actions[actionObjectName](observers);

  this.viewer = new Viewer(actionBehaviour.viewerAttr());
}
