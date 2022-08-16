class GrLevelsController < ApplicationController
    def index
        render json: GrLevel.all
    end
end
