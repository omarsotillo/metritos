# frozen_string_literal: true

module Infra
  module Serializers
    module Metrics
      class UnitSerializer
        include JSONAPI::Serializer

        attributes :kind
      end
    end
  end
end
