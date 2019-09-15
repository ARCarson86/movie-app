Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "application#index"

  namespace :api, defaults: { format: 'json'} do
	  resources :movielists do
	    resources :movies
	  end
	end

	get '*path', to: 'application#index'
end
