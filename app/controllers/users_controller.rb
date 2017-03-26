class UsersController < Clearance::UsersController

  def index
    @users = User.all
  end

  def edit
    @user = User.find_by(id: params[:id])
    @user.build_user_role if @user.role.nil?
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(user_params)
      flash[:success] = "Successfully added role to user."
      redirect_to members_path
    else
      flash[:danger] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, user_role_attributes: [:role_id])
    end

end
