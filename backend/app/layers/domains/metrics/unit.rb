# frozen_string_literal: true

module Domains
  module Metrics
    class Unit < Infra::Models::ApplicationRecord
      belongs_to :client, class_name: '::Domains::Metrics::Client'
    end
  end
end
