class SrcsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Src.all, except: [:created_at, :updated_at], status: :ok
    end

    def show
        src = Src.find_by(id: params[:id])
        if src
            render json: src, status: :ok
        else
            render json: {error: "src not found"}, status: :not_found
        end
    end

    def create
        src = Src.create(src_params)
        render json: src, status: :created
    end

    def update
        src = Src.find_by(id: params[:id])
        if src
            src.update(src_params)
            render json: src, status: :accepted
        else
            render json: {error: "src not found"}, status: :not_found
        end
    end

    def destroy
        src = Src.find_by(id: params[:id])
        if src
            src.destroy
            head :no_content
        else
            render json: {error: "src not found"}, status: :not_found
        end
    end

    private

    def src_params
        params.permit(:time, :date, :team_id, :shift, :name, :note, :status)
    end
end
