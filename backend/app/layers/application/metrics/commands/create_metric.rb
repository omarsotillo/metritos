# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class CreateMetric < Mutations::Command
        required do
          string :measure_name
          string :measure_value
          string :measure_type
          string :client_id
          string :client_secret
          integer :time
        end

        def execute
          # Validate client_id and client_secret -> AWS gateway
          metric_repo.save!(domain_metric)
          nil
        end

        private

        def domain_metric
          Domains::Metrics::Metric.new(
            client_id: client_id,
            measure_name: measure_name,
            measure_type: measure_type,
            measure_value: measure_value,
            time: Time.at(time).to_datetime
          )
        end

        def metric_repo
          @metric_repo ||= Infra::Repositories::Metrics::MetricsRepository
        end
      end
    end
  end
end
