Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :alarms, only: [:index, :show, :create]
  resources :cleans, only: [:index]
  resources :cracs, only: [:index]
  resources :equipment_states, only: [:index]
  resources :generators, only: [:index]
  resources :srcs, only: [:index]
  resources :teams, only: [:index]
  resources :temperatures, only: [:index]
  resources :ups, only: [:index]
end
