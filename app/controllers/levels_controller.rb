class LevelsController < ApplicationController
    def show
        render json: find_level
    end

    def index
        render json: Level.all
    end

    private

    def find_level
        Level.find(params[:name])
      end
end
