module StaticMembersHelper

  def member_options
    # TODO: filter user list to those who have successfully applied
    options_from_collection_for_select(User.all, :id, :friendly_name)
  end

  def position_options
    options = [
      "Lead",
      "Member"
    ]

    options_for_select(options)
  end

end
