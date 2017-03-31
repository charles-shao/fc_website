# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
