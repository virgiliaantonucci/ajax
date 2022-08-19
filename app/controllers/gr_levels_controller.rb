class GrLevelsController < ApplicationController
    def index
        render json: GrLevel.all
    end

    def grtoeng1
        render json: GrLevel.first.eng_levels.first.phrase
    end
end
