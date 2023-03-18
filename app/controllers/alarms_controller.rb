class AlarmsController < ApplicationController
    def index
        alarms = Alarm.all 
        render json: alarms
    end
end
