class GrLevelsController < ApplicationController
    def index
        render json: GrLevel.all
    end

    def grtoeng
        currentGrLevel = GrLevel.find_by(id: params[:id])
        render json: currentGrLevel.eng_levels.first.phrase
    end
end
