class Team < ApplicationRecord
    has_many :generators
    has_many :ups
    has_many :temperatures
    has_many :cracs
    has_many :srcs
    has_many :equipment_states
    has_many :cleans
    has_many :alarms

    def admin?
        admin
    end
end
