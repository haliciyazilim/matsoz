class EntriesController < ApplicationController  
  before_filter :set_all_entries
  
  def set_all_entries
    @all_entries = Entry.order(:word).all
  end
  
  def index
    
  end
  
  def show
    @entry = Entry.find(params[:id])

    @meanings = @entry.meaning.split("++")
    index = -1
    @meanings = @meanings.map do |meaning|
      index = index + 1
      if (index % 2) == 0
        {meaning => nil}
      else 
        {meaning => Entry.find_by_word(meaning)}
      end
    end
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
    @entry = Entry.find(params[:id])
  end
  
  def update
    @entry = Entry.find params[:id]
    @entry.update_attributes!(params[:entry])
    flash[:notice] = "#{@entry.word} was successfully updated."
    redirect_to entry_path(@entry)
  end
  
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    flash[:notice] = "#{@entry.word} was deleted successfully."
    redirect_to entries_path
  end
end
