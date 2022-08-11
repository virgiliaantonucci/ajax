class UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

 def destroy
    user = find_user
    user.destroy
    head :no_content, status: :ok 
  end

  def me
    render json:  @current_user
  end

  def index
    render json: User.all
  end

  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :ok
  end
  
  private

  def user_params
    params.permit(:username, :password)
  end
  def find_user
    User.find(params[:id])
  end
end