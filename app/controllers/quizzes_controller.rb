class QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :destroy]

  # GET /quizzes
  def index
    if params.has_key?(:user_id)
      @quizzes = Quiz.where(user_id: params[:user_id])
    else
      @quizzes = Quiz.all
    end
    render json: @quizzes
  end

  # GET /quizzes/1
  def show
    render json: @quiz
  end

  # POST /quizzes
  def create
    @quiz = Quiz.new(quiz_params)

    if @quiz.save
      render json: @quiz, status: :created, location: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quizzes/1
  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quizzes/1
  def destroy
    @quiz.destroy
  end

  # GET /quizzes/mine
  def mine
    @quizzes = current_user.quizzes
    render json: @quizzes
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def quiz_params
      params.require(:quiz).permit(:title, :description)
    end
end
