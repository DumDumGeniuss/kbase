class UserAdminsController < ApplicationController
  def index
    render json:{ test:"Hello" }
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def user_params
    params.require(:user).permit(:user_name, :robot_name)
  end
end
