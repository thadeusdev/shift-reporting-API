class GeneratorsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Generator.all
    end

    private

    def generator_params
        params.permit(:time, :date, :name, :runtime, :temperature, :battery_charge, :fuel_level, :shift, :team_id)
    end
end
