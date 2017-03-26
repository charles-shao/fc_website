module ApplicationHelper

  def embedded_svg(filename, options={})
    file = File.read(Rails.root.join('app', 'assets', 'images', filename))
    doc = Nokogiri::HTML::DocumentFragment.parse file
    svg = doc.at_css 'svg'
    if options[:class].present?
      svg['class'] = options[:class]
    end

    doc.to_html.html_safe
  end


  def flash_message
    messages = []
    flash.each do |key, value|
      messages << <<~html
        <div class="alert alert-#{key} alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          #{value}
        </div>
      html
    end

    messages.join("\n").html_safe
  end

end
