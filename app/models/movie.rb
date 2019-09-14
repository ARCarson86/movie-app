class Movie < ApplicationRecord
	belongs_to :movielist

	validates_presence_of :name
end
