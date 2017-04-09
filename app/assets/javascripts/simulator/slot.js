function Slot(index, observers) {
  var self = this;

  this.id = index;

  var objectName = observers.actionObserver.action.objectName;
  var actionBehaviour = new jobActions.actions[objectName](observers);

  this.viewer = new Viewer(observers.actionObserver.action, actionBehaviour);

  self.clear = function() {
    // self.executor = null;
  };
}
