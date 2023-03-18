class TemperaturesController < ApplicationController
    def index
        render json: Temperature.all
    end
end
