class Clean < ApplicationRecord
    belongs_to :team, optional: true
end
