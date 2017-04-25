class UsersController < Clearance::UsersController

  def index
    @active_users = User.active
    @inactive_users = User.inactive
    @rejected_users = User.rejected
    @stateless_users = User.stateless
  end

  def edit
    @user = User.find_by(id: params[:id])
    @user.build_user_role if @user.role.nil?
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(updateable_params)
      flash[:success] = "Successfully updated details."
      redirect_to users_path
    else
      flash[:danger] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  def create
    @user = user_from_params

    if @user.save
      sign_in @user
      redirect_back_or url_after_create
    else
      render template: "users/new"
    end
  end

  private

    def user_from_params
      user_params = params[:user] || Hash.new
      email = user_params.delete(:email)
      password = user_params.delete(:password)
      name = user_params.delete(:name)

      Clearance.configuration.user_model.new(user_params).tap do |user|
        user.email = email
        user.password = password
        user.name = name
      end
    end

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end

    def updateable_params
      params.require(:user).permit(:name, :email, :timezone, :current_state,
        user_role_attributes: [:role_id])
    end

end
