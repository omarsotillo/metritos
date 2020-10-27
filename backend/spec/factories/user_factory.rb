# frozen_string_literal: true

FactoryBot.define do
  sequence :email do |n|
    "user#{n}@example.com"
  end
  sequence :password do |n|
    "password#{n}"
  end

  factory :user, class: Domains::Auth::User do
    email
    password
    uid { SecureRandom.uuid }
    sequence :name do |n|
      "user#{n}"
    end
    trait :confirmed do
      confirmed_at { Time.zone.now }
    end
  end
end
