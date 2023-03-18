class CreateTemperatures < ActiveRecord::Migration[7.0]
  def change
    create_table :temperatures do |t|
      t.time :time
      t.date :date
      t.string :shift
      t.integer :team_id
      t.integer :ups_a
      t.integer :ups_b
      t.integer :mdb_a
      t.integer :mdb_b
      t.integer :data_hall
      t.integer :battery_a
      t.integer :battery_b

      t.timestamps
    end
  end
end
