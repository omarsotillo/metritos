# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class CreateClient < Mutations::Command
        required do
          string :name, min_length: 6, max_length: 64
          model :current_api_domains_auth_user, class: Domains::Auth::User
        end

        def execute
          client_repo.save!(domain_client)
          nil
        end

        private

        def domain_client
          Domains::Metrics::Client.new(
            user: current_api_domains_auth_user,
            name: name
          )
        end

        def client_repo
          @client_repo ||= Infra::Repositories::Metrics::ClientsRepository
        end
      end
    end
  end
end
