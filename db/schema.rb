# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120621130732) do

  create_table "entries", :force => true do |t|
    t.string   "word"
    t.string   "meaning"
    t.string   "instructions_file_name"
    t.string   "instructions_content_type"
    t.integer  "instructions_file_size"
    t.datetime "instructions_updated_at"
  end

end
