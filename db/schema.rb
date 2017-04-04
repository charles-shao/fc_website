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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170404221223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.string   "name"
    t.integer  "potency"
    t.integer  "cost"
    t.string   "resource"
    t.decimal  "cast_time"
    t.decimal  "animation_lock"
    t.integer  "duration"
    t.integer  "cooldown"
    t.string   "category"
    t.decimal  "modifier"
    t.string   "image_path"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "application_questions", force: :cascade do |t|
    t.string   "content"
    t.integer  "rank"
    t.boolean  "required"
    t.boolean  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_jobs", force: :cascade do |t|
    t.integer  "character_id"
    t.integer  "job_id"
    t.integer  "level"
    t.integer  "item_level"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "characters", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "discord_webhooks", force: :cascade do |t|
    t.string   "channel_name"
    t.string   "webhook_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "sourceable_id"
    t.string   "sourceable_type"
    t.string   "action"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "job_actions", force: :cascade do |t|
    t.integer  "job_id"
    t.integer  "action_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "name"
    t.string   "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notices", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.string   "content"
    t.boolean  "publish"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "raid_contents", force: :cascade do |t|
    t.string   "name"
    t.string   "patch"
    t.datetime "released_at"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "image_file"
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.boolean  "assignable"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "static_characters", force: :cascade do |t|
    t.integer  "static_id"
    t.integer  "character_id"
    t.string   "position"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "static_progressions", force: :cascade do |t|
    t.integer  "static_id"
    t.integer  "raid_content_id"
    t.datetime "cleared_at"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "statics", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_application_answers", force: :cascade do |t|
    t.integer  "user_application_id"
    t.integer  "application_question_id"
    t.string   "content"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "user_applications", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "game"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "current_state"
  end

  create_table "user_roles", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "email",                          null: false
    t.string   "encrypted_password", limit: 128, null: false
    t.string   "confirmation_token", limit: 128
    t.string   "remember_token",     limit: 128, null: false
    t.string   "name"
    t.string   "timezone"
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["remember_token"], name: "index_users_on_remember_token", using: :btree
  end

end
