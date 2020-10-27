# frozen_string_literal: true

module Infra
  module QueryObjects
    module Metrics
      class MetricsQuery < Domains::Metrics::Client
        class << self
          def time_bucket(client_id, interval = '1 day')
            sql = "SELECT time_bucket('#{interval}', time) AS interval, avg(measure_value::integer)
              FROM metrics
              WHERE client_id='#{client_id}'
              GROUP BY interval
              ORDER BY interval DESC;
            "
            ActiveRecord::Base.connection.execute(sql).values.each_with_object([]) do |values, memo|
              memo << {
                day: values[0].strftime('%Y-%m-%d'),
                value: values[1].to_i
              }
            end
          end
        end
      end
    end
  end
end
