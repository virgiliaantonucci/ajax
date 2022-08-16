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
eng_level_1 = EngLevel.create(
phrase: "life",
walkthru: "The Greek word for life is vios or zoi. Click on the words that mean life in Greek."
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
eng_level_2 = EngLevel.create(
phrase: "be healthy",
walkthru: "Let's learn a greeting. The phrase be healthy can be translated as oule te ke mala chere, chere polla, or Hygiaine. Click the correct translations below."
)

#level 3
eng_level_3 = EngLevel.create(
phrase: "Marcus gives the rulers the child of Piso.",
walkthru: "Different parts of speech can be placed in different orders in greek. Both of these are correct translations of Marcus gives the rulers the child of Piso:
o Markos didosi tois arcousi ton tou Peisonos paida.
o Markos didosi tois arcousi ton paida tou Peisonos.
Click the correct translations below."
)

#level 1
gr_level_1 = GrLevel.create(
phrase: "vios",
walkthru: "The English word for vios is life, lifespan, or quality of life. Type out a definition of vios."
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
gr_level_2 = GrLevel.create(
phrase: "Hygiaine",
walkthru: "The English word for Hygíaine is good health or be healthy. Type out a definition of Hygiaine."
)

#level 3
gr_level_3 = GrLevel.create(
phrase: "o Markos didosi tois arcousi ton tou Peisonos paida.",
walkthru: "o Markos didosi tois arcousi ton tou Peisonos paida can be translated a couple different ways. Here are some:
Marcus gives the rulers the child of Piso.
Marcus gives the rulers Piso’s child.
Marcus gives Piso’s child to the rulers.
Type one of the translations below."
)

#level 1
eng_level_1.levels.create(
name: "Level_1",
is_completed: false 
)
gr_level_1.levels.create(
name: "Level_1",
is_completed: false 
)

#level 2
eng_level_2.levels.create(
name: "Level_2",
is_completed: false 
)
gr_level_2.levels.create(
name: "Level_2",
is_completed: false 
)

#level 3
eng_level_3.levels.create(
name: "Level_3",
is_completed: false 
)
gr_level_3.levels.create(
name: "Level_3",
is_completed: false 
)
puts "Done seeding!"