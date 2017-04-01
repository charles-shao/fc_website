Rails.application.routes.draw do

  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, controller: "clearance/users", only: [:create] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

  resources :users, controller: "users"

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "users#new", as: "sign_up"

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
  resources :user_applications
  resources :application_questions
  resources :notices do
    get :view, on: :collection
  end

  resources :roles

  resources :statics do
    resources :static_progressions, only: [:index, :create, :destroy]
    resources :static_members, only: [:index, :create, :destroy]
  end

  resources :raid_contents
  resources :members, only: [:index, :show, :edit, :update]
end
