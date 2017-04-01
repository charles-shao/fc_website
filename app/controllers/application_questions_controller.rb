class ApplicationQuestionsController < ApplicationController

  authorize_resource
  
  def index
    @application_questions = ApplicationQuestion.ordered_by_rank
  end

  def new
    @application_question = ApplicationQuestion.new
  end

  def create
    @application_question = ApplicationQuestion.new(application_question_params)

    if @application_question.save
      flash[:success] = "Successfully created application question."
      redirect_to application_questions_path
    else
      flash[:danger] = @application_question.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @application_question = ApplicationQuestion.find_by(id: params[:id])
  end

  def update
    @application_question = ApplicationQuestion.find_by(id: params[:id])

    if @application_question.update_attributes(application_question_params)
      flash[:success] = "Successfully updated application question."
      redirect_to application_questions_path
    else
      flash[:danger] = @application_question.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
  end

  private

    def application_question_params
      params.require(:application_question).permit(:content, :rank, :active)
    end

end
