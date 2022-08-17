class GrLevel < ApplicationRecord
    has_many :levels
    has_many :englevels, through: :levels

end
