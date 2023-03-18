class EquipmentState < ApplicationRecord
    belongs_to :team, optional: true
end
