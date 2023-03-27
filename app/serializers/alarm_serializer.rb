class AlarmSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :team_id, :shift, :name, :category, :root_cause, :reason_uncleared, :action_taken, :team, :team_name

  def team_name
    object.team.team_name
  end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
