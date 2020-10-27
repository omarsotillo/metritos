# frozen_string_literal: true

FactoryBot.define do
  factory :unit, class: Domains::Metrics::Unit do
    association :client, factory: [:client]
  end
end
