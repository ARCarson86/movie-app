class AddMovieToMovielists < ActiveRecord::Migration[5.2]
  def change
    add_reference :movielists, :movie, foreign_key: true
  end
end
