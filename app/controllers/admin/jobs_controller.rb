class Admin::JobsController < AdminController

  def index
    @jobs = Job.all
  end

  def edit
    @job = Job.find_by(id: params[:id])
  end

end
