# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Roles
roles = [
  { name: "Admin", assignable: false },
  { name: "Static Lead", assignable: true },
  { name: "Member", assignable: true },
  { name: "Guest", assignable: true }
]

roles.each do |role|
  Role.create(role)
end

# Jobs
jobs = [
  { name: "Warrior", role: "Tank" },
  { name: "Paladin", role: "Tank" },
  { name: "Monk", role: "DPS" },
  { name: "Dragoon", role: "DPS" },
  { name: "Bard", role: "DPS" },
  { name: "White Mage", role: "Healer" },
  { name: "Black Mage", role: "DPS" },
  { name: "Summoner", role: "DPS" },
  { name: "Scholar", role: "Healer" },
  { name: "Ninja", role: "DPS" },
  { name: "Dark Knight", role: "Tank" },
  { name: "Astrologian", role: "Healer" },
  { name: "Machinist", role: "DPS" },
  { name: "Red Mage", role: "DPS" },
  { name: "Samurai", role: "DPS" }
]

jobs.each do |job|
  Job.create(job)
end

# Actions
actions = [
  { id: 1, name: "Blizzard", potency: 180, cost: 156, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_path: 'blizzard.png'},
  { id: 2, name: "Fire", potency: 180, cost: 156, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_path: 'fire.png'}
]

job = Job.find_by(name: "Black Mage")
actions.each do |action|
  job.actions.create(action)
end

# Raid content
raids = [
  { name: "Alexander - The Fist of the Father (Savage)", patch: "3.05", released_at: "2015-03-27", image_file: "" },
  { name: "Alexander - The Cuff of the Father (Savage)", patch: "3.05", released_at: "2015-03-27", image_file: "" },
  { name: "Alexander - The Arm of the Father (Savage)", patch: "3.05", released_at: "2015-03-27", image_file: "" },
  { name: "Alexander - The Burden of the Father (Savage)", patch: "3.05", released_at: "2015-03-27", image_file: "" },
  { name: "Alexander - The Fist of the Son (Savage)", patch: "3.2", released_at: "2016-02-23", image_file: "" },
  { name: "Alexander - The Cuff of the Son (Savage)", patch: "3.2", released_at: "2016-02-23", image_file: "" },
  { name: "Alexander - The Arm of the Son (Savage)", patch: "3.2", released_at: "2016-02-23", image_file: "" },
  { name: "Alexander - The Burden of the Son (Savage)", patch: "3.2", released_at: "2016-02-23", image_file: "" },
  { name: "Alexander - The Eyes of the Creator (Savage)", patch: "3.4", released_at: "2016-09-27", image_file: "alexander-09-savage.jpg" },
  { name: "Alexander - The Breath of the Creator (Savage)", patch: "3.4", released_at: "2016-09-27", image_file: "alexander-10-savage.jpg" },
  { name: "Alexander - The Heart of the Creator (Savage)", patch: "3.4", released_at: "2016-09-27", image_file: "alexander-11-savage.jpg" },
  { name: "Alexander - The Soul of the Creator (Savage)", patch: "3.4", released_at: "2016-09-27", image_file: "alexander-15-savage.jpg" },
]

raids.each do |raid|
  RaidContent.create(raid)
end
