class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render json: @cities
  end

  def create
    @city = City.create!(city_params)

    render json: @city
  end

  def show
    @city = City.find(params[:id])

    render json: @city
  end

  def update
    @city = City.find(params[:id])
    @city.update!(city_params)

    render json: @city
  end

  def destroy
    @city = City.find(params[:id]).delete

    render status: :ok
  end

  private

  def city_params
    params.require(:city).permit(:name, :location, :img_url)
  end
end

