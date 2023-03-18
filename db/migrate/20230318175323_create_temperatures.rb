class CreateTemperatures < ActiveRecord::Migration[7.0]
  def change
    create_table :temperatures do |t|
      t.time :time
      t.date :date
      t.string :shift
      t.integer :team_id
      t.float :ups_a
      t.float :ups_b
      t.float :mdb_a
      t.float :mdb_b
      t.float :data_hall
      t.float :battery_a
      t.float :battery_b

      t.timestamps
    end
  end
end
