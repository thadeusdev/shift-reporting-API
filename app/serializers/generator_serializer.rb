class GeneratorSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :name, :runtime, :temperature, :battery_charge, :fuel_level, :shift, :team_id, :team

  # def team_name
  #   object.team.team_name
  # end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
