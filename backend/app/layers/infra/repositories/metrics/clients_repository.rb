# frozen_string_literal: true

module Infra
  module Repositories
    module Metrics
      class ClientsRepository < Domains::Metrics::ClientsRepository
        class << self
          def save!(client)
            # Move secret to AWS-API-GATEWAY
            client.secret = SecureRandom.uuid
            client.save!
          end
        end
      end
    end
  end
end
