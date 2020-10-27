# frozen_string_literal: true

module Infra
  module QueryObjects
    module Metrics
      class ClientsQuery < Domains::Metrics::Client
        class << self
          def all_by_user(user_id)
            where(user_id: user_id)
          end
        end
      end
    end
  end
end
