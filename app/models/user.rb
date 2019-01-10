class User < ApplicationRecord
  has_and_belongs_to_many :quizzes

  has_secure_password
  validates :email,
  presence: true,
  uniqueness: {case_sensitive: false}

  def to_token_payload
    {
      sub: id,
      username: username,
      email: email
    }
  end

end
