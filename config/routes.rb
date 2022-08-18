Rails.application.routes.draw do
  resources :levels
  resources :gr_levels
  resources :eng_levels
  resources :users
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#me"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  #delete "/delete", to: "user#destroy"
  get "/levels", to: "levels#index"
  #get "/levels", to: "levels#show"
  get "/englevels", to: "eng_levels#index"
  get "/grlevels", to: "gr_levels#index"
  get "/engtogr1", to: "eng_levels#engtogr1"
end
