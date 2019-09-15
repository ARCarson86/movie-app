class FixReference < ActiveRecord::Migration[5.2]
  def change
  	remove_column :movielists, :movie_id
  	add_reference :movies, :movielist, foreign_key: true
  end
end
