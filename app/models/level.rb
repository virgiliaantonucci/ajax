class Level < ApplicationRecord
    belongs_to :grlevels, optional: true
    belongs_to :englevels, optional: true

end
