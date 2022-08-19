class EngLevelsController < ApplicationController
    def index
        render json: EngLevel.all
    end

    def engtogr
        currentEngLevel = EngLevel.find_by(id: params[:id])
        render json: currentEngLevel.gr_levels.first.phrase
    end

end
