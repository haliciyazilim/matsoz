# encoding: utf-8

# require "open-uri"
# require "net/https"
# require 'openssl'

require 'net/https'
require 'nokogiri'

class StatsController < ApplicationController
  def index
    # OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
    # 
    # url = URI.parse('https://www.pivotaltracker.com/services/v3/tokens/active')
    # 
    # req = Net::HTTP::Post.new(url.path)
    # 
    # # req.form_data = {
    # #   'box1' => ' -Emily Post',
    # #   'button1' => 'Submit'
    # # }
    # 
    # # req.basic_auth url.user, url.password if url.user
    # 
    # con = Net::HTTP.new(url.host, url.port)
    # con.use_ssl = true
    # con.start {|http| http.request(req)}



    https = Net::HTTP.new('www.pivotaltracker.com', 443)
    https.use_ssl = true
    https.verify_mode = OpenSSL::SSL::VERIFY_PEER
    https.ca_path = '/etc/ssl/certs' if File.exists?('/etc/ssl/certs') # Ubuntu
    https.ca_file = '/opt/local/share/curl/curl-ca-bundle.crt' if File.exists?('/opt/local/share/curl/curl-ca-bundle.crt') # Mac OS X
    xml_data = https.request_post('/services/v3/tokens/active', "username=#{ENV['PIVOTAL_USER']}&password=#{ENV['PIVOTAL_PASS']}").body

    hash = Hash.from_xml(xml_data)
    
    token = hash['token']['guid']
    
    
    xml_data = https.request_get('/services/v3/projects/589545/stories?filter=label%3A%22interaction%22%20includedone%3Atrue', {'X-TrackerToken' => token}).body
    responseHash = Hash.from_xml(xml_data)
      
    stories = responseHash['stories']
      
    @hash = {}
    
    stories.each do |story|
      state = story['current_state'].to_sym
      @hash[state] ? @hash[state] += 1 : @hash[state] = 1
    end
    
    @accepted = @hash[:accepted]
    @delivered = @hash[:delivered]
    @finished  = @hash[:finished]
    @started = @hash[:started]
    @rejected = @hash[:rejected]
    @unscheduled = @hash[:unscheduled]
    
  end
end