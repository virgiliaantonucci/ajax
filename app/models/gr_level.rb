class GrLevel < ApplicationRecord
    has_many :levels
    has_many :eng_levels, through: :levels

end
