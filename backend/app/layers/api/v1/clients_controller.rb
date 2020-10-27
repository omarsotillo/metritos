# frozen_string_literal: true

module Api
  module V1
    class ClientsController < ApplicationController
      before_action :authenticate_api_domains_auth_user!

      def create
        render_command(::Application::Metrics::Commands::CreateClient,
                       create_params.merge(current_api_domains_auth_user: current_api_domains_auth_user))
      end

      def index
        render_command(::Application::Metrics::Commands::FetchClients,
                       current_api_domains_auth_user: current_api_domains_auth_user)
      end

      private

      def create_params
        params.permit(:name)
      end
    end
  end
end
