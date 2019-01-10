class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]
  # GET /questions
  def index
    if params.has_key?(:quiz_id)
      @questions = Question.where(quiz_id: params[:quiz_id])
    else
      @questions = Question.all
    end
    render json: @questions
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    # if use params:[:quiz_id] will cause syntax error
    # need association with quiz so need to find the @quiz first
    @quiz = Quiz.find(params[:quiz_id])
    @question = @quiz.questions.new(question_params)
    # @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    # no need to find a quiz
    # @quiz = Quiz.find(params[:quiz_id])
    # @question = @quiz.questions.update(question_params)
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end
  # PUT /questions/1/answers/1

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:title, :timer, :quiz_id)
    end
end
