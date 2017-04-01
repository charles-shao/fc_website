class RolesController < ApplicationController

  authorize_resource
  
  def index
    @roles = Role.all
  end

  def new
    @role = Role.new
  end

  def create
    @role = Role.new(role_params)

    if @role.save
      flash[:success] = "Successfully created role."
      redirect_to roles_path
    else
      flash[:danger] = @role.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @role = Role.find_by(id: params[:id])
  end

  def update
    @role = ApplicationQuestion.find_by(id: params[:id])

    if @role.update_attributes(role_params)
      flash[:success] = "Successfully updated role."
      redirect_to roles_path
    else
      flash[:danger] = @role.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

    def role_params
      params.require(:role).permit(:name)
    end

end
