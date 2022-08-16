class EngLevelsController < ApplicationController
    def index
        render json: EngLevel.all
    end
end
