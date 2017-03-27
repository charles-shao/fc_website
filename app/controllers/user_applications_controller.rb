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
      hook_details = DiscordWebhook.find_by(channel_name: "#applications")

      if hook_details.present?
        webhook = Discord::Webhook.new("New FC application from #{current_user.email}", hook_details)
        webhook.post
      end

      flash[:success] = "Thanks for applying, we'll get back to you soon!"
      redirect_to dashboard_index_path
    else
      flash[:danger] = @user_application.errors.full_messages.to_sentence
      render :new
    end
  end

  private

    def user_application_answers
      params.require(:user_application).permit(:game, user_application_answers_attributes: [:content, :application_question_id])
    end

end
