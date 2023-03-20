class EquipmentStatesController < ApplicationController
    wrap_parameters format: []

    def index
        render json: EquipmentState.all
    end

    private

    def equipment_state_params
        params.permit(:time, :date, :team_id, :shift, :name, :status)
    end
end
