# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    mount_devise_token_auth_for 'Domains::Auth::User', at: 'auth'

    namespace :v1 do
      resources :clients, param: :uuid, only: %i[index create] do
        resources :units, only: %i[index create]
      end

      resources :metrics, only: %i[create]
      resources :units, only: %i[show]
    end
  end
end
