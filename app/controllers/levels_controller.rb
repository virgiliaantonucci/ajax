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

    def reset
        # levelData = find_level
        reset = Level.find_by(name: params[:name])
        updatedReset = reset.update!(is_completed: false)
        render json: updatedReset
    end

    private

    def find_level
        Level.find(params[:name])
    end

    def level_params
      params.permit(:is_completed)
    end
end
