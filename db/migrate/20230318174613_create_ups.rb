class CreateUps < ActiveRecord::Migration[7.0]
  def change
    create_table :ups do |t|
      t.time :time
      t.date :date
      t.string :shift
      t.integer :team_id
      t.string :ups_name
      t.float :voltage_L1L2
      t.float :voltage_L2L3
      t.float :voltage_L3L1
      t.float :output_voltage_L1N
      t.float :output_voltage_L2N
      t.float :output_voltage_L3N
      t.float :load_current_L1
      t.float :load_current_L2
      t.float :load_current_L3
      t.integer :faulty_modules

      t.timestamps
    end
  end
end
