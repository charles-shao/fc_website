class DashboardController < ApplicationController

  def index
    # Aggregate all the events
    @notices = Notice.most_recent
  end

end
