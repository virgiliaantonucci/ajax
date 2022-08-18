class EngLevelsController < ApplicationController
    def index
        render json: EngLevel.all
    end

    def engtogr1
        render json: EngLevel.first.gr_levels
    end
end
