class CreateDiscordWebhooks < ActiveRecord::Migration[5.0]
  def change
    create_table :discord_webhooks do |t|
      t.string :channel_name
      t.string :webhook_id

      t.timestamps
    end
  end
end
