class ProfilesController < ApplicationController

  def show
    @characters = current_user.characters
  end

  def update
    if current_user.update_attributes(user_params)
      flash[:success] = "Successfully updated your details."
      redirect_to profiles_path
    else
      flash.now[:danger] = current_user.errors.full_messages.to_sentence
      render :show
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :timezone)
    end

end
