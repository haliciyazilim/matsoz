# encoding: utf-8

class String
  def to_downcase_english
    self.gsub('ç', 'c').gsub('ğ', 'g').gsub('ı', 'i').gsub('ö', 'o').gsub('ş', 's').gsub('ü', 'u')
        .gsub('Ç', 'c').gsub('Ğ', 'g').gsub('İ', 'i').gsub('Ö', 'o').gsub('Ş', 's').gsub('Ü', 'u')    
  end
end

class Entry < ActiveRecord::Base
  attr_accessible :word, :meaning

  validates :word, :presence => true
  
  def javascript_file
    return 'animations/' + self.word.downcase.to_downcase_english.gsub(/\s+/, '_') + '.js'
  end
end
