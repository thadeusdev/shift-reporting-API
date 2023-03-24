class AlarmsController < ApplicationController
    wrap_parameters format: []
    
    # GET /alarms
    def index
        alarms = Alarm.all
        render json: alarms
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

    def update 
        #find
        alarm = Alarm.find_by(id: params[:id])
        if alarm
        #update
            alarm.update(alarm_params)
            render json: alarm, status: :accepted
        else
            render json: {error: "Alarm no found"}, status: :not_found
        end
    end

    def destroy
        alarm = Alarm.find_by(id: params[:id])
        if alarm
            alarm.destroy
            head :no_content
        else
            render json: {error: "Alarm not found"}, status: :not_found
        end
    end

    private

    def alarm_params
        params.permit(:time, :date, :team_id, :shift, :name, :category, :root_cause, :reason_uncleared, :action_taken)
    end
end
