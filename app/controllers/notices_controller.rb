class NoticesController < ApplicationController

  authorize_resource
  skip_authorize_resource only: [:view, :show]

  before_action :require_login, except: [:view, :show]

  def index
    @notices = Notice.most_recent
  end

  def view
    @notices = Notice.most_recent.page(params[:page])
  end

  def show
    @notice = Notice.find_by(id: params[:id])
    @referrer = request.referer || root_path
  end

  def new
    @notice = current_user.notices.build
  end

  def create
    @notice = current_user.notices.build(notice_params)

    if @notice.save
      @notice.events.create(user: current_user, action: :create)
      flash[:success] = "Successfully created notice."
      redirect_to notices_path
    else
      flash.now[:danger] = @notice.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @notice = Notice.find_by(id: params[:id])
  end

  def update
    @notice = Notice.find_by(id: params[:id])

    if @notice.update_attributes(notice_params)
      flash[:success] = "Successfully updated notice."
      redirect_to notices_path
    else
      flash.now[:danger] = @notice.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @notice = Notice.find_by(id: params[:id])

    if @notice.destroy
      flash[:success] = "Successfully deleted notice."
    else
      flash[:danger] = @notice.errors.full_messages.to_sentence
    end

    redirect_to notices_path
  end

  private

    def notice_params
      params.require(:notice).permit(:title, :content, :publish)
    end

end
