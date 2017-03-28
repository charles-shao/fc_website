module StaticMembersHelper

  def member_options
    options_from_collection_for_select(@available_members, :id, :friendly_name)
  end

  def position_options
    options = [
      "Lead",
      "Member"
    ]

    options_for_select(options)
  end

end
