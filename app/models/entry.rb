# encoding: utf-8

class String
  def to_downcase_english
    self.downcase.gsub('ç', 'c').gsub('ğ', 'g').gsub('ı', 'i').gsub('ö', 'o').gsub('ş', 's').gsub('ü', 'u')
                 .gsub('Ç', 'c').gsub('Ğ', 'g').gsub('İ', 'i').gsub('Ö', 'o').gsub('Ş', 's').gsub('Ü', 'u')    
  end
  
  def to_downcase_turkish
     self.downcase.gsub('Ç', 'ç').gsub('Ğ', 'ğ').gsub('İ', 'i').gsub('I', 'ı').gsub('Ö', 'ö').gsub('Ş', 'ş').gsub('Ü', 'ü')
  end
end

class Entry < ActiveRecord::Base
  has_attached_file :instructions,
                    :storage => :s3,
                    :bucket => ENV['S3_BUCKET_NAME'],
                    :s3_credentials => {
                      :access_key_id => ENV['S3_KEY'],
                      :secret_access_key => ENV['S3_SECRET']
                    }
  
  attr_accessible :word, :meaning, :instructions, :additionalInfo

  validates :word, :presence => true
  
  def javascript_file
    return 'animations/' + self.word.to_downcase_english.gsub(/\s+/, '_') + '.js'
  end
end
