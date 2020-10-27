# frozen_string_literal: true

class CreateUnitsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.belongs_to :client, type: :uuid
      t.string :kind, required: true  # TODO: Enums
      t.string :measure_names, array: true, default: [], required: true
      t.string :aggregation

      t.timestamps
    end
  end
end
