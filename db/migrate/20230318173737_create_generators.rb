class CreateGenerators < ActiveRecord::Migration[7.0]
  def change
    create_table :generators do |t|
      t.time :time
      t.date :date
      t.string :name
      t.float :runtime
      t.float :temperature
      t.float :battery_charge
      t.integer :fuel_level
      t.string :shift
      t.integer :team_id

      t.timestamps
    end
  end
end
