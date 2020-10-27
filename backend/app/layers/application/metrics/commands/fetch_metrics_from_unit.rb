# frozen_string_literal: true

module Application
  module Metrics
    module Commands
      class FetchMetricsFromUnit < Mutations::Command
        required do
          string :id
        end

        optional do
          integer :from
          integer :to
          string :interval, in: ['1 day', '5 minutes', '1 week']
        end

        def execute
          unit = units_query.find(id)
          query_name = query_strategy(unit)
          metrics_query.send(query_name, unit.client_id, '1 day')
          # TODO: Serializer Strategy JsonApi based on kind + aggregation
        end

        private

        def units_query
          @units_query ||= Infra::QueryObjects::Metrics::UnitsQuery
        end

        def metrics_query
          @metrics_query ||= Infra::QueryObjects::Metrics::MetricsQuery
        end

        def query_strategy(unit)
          # TODO: Move to service
          return :time_bucket if unit.kind == 'calendar'

          raise "Nothing yet implemented for kind: #{unit.kind}"
        end
      end
    end
  end
end
