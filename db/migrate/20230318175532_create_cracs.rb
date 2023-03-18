class CreateCracs < ActiveRecord::Migration[7.0]
  def change
    create_table :cracs do |t|
      t.time :time
      t.date :date
      t.string :shift
      t.string :name
      t.string :status
      t.integer :team_id
      t.string :note

      t.timestamps
    end
  end
end
