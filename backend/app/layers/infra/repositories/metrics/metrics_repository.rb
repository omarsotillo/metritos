# frozen_string_literal: true

module Infra
  module Repositories
    module Metrics
      class MetricsRepository < Domains::Metrics::MetricsRepository
        class << self
          def save!(metric)
            metric.save!
          end
        end
      end
    end
  end
end
