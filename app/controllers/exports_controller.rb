# encoding: utf-8


class ExportsController < EntriesController
  def index
    @exporting = true
    `mkdir tmp/export`
    `mkdir tmp/export/entries`

    @all_entries.each do |entry|
      params[:id] = entry.id
      set_all_entries
      create_word_list
      show
      target  = "tmp/export/entries/" + entry.id.to_s + ".html"
      content = render_to_string 'entries/show.html.haml'

      File.open(target, "w+") do |f|
        f.write(content)
      end
    end

    `script/export.sh`
    `rm -rf tmp/export`

    send_file 'tmp/export.tar.gz'
  end
end