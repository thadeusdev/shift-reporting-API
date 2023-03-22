Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :alarms, only: [:index, :show, :create, :update, :destroy]
  resources :cleans, only: [:index, :show, :create, :update, :destroy]
  resources :cracs, only: [:index, :show, :create, :update, :destroy]
  resources :equipment_states, only: [:index, :show, :create, :update, :destroy]
  resources :generators, only: [:index, :show, :create, :update, :destroy]
  resources :srcs, only: [:index, :show, :create, :update, :destroy]
  resources :teams, only: [:index, :show, :create, :update, :destroy]
  resources :temperatures, only: [:index, :show, :create, :update, :destroy]
  resources :ups, only: [:index, :show, :create, :update, :destroy]
end
