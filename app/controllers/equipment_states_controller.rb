class EquipmentStatesController < ApplicationController
    def index
        render json: EquipmentState.all
    end
end
