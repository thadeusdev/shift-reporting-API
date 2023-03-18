class CreateCleans < ActiveRecord::Migration[7.0]
  def change
    create_table :cleans do |t|
      t.time :time
      t.date :date
      t.integer :team_id
      t.string :shift
      t.string :room
      t.string :status
      t.string :note

      t.timestamps
    end
  end
end
