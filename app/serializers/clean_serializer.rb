class CleanSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :team_id, :shift, :room, :status, :note, :team

  # def team_name
  #   object.team.team_name
  # end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
