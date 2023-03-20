class TeamsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Team.all
    end

    private

    def team_params
        params.permit(:name, :role)
    end
end
