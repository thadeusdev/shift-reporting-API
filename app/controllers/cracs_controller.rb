class CracsController < ApplicationController
    def index
        render json: Crac.all
    end
end
