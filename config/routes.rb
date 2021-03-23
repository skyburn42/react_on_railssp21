Rails.application.routes.draw do

#no longer for navigation, this is for api call, api routes
  namespace :api do
    resources :todos
  end
end
