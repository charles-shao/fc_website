function Slot(index, observers) {
  var self = this;

  self.id = index;
  executor = new Executor(observers);

  self.viewer = new Viewer(executor);

  self.clear = function() {
    self.executor = null;
  };
}
