class EquipmentStatesController < ApplicationController
    wrap_parameters format: []

    def index
        render json: EquipmentState.all, except: [:created_at, :updated_at]
    end

    def show
        equipmentState = EquipmentState.find_by(id: params[:id])
        if equipmentState
            render json: equipmentState, status: :ok
        else
            render json: {error: "equipment state not found"}, status: :not_found
        end
    end

    def create
        equipmentState = EquipmentState.create(equipment_state_params)
        render json: equipmentState, status: :created
    end

    def update
        equipmentState = EquipmentState.find_by(id: params[:id])
        if equipmentState
            equipmentState.update(equipment_state_params)
            render json: equipmentState, status: :accepted
        else
            render json: {error: "equipment state not found"}, status: :not_found 
        end
    end

    def destroy
        equipmentState = EquipmentState.find_by(id: params[:id])
        if equipmentState
            equipmentState.destroy
            head :no_content
        else
            render json: {error: "equipment state not found"}, status: :not_found
        end
    end

    private

    def equipment_state_params
        params.permit(:time, :date, :team_id, :shift, :name, :status)
    end
end
