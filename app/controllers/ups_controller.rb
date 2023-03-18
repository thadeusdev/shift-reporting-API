class UpsController < ApplicationController
    def index
        render json: Up.all
    end
end
