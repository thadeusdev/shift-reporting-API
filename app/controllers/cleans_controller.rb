class CleansController < ApplicationController
    wrap_parameters format: []

    # GET /cleans
    def index
        render json: Clean.all, status: :ok
    end

    def show 
        clean = Clean.find_by(id: params[:id])
        if clean
            render json: clean, status: :ok
        else
            render json: {error: "clean not found"}, status: :not_found
        end
    end

    def create
        clean = Clean.create(clean_params)
        render json: clean, status: :created
    end

    def update
        clean = Clean.find_by(id: params[:id])
        if clean
            clean.update(clean_params)
            render json: clean, status: :accepted
        else
            render json: {error: "clean not found"}
        end
    end

    def destroy
        clean = Clean.find_by(id: params[:id])
        if clean
            clean.destroy
            head :no_content
        else
            render json: {error: "clean not found"}, status: :not_found
        end
    end

    private

    def clean_params
        params.permit(:time, :date, :team_id, :shift, :room, :status, :note)
    end
end
