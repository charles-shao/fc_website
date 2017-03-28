class StaticMembersController < ApplicationController

  def index
    @static = Static.find_by(id: params[:static_id])
    @static_members = @static.static_members.includes(:user)
  end

  def create
    @static = Static.find_by(id: params[:static_id])
    static_member = @static.static_members.build(static_member_params)

    if static_member.save
      flash[:success] = "Successfully filled position."
    else
      flash[:danger] = static_user.errors.full_messages.to_sentence
    end

    @static_members = @static.static_members
    redirect_to static_static_members_path(@static)
  end

  def destroy
  end

  private

    def static_member_params
      params.require(:static_member).permit(:user_id, :position)
    end

end
