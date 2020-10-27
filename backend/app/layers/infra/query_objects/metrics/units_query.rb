# frozen_string_literal: true

module Infra
  module QueryObjects
    module Metrics
      class UnitsQuery < Domains::Metrics::Unit
        class << self
          def all_by_client(client_id)
            where(client_id: client_id)
          end
        end
      end
    end
  end
end
