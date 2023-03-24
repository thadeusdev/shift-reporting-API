class GeneratorsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Generator.all, status: :ok
    end

    def show
        generator = Generator.find_by(id: params[:id])
        if generator
            render json: generator, status: :ok
        else
            render json: {error: "generator not found"}, status: :not_found
        end
    end

    def create
        generator = Generator.create(generator_params)
        render json: generator, status: :created
    end

    def update
        generator = Generator.find_by(id: params[:id])
        if generator
            generator.update(generator_params)
            render json: generator, status: :accepted
        else
            render json: {error: "generator not found"}, status: :not_found
        end
    end

    def destroy
        generator = Generator.find_by(id: params[:id])
        if generator
            generator.destroy
            head :no_content
        else
            render json: {error: "generator not found"}, status: :not_found
        end
    end

    private

    def generator_params
        params.permit(:time, :date, :name, :runtime, :temperature, :battery_charge, :fuel_level, :shift, :team_id)
    end
end
