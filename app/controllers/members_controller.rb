class MembersController < ApplicationController

  def index
    @users = User.all
  end

  private

    def member_params
      params.require(:user).permit(:name, :email, :timezone, user_role_attributes: [:role_id])
    end

end
