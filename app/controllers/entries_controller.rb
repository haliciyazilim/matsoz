class EntriesController < ApplicationController  
  before_filter :set_all_words
  
  def set_all_words
    @all_words = Entry.all.collect {|entry| entry.word}
  end
  
  def index
    
  end
  
  def show
    @entry = Entry.find(params[:id])
  end
  
  def new

  end
  
  def create
    entry = Entry.create(params[:entry])
    if entry
      flash[:notice] = 'Entry created successfully'
      redirect_to entry_path(entry)
    end
  end
  
  def edit
    
  end
  
  def update
    
  end
  
  def destroy
    
  end
end
