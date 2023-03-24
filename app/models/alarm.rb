class Alarm < ApplicationRecord
    belongs_to :team, optional: true
end
