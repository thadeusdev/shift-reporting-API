class SrcSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :team_name, :shift, :name, :note, :status

  def team_name
    object.team.team_name
  end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
