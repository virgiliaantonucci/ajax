# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


EngLevel.destroy_all
GrLevel.destroy_all
Level.destroy_all

puts "starting to seed"

#level 1
EngLevel.create!(
phrase: ["life", "lifespan"],
walkthru: "The Greek word for life is vios or zoi. Type out a Greek translation for life."
)
# EngLevel.create(
# phrase: "Hades",
# walkthru: "The Greek word for Hades is Hades or Plouton. Click on the words that mean life in Greek."
# )
# EngLevel.create(
# phrase: "pattern",
# walkthru: "The Greek word for life is protypo or schedio. Click on the words that mean pattern in Greek."
# )

#level 2
EngLevel.create!(
phrase: ["be healthy", "good health"],
walkthru: "Let's learn a greeting. The phrase be healthy can be translated as oule te ke mala chere, chere polla, or Hygiaine. Type out a possible translation."
)

#level 3
EngLevel.create!(
phrase: ["Marcus gives the rulers the child of Piso.", "Marcus gives the rulers Piso’s child.", "Marcus gives Piso’s child to the rulers."],
walkthru: "Different parts of speech can be placed in different orders in greek. Both of these are correct translations of Marcus gives the rulers the child of Piso:
o Markos didosi tois arcousi ton tou Peisonos paida.
o Markos didosi tois arcousi ton paida tou Peisonos.
Type out either one of them."
)

#level 1
GrLevel.create!(
phrase: ["vios", "zoi"],
walkthru: "The English word for vios is life, lifespan, or quality of life. Type out the English translation of vios."
)
# GrLevel.create(
# phrase: "Hades",
# walkthru: "The English word for Hades is Hades or the Underworld. Type out a definition of Hades."
# )
# GrLevel.create(
# phrase: "protypo",
# walkthru: "The English word for protypo is pattern or model. Type out a definition of protypo."
# )

#level 2
GrLevel.create!(
phrase: ["oule te ke mala chere", "chere polla", "Hygiaine"],
walkthru: "The English word for Hygíaine is good health or be healthy. Type out a definition of Hygiaine."
)

#level 3
GrLevel.create!(
phrase: ["o Markos didosi tois arcousi ton tou Peisonos paida.", "o Markos didosi tois arcousi ton paida tou Peisonos."],
walkthru: "o Markos didosi tois arcousi ton tou Peisonos paida can be translated a couple different ways. Here are some:
Marcus gives the rulers the child of Piso.
Marcus gives the rulers Piso’s child.
Marcus gives Piso’s child to the rulers.
Type one of the translations below."
)

#level 1
Level.create!(
name: "Level_1",
is_completed: false, 
eng_level_id: 1,
gr_level_id: 1
)

#level 2
Level.create!(
name: "Level_2",
is_completed: false ,
eng_level_id: 2,
gr_level_id: 2
)

#level 3
Level.create!(
name: "Level_3",
is_completed: false, 
eng_level_id: 3,
gr_level_id: 3
)
puts "Done seeding!"