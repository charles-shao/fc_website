class RootController < ApplicationController

  before_action :require_login, only: :none
  
  def show
    @notices = Notice.most_recent.published.limit(3)
    @static_progressions = StaticProgression.all.includes(:raid_content, :static)
  end

end
