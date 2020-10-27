# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class FetchClients < Mutations::Command
        # TODO: Move to DTO

        required do
          model :current_api_domains_auth_user, class: Domains::Auth::User
        end

        def execute
          instances = clients_query.all_by_user(current_api_domains_auth_user.id)
          clients_serializer.new(instances)
        end

        private

        def clients_query
          @clients_query ||= Infra::QueryObjects::Metrics::ClientsQuery
        end

        def clients_serializer
          @clients_serializer ||= Infra::Serializers::Metrics::ClientSerializer
        end
      end
    end
  end
end
