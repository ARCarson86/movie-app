class Api::MoviesController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_movielist
	before_action :set_movielist_movie, only: [:show, :update, :destroy]

	def index
		json_response(@movielist.movies)
	end

	def show
		json_response(@movie)
	end

	def create
		@movielist.movies.create!(movie_params)
		json_response(@movielist, :created)
	end

	def update
		@movie.update(movie_params)
		head :no_content
	end

	def destroy
		@movie.destroy
	end

	private

	def movie_params
		params.permit(:name, :movielist_id, :movie)
	end

	def set_movielist
		@movielist = Movielist.find(params[:movielist_id])
	end

	def set_movielist_movie
		@movie = @movielist.movies.find_by!(id: params[:id]) if @movielist
	end
end
