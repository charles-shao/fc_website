class Admin::ActionsController < AdminController

  before_action :load_job

  def edit
    @action = @job.actions.find_by(id: params[:id])
  end

  def update

  end

  def destroy
    @action = @job.actions.find_by(id: params[:id])
    @action.destroy
    redirect_to edit_admin_job_path(@job)
  end

  private

    def action_params
      params.require(:action).permit!
    end

    def load_job
      @job = Job.find_by(id: params[:job_id])
    end

end
