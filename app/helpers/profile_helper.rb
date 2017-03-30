module ProfileHelper

  def job_options
    options_from_collection_for_select(Job.all, :id, :name)
  end

end
