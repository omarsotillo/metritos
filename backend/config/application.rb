# frozen_string_literal: true

require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'action_mailer/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'active_storage/engine'

Bundler.require(*Rails.groups)

module Proxyland
  class Application < Rails::Application
    config.load_defaults 6.0

    config.api_only = true
    config.eager_load_paths += Dir[Rails.root.join('lib')]

    config.time_zone = 'Berlin'
    config.active_record.schema_format = :ruby

    config.secret_key_base = EnvironmentConfig.fetch_string('SECRET_KEY_BASE')

    config.allowed_client_hosts = EnvironmentConfig.fetch_string_list('ALLOWED_CLIENT_HOSTS')
    config.default_client_host = EnvironmentConfig.fetch_string('DEFAULT_CLIENT_HOST')
    config.default_backend_host = EnvironmentConfig.fetch_string('DEFAULT_BACKEND_HOST')

    config.action_mailer.smtp_settings = EnvironmentConfig.load(strip_prefix: 'SMTP_') do |c|
      c.string  'SMTP_USER_NAME'
      c.string  'SMTP_PASSWORD'
      c.string  'SMTP_ADDRESS'
      c.string  'SMTP_DOMAIN'
      c.symbol  'SMTP_AUTHENTICATION'
      c.integer 'SMTP_PORT'
    end.to_symbol_hash
  end
end
