class CracsController < ApplicationController
    wrap_parameters format: []
    def index
        render json: Crac.all, status: :ok
    end

    def show
        crac = Crac.find_by(id: params[:id])
        if crac
            render json: crac, status: :ok
        else
            render json: {error: "crac not found"}, status: :not_found
        end
    end

    def create
        crac = Crac.create(crac_params)
        render json: crac, status: :created
    end

    def update
        crac = Crac.find_by(id: params[:id])
        if crac
            crac.update(crac_params)
            render json: crac, status: :accepted
        else
            render json: {error: "crac not found"}, status: :not_found
        end
    end

    def destroy
        crac = Crac.find_by(id: params[:id])
        if crac
            crac.destroy
            head :no_content
        else
            render json: {error: "crac not found"}, status: :not_found
        end
    end

    private

    def crac_params
        params.permit(:time, :date, :shift, :name, :status, :team_id, :note)
    end
end
