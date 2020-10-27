# frozen_string_literal: true

module Infra
  module Repositories
    module Metrics
      class UnitsRepository < Domains::Metrics::UnitsRepository
        class << self
          def save!(unit)
            unit.save!
          end
        end
      end
    end
  end
end
