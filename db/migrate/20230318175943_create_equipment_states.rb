class CreateEquipmentStates < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment_states do |t|
      t.time :time
      t.date :date
      t.integer :team_id
      t.string :shift
      t.string :name
      t.string :status

      t.timestamps
    end
  end
end
