function Job(obj) {
  var self = this;

  self.id = ko.observable(obj.id);
  self.name = obj.name;

  actions = [];
  $.each(obj.actions, function(index, action) {
    actions.push(new Action(action));
  });
  self.actions = ko.observableArray(actions);
}
