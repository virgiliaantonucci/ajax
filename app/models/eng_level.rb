class EngLevel < ApplicationRecord
    has_many :levels
    has_many :grlevels, through: :levels

end
