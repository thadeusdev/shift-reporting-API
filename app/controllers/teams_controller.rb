class TeamsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Team.all, except: [:created_at, :updated_at],  status: :ok
    end

    def show
        team = Team.find_by(id: params[:id])
        if team
            render json: team, status: :ok
        else
            render json: {error: "team not found"}, status: :not_found
        end
    end

    def create
        team = Team.create(team_params)
        render json: team, status: :created
    end

    def update
        team = Team.find_by(id: params[:id])
        if team
            team.update(team_params)
            render json: team, status: :accepted
        else
            render json: {error: "team not found"}, status: :not_found
        end
    end

    def destroy
        team = Team.find_by(id: params[:id])
        if team
            team.destroy
            head :no_content
        else
            render json: {error: "team not found"}, status: :not_found
        end
    end

    private

    def team_params
        params.permit(:team_name, :role)
    end
end
