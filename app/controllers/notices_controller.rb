class NoticesController < ApplicationController

  def index
    @notices = Notice.ordered_by_created_at
  end

  def new
    @notice = current_user.notices.build
  end

  def create
    @notice = current_user.notices.build(notice_params)

    if @notice.save
      flash[:success] = "Successfully created notice."
      redirect_to notices_path
    else
      flash[:danger] = @notice.errors.full_messages.to_sentence
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
      flash[:danger] = @notice.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
  end

  private

    def notice_params
      params.require(:notice).permit(:title, :content, :publish)
    end

end
