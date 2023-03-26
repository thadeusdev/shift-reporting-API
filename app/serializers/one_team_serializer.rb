class OneTeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :role, :alarms, :cleans, :cracs, :equipment_states, :generators, :ups, :srcs, :temperatures
end
