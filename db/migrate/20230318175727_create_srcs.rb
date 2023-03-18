class CreateSrcs < ActiveRecord::Migration[7.0]
  def change
    create_table :srcs do |t|
      t.time :time
      t.date :date
      t.integer :team_id
      t.string :shift
      t.string :name
      t.string :note

      t.timestamps
    end
  end
end
