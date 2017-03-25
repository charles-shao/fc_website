class UserApplicationsController < ApplicationController

  def new
    @user_application = current_user.user_applications.build(game: "FFXIV")

    ApplicationQuestion.active.ordered_by_rank.each do |question|
      @user_application.user_application_answers.build(application_question: question)
    end
  end

  def create
    @user_application = current_user.user_applications.build(user_application_answers)

    if @user_application.save
      flash[:notice] = "Thanks for applying, we'll get back to you soon!"
      redirect_to root_path
    else
      flash[:error] = @user_application.errors.full_messages.to_sentence
      render :new
    end
  end

  private

    def user_application_answers
      params.require(:user_application).permit(:game, user_application_answers_attributes: [:content, :application_question_id])
    end

end
