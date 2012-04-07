class EntriesController < ApplicationController  
  before_filter :set_all_words
  
  def set_all_words
    @all_words = Entry.all.collect {|entry| entry.word}
  end
  
  def index
    
  end
end
