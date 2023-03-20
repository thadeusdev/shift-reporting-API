class SrcsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Src.all
    end

    private

    def src_params
        params.permit(:time, :date, :team_id, :shift, :name, :note, :status)
    end
end
