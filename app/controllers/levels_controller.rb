class LevelsController < ApplicationController
    def show
        render json: find_level
    end

    def index
        render json: Level.all
    end

    def update
        # levelData = find_level
        levelData = Level.find_by(name: params[:name])
        updatedLevel = levelData.update!(is_completed: true)
        render json: updatedLevel
    end

    private

    def find_level
        Level.find(params[:name])
    end

    def level_params
      params.permit(:is_completed)
    end
end
