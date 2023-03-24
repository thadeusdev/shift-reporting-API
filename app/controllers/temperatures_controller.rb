class TemperaturesController < ApplicationController
    wrap_parameters format: []

    def index
        temperatures = Temperature.all
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
        render json: temperature, status: :created
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
