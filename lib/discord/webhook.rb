# frozen_string_liteal: true
module Discord

  class Webhook
    include HTTParty

    base_uri "https://discordapp.com/api"

    def initialize(content, webhook_id)
      @content = content
      @webhook_id = webhook_id
    end

    def post
      endpoint = "webhooks/#{@webhook_id}/#{ENV['DISCORD_AUTH_TOKEN']}"

      self.class.post(endpoint, body, headers)
    end

    private

      def headers
        { "Content-Type" => "application/json" }
      end

      def body
        {
          content: content
        }.to_json
      end

  end

end
