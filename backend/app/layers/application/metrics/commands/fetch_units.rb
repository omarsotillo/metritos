# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class FetchUnits < Mutations::Command
        required do
          string :client_uuid
          model :current_api_domains_auth_user, class: Domains::Auth::User
        end

        def execute
          instances = units_query.all_by_client(client_uuid)

          units_serializer.new(instances)
        end

        private

        def units_query
          @units_query ||= Infra::QueryObjects::Metrics::UnitsQuery
        end

        def units_serializer
          @units_serializer ||= Infra::Serializers::Metrics::UnitSerializer
        end
      end
    end
  end
end
