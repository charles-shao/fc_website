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
cross_class = [
  { name: "Raging Strikes", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 20, cooldown: 180, category: 'dmg_buff', modifier: 1.2, image_name: 'raging_strikes.png'}
];

actions = [
  # THM specific spells
  { name: "Blizzard", potency: 180, cost: 156, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'blizzard.png', object_name: 'Blizzard'},
  { name: "Fire", potency: 180, cost: 156, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'fire.png', object_name: 'Fire'},
  { name: "Transpose", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 0, cooldown: 12, category: 'alter', modifier: 0, image_name: 'transpose.png', object_name: 'Transpose'},
  { name: "Thunder", potency: 30, cost: 0, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'thunder.png', object_name: 'Thunder'},
  { name: "Surecast", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 10, cooldown: 30, category: 'alter', modifier: 0, image_name: 'surecast.png', object_name: 'Surecast'},
  { name: "Sleep", potency: 0, cost: 0, resource: nil, cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'crowd_control', modifier: 0, image_name: 'sleep.png', object_name: 'Sleep'},
  { name: "Blizzard II", potency: 50, cost: 0, resource: 'mp', cast_time: 2.0, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'blizzard_ii.png', object_name: 'Blizzard2'},
  { name: "Scathe", potency: 100, cost: 0, resource: 'mp', cast_time: 0, animation_lock: 0.75, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'scathe.png'},
  { name: "Fire II", potency: 100, cost: 0, resource: 'mp', cast_time: 3.0, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'fire_ii.png'},
  { name: "Thunder II", potency: 50, cost: 0, resource: 'mp', cast_time: 3, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'thunder_ii.png'},
  { name: "Swiftcast", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 10, cooldown: 60, category: 'alter', modifier: 0, image_name: 'swiftcast.png'},
  { name: "Manaward", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 20, cooldown: 120, category: 'shield', modifier: 0, image_name: 'manaward.png'},
  { name: "Fire III", potency: 240, cost: 0, resource: 'mp', cast_time: 3.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'fire_iii.png'},
  { name: "Blizzard III", potency: 240, cost: 0, resource: 'mp', cast_time: 3.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'blizzard_iii.png'},
  { name: "Lethargy", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 0, cooldown: 30, category: 'crowd_control', modifier: 0, image_name: 'lethargy.png'},
  { name: "Thunder III", potency: 70, cost: 0, resource: 'mp', cast_time: 3.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'thunder_iii.png'},
  { name: "Aetherial Manipulation", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 0, cooldown: 60, category: 'alter', modifier: 0, image_name: 'aetherial_manipulation.png'},
  # BLM specific spells
  { name: "Convert", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 0, cooldown: 180, category: 'alter', modifier: 0, image_name: 'convert.png'},
  { name: "Freeze", potency: 100, cost: 0, resource: 'mp', cast_time: 2.5, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'freeze.png'},
  { name: "Apocatastasis", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 12, cooldown: 180, category: 'spell', modifier: 0, image_name: 'apocatastasis.png'},
  { name: "Manawall", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 20, cooldown: 120, category: 'spell', modifier: 0, image_name: 'manawall.png'},
  { name: "Flare", potency: 260, cost: 0, resource: 'mp', cast_time: 4, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'flare.png'},
  { name: "Ley Lines", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 30, cooldown: 90, category: 'alter', modifier: 1.15, image_name: 'ley_lines.png'},
  { name: "Sharpcast", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 10, cooldown: 60, category: 'alter', modifier: 0, image_name: 'sharpcast.png'},
  { name: "Enochian", potency: 0, cost: 0, resource: nil, cast_time: 0, animation_lock: 0.75, duration: 30, cooldown: 60, category: 'alter', modifier: 0.05, image_name: 'enochian.png'},
  { name: "Blizzard IV", potency: 280, cost: 0, resource: 'mp', cast_time: 3.0, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'blizzard_iv.png'},
  { name: "Fire IV", potency: 280, cost: 0, resource: 'mp', cast_time: 3.0, animation_lock: 0, duration: 0, cooldown: 0, category: 'spell', modifier: 0, image_name: 'fire_iv.png'},
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
