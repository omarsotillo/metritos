# frozen_string_literal: true

class CreateMetricsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :metrics do |t|
      t.string :measure_name
      t.string :measure_type # TODO: Enums
      t.string :measure_value
      t.string :client_id
      t.timestamp :time

      t.timestamps
    end
  end
end
