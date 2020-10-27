# frozen_string_literal: true

module Domains
  module Auth
    class User < Infra::Models::ApplicationRecord
      extend Devise::Models
      # Include default devise modules. Others available are:
      # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
      devise :database_authenticatable, :registerable,
             :recoverable, :rememberable, :validatable
      include DeviseTokenAuth::Concerns::User
    end
  end
end
