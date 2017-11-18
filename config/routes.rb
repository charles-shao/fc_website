Rails.application.routes.draw do

  namespace :admin do
    resources :characters

    resources :jobs do
      resources :actions
    end
  end

  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, controller: "clearance/users", only: [] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

  resources :users, controller: "users", only: [:index, :edit, :update, :create]

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"

  root "root#show"

  resources :dashboard, only: [:index]
  resources :profiles, only: :none do
    collection do
      get :show
      patch :update
      put :update
    end
  end
  resources :characters do
    resources :character_jobs, only: [:create, :update, :destroy]
  end
  resources :unassigned_characters do
  end
  resources :user_applications do
    member do
      patch :approve
      put :approve
      patch :reject
      put :reject
    end
  end
  resources :application_questions
  resources :notices do
    get :view, on: :collection
  end

  resources :roles

  resources :statics do
    resources :static_progressions, only: [:index, :create, :edit, :update, :destroy]
    resources :static_characters, only: [:index, :create, :destroy]
  end

  resources :raid_contents
  resources :members, only: [:index, :show, :edit, :update]
  resources :simulations, only: [:index] do
    collection do
      get :ucob
    end 
  end
end
