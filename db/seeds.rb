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
  Job.create(name: job[:name], role: job[:role])
end
