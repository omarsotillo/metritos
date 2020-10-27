# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class CreateUnit < Mutations::Command
        required do
          string :client_uuid
          string :kind, in: %w[calendar line]
          array :measure_names, class: String
          model :current_api_domains_auth_user, class: Domains::Auth::User
        end

        optional do
          string :aggregation
        end

        def execute
          units_repo.save!(domain_unit)
          nil
        end

        private

        def domain_unit
          Domains::Metrics::Unit.new(
            client_id: client_uuid,
            kind: kind,
            measure_names: measure_names,
            aggregation: aggregation
          )
        end

        def units_repo
          @units_repo ||= Infra::Repositories::Metrics::UnitsRepository
        end
      end
    end
  end
end
