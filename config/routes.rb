Rails.application.routes.draw do
  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :users do
      resources :quizzes
    end
    resources :quizzes do
      resources :users
    end
    resources :quizzes do
      resources :questions
    end
    resources :questions do
      resources :answers
    end
    resources :answers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
