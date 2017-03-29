class StaticMembersController < ApplicationController

  before_action :load_static_members

  def index
    @static_members = @static.static_members.includes(:user)
  end

  def create
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
    @static_members = @static.static_members.find_by(id: params[:id])

    if @static_members.destroy
      flash[:success] = "Successfully removed static member."
    else
      flash[:danger] = @static_members.errors.full_messages.to_sentence
    end

    redirect_to static_static_members_path(@static)
  end

  private

    def static_member_params
      params.require(:static_member).permit(:user_id, :position)
    end

    def load_static_members
      @static = Static.find_by(id: params[:static_id])
      @available_members = User.where.not(id: @static.members.pluck(:id))
    end

end
