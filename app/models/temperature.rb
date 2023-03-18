class Temperature < ApplicationRecord
    belongs_to :team, optional: true
end
