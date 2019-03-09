Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  # IMPORTANT
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'pages#index', via: :all
end
