class EntriesController < ApplicationController  
  before_filter :set_all_entries
  
  def set_all_entries
    @all_entries = Entry.order(:word).all
  end
  
  def index
    
  end
  
  def show
    @entry = Entry.find(params[:id])

    chunks = @entry.meaning.split(/=>|\*\*/)
    delimiters = @entry.meaning.scan(/=>|\*\*/)
    
    @chunks = []

    errorFound = false
    
    @chunks.push({chunks.shift => nil})
    
    while !(delimiters.empty?)
      delimiter = delimiters.shift
  
      if delimiter == "**"
        chunk = chunks.shift
        delimiter = delimiters.shift
        
        if delimiter == "**"
          @chunks.push({chunk => Entry.find_by_word(chunk)})
          @chunks.push({chunks.shift => nil})
        elsif delimiter == "=>"
          destination = chunks.shift
          @chunks.push({chunk => Entry.find_by_word(destination)})
          
          delimiter = delimiters.shift
          if delimiter == "**"
            @chunks.push({chunks.shift => nil})
          else
            errorFound = true
          end
        else
          errorFound = true
        end
      else
        errorFound = true
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
