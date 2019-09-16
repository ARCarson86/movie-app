class AddDetailsToMovies < ActiveRecord::Migration[5.2]
  def change
  	add_column :movies, :rating, :integer
  	add_column :movies, :release_year, :string
  end
end
