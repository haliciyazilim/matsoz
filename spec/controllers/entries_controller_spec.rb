
require 'spec_helper'

describe EntriesController do
  describe 'set all words' do
    before :each do
      word1 = mock('word1')
      word2 = mock('word2')
      entry1 = mock('entry1', :word => word1)
      entry2 = mock('entry2', :word => word2)
      @fake_entries = [entry1, entry2]
      @fake_words = [word1, word2]
      Entry.stub(:all).and_return(@fake_entries)      
    end
    
    it 'should call Entry.all' do
      Entry.should_receive(:all)
      get :index
    end
    
    it 'should assign all_words' do
      get :index
      assigns(:all_words).should == @fake_words
    end
  end
  
  describe 'show entry' do
    before :each do
      @fake_entry = mock('entry')
      Entry.stub(:find).and_return(@fake_entry)
    end
    
    it 'should find the entry from the database' do
      Entry.should_receive(:find).with("1")
      get :show, { :id => "1" }
    end
    
    it 'should make entry available' do
      get :show, { :id => "1" }
      assigns(:entry).should == @fake_entry
    end
  end
  
  describe 'create new entry' do
    before :each do
      @fake_entry = mock('Entry', :name => 'name', :description => 'description')
      Entry.stub(:create).and_return(@fake_entry)
    end
    
    it 'should create a new entry based on parameters' do
      Entry.should_receive(:create).with('entry')
      post :create, { :entry => 'entry' }
    end
    
    it 'should create confirmation notice' do
      post :create, { :entry => 'entry' }
      flash[:notice].should_not be nil
    end
    
    it 'should redirect to the entries path' do
      post :create, { :entry => 'entry' }
      response.should redirect_to entry_path(@fake_entry)
    end
  end
  
end