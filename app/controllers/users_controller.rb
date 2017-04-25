class UsersController < Clearance::UsersController

  authorize_resource
  skip_authorize_resource only: [:create]

  def index
    @active_users = User.active
    @inactive_users = User.inactive
    @rejected_users = User.rejected
    @stateless_users = User.stateless
  end

  def edit
    @user = User.find_by(id: params[:id])
    authorize! :edit, @user, id: current_user.id

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
      hook_details = DiscordWebhook.find_by(channel_name: "#fc-recruitment")

      if hook_details.present?
        webhook = Discord::Webhook.new("New user registration from #{@user.email}", hook_details)
        webhook.post
      end

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
      permitted_paramters = [:name, :email, :timezone]

      if current_user.role.admin?
        permitted_paramters.push(:current_state)
        permitted_paramters.push(user_role_attributes: [:id, :role_id])
      end

      params.require(:user).permit(*permitted_paramters)
    end

end
