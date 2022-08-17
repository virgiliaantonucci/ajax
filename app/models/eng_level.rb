class EngLevel < ApplicationRecord
    has_many :levels
    has_many :gr_levels, through: :levels

end
