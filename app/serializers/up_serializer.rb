class UpSerializer < ActiveModel::Serializer
  attributes :id, :formatted_time, :date, :shift, :team_name, :ups_name, :voltage_L1L2, :voltage_L2L3, :voltage_L3L1, :output_voltage_L1N, :output_voltage_L2N, :output_voltage_L3N, :load_current_L1, :load_current_L2, :load_current_L3, :faulty_modules, :team

  def team_name
    object.team.team_name
  end

  def formatted_time
    # format the time using strftime
    object.time.strftime("%I:%M%p")
  end
end
