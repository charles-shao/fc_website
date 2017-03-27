# frozen_string_liteal: true
module Discord

  class Webhook
    include HTTParty

    base_uri "https://discordapp.com/api"

    def initialize(content, hook_details)
      @content = content
      @webhook_id = hook_details.webhook_id
    end

    def post
      endpoint = "/webhooks/#{@webhook_id}/#{ENV['DISCORD_AUTH_TOKEN']}"

      self.class.post(endpoint, body: body, headers: headers)
    end

    private

      def headers
        { "Content-Type" => "application/json" }
      end

      def body
        {
          content: @content,
          username: "Application Bot"
        }.to_json
      end

  end

end
