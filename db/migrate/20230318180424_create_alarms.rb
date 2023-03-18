class CreateAlarms < ActiveRecord::Migration[7.0]
  def change
    create_table :alarms do |t|
      t.time :time
      t.date :date
      t.integer :team_id
      t.string :shift
      t.string :name
      t.string :type
      t.string :root_cause
      t.string :reason_uncleared

      t.timestamps
    end
  end
end
