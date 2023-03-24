class UpsController < ApplicationController
    wrap_parameters format: []

    def index
        ups = Up.all
        render json: ups
    end

    def show
        ups = Up.find_by(id: params[:id])
        if ups
            render json: ups
        else
            render json: {error: "ups not found"}, status: :not_found
        end
    end

    def create
        ups = Up.create(ups_params)
        render json: ups, status: :created
    end

    def update
        ups = Up.find_by(id: params[:id])
        if ups
            ups.update(ups_params)
            render json: ups, serializer: UpSerializer
        else
            render json: {error: "ups not found"}, status: :not_found
        end
    end

    def destroy
        ups = Up.find_by(id: params[:id])
        if ups
            ups.destroy
            head :no_content
        else
            render json: {error: "ups not found"}, status: :not_found
        end
    end

    private

    def ups_params
        params.permit(:time, :date, :shift, :team_id, :ups_name, :voltage_L1L2, :voltage_L2L3, :voltage_L3L1, :output_voltage_L1N, :output_voltage_L2N, :output_voltage_L3N, :load_current_L1, :load_current_L2, :load_current_L3, :faulty_modules)
    end
end
