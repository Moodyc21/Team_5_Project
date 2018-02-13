Rails.application.routes.draw do

  namespace :api do
  resources :cities do
    resources :posts
  end
  resources :users do
    resources :posts do
  end
end