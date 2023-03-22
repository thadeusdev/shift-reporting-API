class UpsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Up.all, except: [:created_at, :updated_at], status: :ok
    end

    def show
        ups = Up.find_by(id: params[:id])
        if ups
            render json: ups, status: :ok
        else
            render json: {error: "ups not found"}, status: :not_found
        end
    end

    def create
        ups = ups.create(ups_params)
        render json: ups, status: :created
    end

    private

    def ups_params
        params.permit(:time, :date, :shift, :team_id, :name, :voltage_L1L2, :voltage_L2L3, :voltage_L3L1, :output_voltage_L1N, :output_voltage_L2N, :output_voltage_L3N, :load_current_L1, :load_current_L2, :load_current_L3, :faulty_modules)
    end
end
