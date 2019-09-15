class MovielistsController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_movielist, only: [:show, :update, :destroy]

	def index
		@movielists = Movielist.all
		json_response(@movielists)
	end

	def create
		@movielist = Movielist.create!(movielist_params)
		json_response(@movielist, :created)
	end

	def show
		json_response(@movielist)
	end

	def update
		@movielist.update(movielist_params)
		head :no_content
	end

	def destroy
		@movielist.destroy
		head :no_content
	end

	private

	def movielist_params
		params.permit(:name)
	end

	def set_movielist
		@movielist = Movielist.find(params[:id])
	end
end
