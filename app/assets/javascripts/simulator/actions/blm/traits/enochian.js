blm.traits.Enochian = function() {
  var refreshStack = 0;
  var valuesAtStack = [
    {
      name: "Enochian",
      duration: 30.0,
      dmgMultiplier: 1.05,
      refreshable: true,
      imagePath: simulation.trait_images.blm.enochian
    },
    {
      name: "Enochian",
      duration: 25.0,
      dmgMultiplier: 1.05,
      refreshable: true,
      imagePath: simulation.trait_images.blm.enochian
    },
    {
      name: "Enochian",
      duration: 20.0,
      dmgMultiplier: 1.05,
      refreshable: true,
      imagePath: simulation.trait_images.blm.enochian
    },
    {
      name: "Enochian",
      duration: 15.0,
      dmgMultiplier: 1.05,
      refreshable: false,
      imagePath: simulation.trait_images.blm.enochian
    }
  ]

  this.attributes = function() {
    return valuesAtStack[refreshStack];
  }

}
