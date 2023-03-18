class SrcsController < ApplicationController
    def index
        render json: Src.all
    end
end
