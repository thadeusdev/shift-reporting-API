class CleansController < ApplicationController
    wrap_parameters format: []

    # GET /cleans
    def index
        render json: Clean.all
    end

    private

    def clean_params
        params.permit(:time, :date, :team_id, :shift, :room, :status, :note)
    end
end
