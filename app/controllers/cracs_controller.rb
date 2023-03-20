class CracsController < ApplicationController
    wrap_parameters format: []
    def index
        render json: Crac.all
    end

    private

    def crac_params
        params.permit(:time, :date, :shift, :name, :status, :team_id, :note)
    end
end
