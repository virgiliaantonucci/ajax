class EngLevel < ApplicationRecord
    has_many :grlevels, through: :levels
    has_many :levels

end
