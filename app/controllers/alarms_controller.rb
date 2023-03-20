class AlarmsController < ApplicationController
    wrap_parameters format: []
    
    # GET /alarms
    def index
        render json: Alarm.all, except: [:created_at, :updated_at], status: :ok
    end

    # GET /alarms/:id
    def show
        alarm = Alarm.find_by(id: params[:id])
        if alarm
            render json: alarm, status: :ok
        else
            render json: {error: "Alarm not found"}, status: :not_found
        end
    end

    def create
        alarm = Alarm.create(alarm_params)
        render json: alarm, status: :created
    end

    private

    def alarm_params
        params.permit(:time, :date, :team_id, :shift, :name, :category, :root_cause, :reason_uncleared, :action_taken)
    end
end
