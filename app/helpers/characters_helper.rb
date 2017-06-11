module CharactersHelper

  def role_options
    options = Job.all.map(&:name)
    options << ["Flex DPS"]
    options << ["Flex Tank"]
    options << ["Flex Healer"]
    options << ["Flex"]

    options_for_select(options)
  end

end
