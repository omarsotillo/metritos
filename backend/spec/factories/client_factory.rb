# frozen_string_literal: true

FactoryBot.define do
  factory :client, class: Domains::Metrics::Client do
    association :user, factory: %i[user confirmed]
    secret { SecureRandom.uuid }
    sequence :name do |n|
      "Client #{n}"
    end
  end
end
