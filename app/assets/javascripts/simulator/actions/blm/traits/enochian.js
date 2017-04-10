blm.traits.Enochian = function() {
  var refreshStack = 0;
  var valuesAtStack = [
    { name: "Enochian", duration: 30, dmgMultiplier: 1.05, refreshable: true },
    { name: "Enochian", duration: 25, dmgMultiplier: 1.05, refreshable: true },
    { name: "Enochian", duration: 20, dmgMultiplier: 1.05, refreshable: true },
    { name: "Enochian", duration: 15, dmgMultiplier: 1.05, refreshable: false }
  ]

  this.attributes = function() {
    return valuesAtStack[currentStack()];
  }
  
  var currentStack = function() {
    return stack;
  }

}
