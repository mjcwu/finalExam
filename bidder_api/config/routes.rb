Rails.application.routes.draw do

  resources :auctions do
    resources :bids, only: [ :create]
  end

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions, only: [:index, :show, :create, :destroy]
      resource :sessions, only: [:create, :destroy]
      resources :users, only: [] do
        get :current, on: :collection
      end
    end
  end
end
