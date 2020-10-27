# frozen_string_literal: true

module Api
  module V1
    class UnitsController < ApplicationController
      before_action :authenticate_api_domains_auth_user!

      def create
        render_command(::Application::Metrics::Commands::CreateUnit,
                       create_params.merge(current_api_domains_auth_user: current_api_domains_auth_user))
      end

      def index
        render_command(::Application::Metrics::Commands::FetchUnits,
                       index_params.merge(current_api_domains_auth_user: current_api_domains_auth_user))
      end

      def show
        render_command(::Application::Metrics::Commands::FetchMetricsFromUnit,
                       show_param)
      end

      private

      def create_params
        params.permit(:client_uuid, :kind, :aggregation, measure_names: [])
      end

      def index_params
        params.permit(:client_uuid)
      end

      def show_param
        params.permit(:id)
      end
    end
  end
end
