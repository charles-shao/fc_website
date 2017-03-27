# frozen_string_liteal: true
module Discord

  class Channel
    include HTTParty

    base_uri "https://discordapp.com/api"

    def initialize(content, channel_id)
      @content = content
      @channel_id = channel_id
    end

    def post
      endpoint = "/channels/#{@channel_id}/messages"

      self.class.post(endpoint, body: body, headers: headers)
    end

    private

      def headers
        {
          "authorization" => ENV["DISCORD_AUTH_TOKEN"],
          "Content-Type" => "application/json"
        }
      end

      def body
        body = {
          content: @content
        }.to_json
      end

  end

end
