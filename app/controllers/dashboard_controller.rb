class DashboardController < ApplicationController

  def index
    @events = Event.most_recent.limit(25)
  end

end
