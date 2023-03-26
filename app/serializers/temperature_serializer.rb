class TemperatureSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :shift, :team_id, :ups_a, :ups_b, :mdb_a, :mdb_b, :data_hall, :battery_a, :battery_b, :team

  # def team_name
  #   object.team.team_name
  # end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
