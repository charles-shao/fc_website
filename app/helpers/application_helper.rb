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
      key = convert_old_flash_keys(key)
      messages << <<~html
        <div class="alert alert-#{key} alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          #{value}
        </div>
      html
    end

    messages.join("\n").html_safe
  end

  def timezone_options
    selected_option = current_user&.timezone || "Australia/Sydney"

    options_for_select(ActiveSupport::TimeZone::MAPPING.values, selected_option)
  end

  def convert_old_flash_keys(key)
    case key
    when "notice"
      "info"
    when "error"
      "danger"
    else
      key
    end
  end

end
