class CreateMovielists < ActiveRecord::Migration[5.2]
  def change
    create_table :movielists do |t|
      t.string :name

      t.timestamps
    end
  end
end
