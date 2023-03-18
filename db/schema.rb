# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_18_180424) do
  create_table "alarms", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.integer "team_id"
    t.string "shift"
    t.string "name"
    t.string "category"
    t.string "root_cause"
    t.string "reason_uncleared"
    t.string "action"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cleans", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.integer "team_id"
    t.string "shift"
    t.string "room"
    t.string "status"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cracs", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.string "shift"
    t.string "name"
    t.string "status"
    t.integer "team_id"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment_states", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.integer "team_id"
    t.string "shift"
    t.string "name"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "generators", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.string "name"
    t.float "runtime"
    t.float "temperature"
    t.float "battery_charge"
    t.integer "fuel_level"
    t.string "shift"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "srcs", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.integer "team_id"
    t.string "shift"
    t.string "name"
    t.string "note"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "temperatures", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.string "shift"
    t.integer "team_id"
    t.float "ups_a"
    t.float "ups_b"
    t.float "mdb_a"
    t.float "mdb_b"
    t.float "data_hall"
    t.float "battery_a"
    t.float "battery_b"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ups", force: :cascade do |t|
    t.time "time"
    t.date "date"
    t.string "shift"
    t.integer "team_id"
    t.string "name"
    t.float "voltage_L1L2"
    t.float "voltage_L2L3"
    t.float "voltage_L3L1"
    t.float "output_voltage_L1N"
    t.float "output_voltage_L2N"
    t.float "output_voltage_L3N"
    t.float "load_current_L1"
    t.float "load_current_L2"
    t.float "load_current_L3"
    t.integer "faulty_modules"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
