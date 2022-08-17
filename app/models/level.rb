class Level < ApplicationRecord
    belongs_to :gr_level, optional: true
    belongs_to :eng_level, optional: true

end
