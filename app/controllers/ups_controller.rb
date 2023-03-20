class UpsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Up.all
    end

    private

    def up_params
        params.permit(:time, :date, :shift, :team_id, :name, :voltage_L1L2, :voltage_L2L3, :voltage_L3L1, :output_voltage_L1N, :output_voltage_L2N, :output_voltage_L3N, :load_current_L1, :load_current_L2, :load_current_L3, :faulty_modules)
    end
end
