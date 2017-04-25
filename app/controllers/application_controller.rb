class ApplicationController < ActionController::Base
  include Clearance::Controller
  protect_from_forgery with: :exception

  before_action :require_login

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden, content_type: 'text/html' }
      format.html {
        if signed_in?
          redirect_to main_app.dashboard_index_path, notice: exception.message
        else
          redirect_to main_app.root_path
        end
      }
      format.js   { head :forbidden, content_type: 'text/html' }
    end
  end

end
