class TemperaturesController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Temperature.all
    end

    private

    def temperature_params
        params.permit(:time, :date, :shift, :team_id, :ups_a, :ups_b, :mdb_a, :mdb_b, :data_hall, :battery_a, :battery_b)
    end
end
