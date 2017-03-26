class RootController < ApplicationController

  def show
    @notices = Notice.ordered_by_created_at.published
  end

end
