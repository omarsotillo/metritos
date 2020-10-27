# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins Rails.application.config.allowed_client_hosts

    resource '*',
             headers: :any,
             methods: %i[get post options delete put],
             expose: %w[access-token expiry token-type uid client]
  end
end
