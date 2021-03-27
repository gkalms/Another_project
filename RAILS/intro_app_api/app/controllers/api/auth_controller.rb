class Api::AuthController < ApplicationController
  def login
    user = User.find_by(title: params[:title])
    if user&.authenticate(params[:password])
      token = (encode_token user.id)
      render json: {user: user, token: token}
    else
      render json: {message: 'user not found'}, status: :not_found
    end
  end
end