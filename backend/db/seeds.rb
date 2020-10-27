# frozen_string_literal: true

# TODO: Use repo instead
user = Domains::Auth::User.create!(email: 'demo@example.com', password: 'demo1234', confirmed_at: Time.zone.now)

client = Domains::Metrics::Client.create!(name: 'Client 1', user_id: user.id)

measure_name = 'contribution'
Domains::Metrics::Unit.create!(client_id: client.id, kind: 'calendar', measure_names: [measure_name])

metrics = []
13.times do |i|
  metrics << Domains::Metrics::Metric.new(
    client_id: client.id,
    measure_name: measure_name,
    measure_type: 'integer',
    measure_value: i,
    time: Time.zone.yesterday
  )
end
12.times do  |i|
  metrics << Domains::Metrics::Metric.new(
    client_id: client.id,
    measure_name: measure_name,
    measure_type: 'integer',
    measure_value: i,
    time: i.week.ago
  )
end
12.times do  |i|
  metrics << Domains::Metrics::Metric.new(
    client_id: client.id,
    measure_name: measure_name,
    measure_type: 'integer',
    measure_value: i,
    time: i.months.ago
  )
end
10.times do  |i|
  metrics << Domains::Metrics::Metric.new(
    client_id: client.id,
    measure_name: measure_name,
    measure_type: 'integer',
    measure_value: i,
    time: i.months.ago
  )
end

Domains::Metrics::Metric.import metrics
