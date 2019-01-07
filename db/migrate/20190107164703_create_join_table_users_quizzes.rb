class CreateJoinTableUsersQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :quizzes do |t|
      # t.index [:user_id, :quiz_id]
      # t.index [:quiz_id, :user_id]
    end
  end
end
