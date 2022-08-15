class GrLevel < ApplicationRecord
    has_many :englevels, through: :levels
    has_many :levels

end
