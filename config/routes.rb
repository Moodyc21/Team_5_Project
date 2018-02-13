Rails.application.routes.draw do
  namespace :api do
    resources :cities do
      resources :posts
    end
  end
end