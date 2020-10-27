# frozen_string_literal: true

class CreateClientsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :clients, id: :uuid do |t|
      t.belongs_to :user
      t.string :secret
      t.string :name

      t.timestamps
    end
  end
end
