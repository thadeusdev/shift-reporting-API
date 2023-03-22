class TemperaturesController < ApplicationController
    wrap_parameters format: []

    def index
        temperatures = Temperature.all.map do |temperature|
            {
                id: temperature.id,
                time: temperature.formatted_time,
                date: temperature.date,
                shift: temperature.shift,
                team_id: temperature.team_id,
                ups_a: temperature.ups_a,
                ups_b: temperature.ups_b,
                mdb_a: temperature.mdb_a,
                mdb_b: temperature.mdb_b,
                data_hall: temperature.data_hall,
                battery_a: temperature.battery_a,
                battery_b: temperature.battery_b
            }
        end
        render json: temperatures
    end

    def show
        temperature = Temperature.find_by(id: params[:id])
        if temperature
            render json: temperature, status: :ok
        else
            render json: {error: "temperature not found"}, status: :not_found
        end
    end

    def create
        temperature = Temperature.create(temperature_params)
        render json: team, status: :created
    end

    def update
        temperature = Temperature.find_by(id: params[:id])
        if temperature
            temperature.update(temperature_params)
            render json: temperature, status: :accepted
        else
            render json: {error: "temperature not found"}, status: :not_found
        end
    end

    def destroy
        temperature = Temperature.find_by(id: params[:id])
        if temperature
            temperature.destroy
            head :no_content
        else
            render json: {error: "temperature not found"}, status: :not_found
        end
    end

    private

    def temperature_params
        params.permit(:time, :date, :shift, :team_id, :ups_a, :ups_b, :mdb_a, :mdb_b, :data_hall, :battery_a, :battery_b)
    end
end
