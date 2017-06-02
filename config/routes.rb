Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/registrations',
    sessions: 'users/sessions'
  }
  root to: 'pages#home'

  resources :photo_galleries
  resources :contacts
end
