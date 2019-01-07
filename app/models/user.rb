class User < ApplicationRecord
  has_and_belongs_to_many :quizzes

  has_secure_password
  validates :username, presence: true
  def to_token_payload
    {
      sub: id,
      username: username
    }
  end
  
end
