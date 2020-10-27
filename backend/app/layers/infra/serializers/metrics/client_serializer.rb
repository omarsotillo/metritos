# frozen_string_literal: true

module Infra
  module Serializers
    module Metrics
      class ClientSerializer
        include JSONAPI::Serializer

        attributes :name, :id, :secret # TODO: Remove client secret here
      end
    end
  end
end
