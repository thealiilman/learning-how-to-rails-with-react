Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: %i[index create]
  end

  # IMPORTANT
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'pages#index', via: :all
end
