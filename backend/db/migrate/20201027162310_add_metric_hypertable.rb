# frozen_string_literal: true

class AddMetricHypertable < ActiveRecord::Migration[6.0]
  def change
    remove_column :metrics, :id
    execute "SELECT create_hypertable('metrics', 'time');"
  end
end
