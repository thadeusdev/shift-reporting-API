class CleansController < ApplicationController
    def index
        render json: Clean.all
    end
end
