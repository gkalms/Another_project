class ApplicationController < ActionController::API
  def encode_token(user_id)
    JWT.encode(user_id, 'super_secret!')
  end

  def decode_token; 
    auth_token = request_headers[Authorization]
      if auth_token
       token = auth_token.split[' ']
       p 'TOKEN'
       p token
      begin
        JWT.decode token[1], 'super_secret!'
      rescue StandardError
        nil
    end
end
end
# Explaining above workflow:-
# Take the token string returned from Login function => turn it into an array; strip any spaces => use the array value as the authorisation token
# token is used/stored by client (browser, api key etc) - and used to get access to backend routes. Example; In cafe, you get the buzzer doodah when you order, to pick up your order you then need to give back the buzzer doodah to be recognised as having the "authority" to pick up the order.
# token is only valid as long as in same server/login 'session' - if you logout or reset server, you will need to get and supply the new token,