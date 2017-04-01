module StaticCharactersHelper

  def character_options
    options_from_collection_for_select(@available_characters, :id, :name)
  end

  def position_options
    options = [
      "Staic Lead",
      "Member"
    ]

    options_for_select(options)
  end

end
