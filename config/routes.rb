Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'top#index' , as: "top"
  get '/omikuji', to:'js#omikuji', as: "omikuji"
end
