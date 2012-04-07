class Entry < ActiveRecord::Base
  attr_accessible :word, :meaning

  validates :word, :presence => true
end
