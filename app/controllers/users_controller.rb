class UsersController < Clearance::UsersController

  authorize_resource

  def edit
    @user = User.find_by(id: params[:id])
    @user.build_user_role if @user.role.nil?
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(member_params)
      flash[:success] = "Successfully updated details."
      redirect_to members_path
    else
      flash[:danger] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

    def member_params
      params.require(:user).permit(:name, :email, :timezone, user_role_attributes: [:role_id])
    end

end
