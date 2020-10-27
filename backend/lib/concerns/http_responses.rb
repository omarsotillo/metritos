# frozen_string_literal: true

module Concerns
  module HttpResponses
    extend ActiveSupport::Concern

    CONTENT_TYPE = 'application/json'

    def render_command(command, args)
      outcome = command.send(:run, args)
      if outcome.success?
        render_200(outcome.result)
      else
        render_422(outcome.errors)
      end
    end

    def render_200(args)
      render_response(args, 200)
    end

    def render_422(args)
      render_response({ errors: args }, 422)
    end

    def render_404
      render_response([{ not_found: 'record_not_found' }], 404)
    end

    def render_403
      head 403
    end

    def render_401
      head 401
    end

    def render_response(args, status)
      render json: args, status: status,
             content_type: CONTENT_TYPE
    end
  end
end
