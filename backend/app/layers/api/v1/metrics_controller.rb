# frozen_string_literal: true

module Api
  module V1
    class MetricsController < ApplicationController
      before_action :authenticate_api_domains_auth_user!

      def create
        render_command(::Application::Metrics::Commands::CreateMetric,
                       create_params)
      end

      private

      def create_params
        params.permit(:client_id, :client_secret, :measure_type,
                      :measure_value, :measure_name, :time)
      end
    end
  end
end
