# frozen_string_literal: true

module Domains
  module Metrics
    class Client < Infra::Models::ApplicationRecord
      # Should not be here since this aggregate_root belongs to another domain. Just refer to id
      belongs_to :user, class_name: '::Domains::Auth::User'
      has_many :units
    end
  end
end
