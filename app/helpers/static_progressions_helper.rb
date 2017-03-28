module StaticProgressionsHelper

  def progression_options
    options = RaidContent.all - @static.raid_contents
    options_from_collection_for_select(options, :id, :name)
  end

end
