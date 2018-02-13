class Api::PostsController < ApplicationController

  def index
    @posts = City.find(params[:city_id]).posts
    render json: @posts
  end

  def create
    @post = Post.create!(post_params)

    render json: @post
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)

    render json: @post
  end

  def destroy
    @post = Post.find(params[:id]).delete

    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :city_id, :user_id)
  end

end
