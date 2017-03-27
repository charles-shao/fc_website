class RootController < ApplicationController

  def show
    @notices = Notice.ordered_by_created_at.published
    @static_progressions = StaticProgression.all.includes(:raid_content, :static)
  end

end
