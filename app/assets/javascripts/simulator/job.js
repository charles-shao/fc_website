function Job(obj) {
  var self = this;

  self.id = ko.observable(obj.id);
  self.name = obj.name;

  actions = [];
  $.each(obj.actions, function(index, action) {
    actionBase = new ActionBase(action);
    action = Object.freeze(actionBase);
    actions.push(action);
  });
  self.actions = ko.observableArray(actions);
}
