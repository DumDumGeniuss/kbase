class CallbacksController < Devise::OmniauthCallbacksController
  def provider
    @user = User.from_omniauth(request.env["omniauth.auth"])
    begin
      sign_in_and_redirect @user
    rescue
    end
  end

  alias_method :facebook, :provider
end
