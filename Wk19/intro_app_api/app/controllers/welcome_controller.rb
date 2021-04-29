class WelcomeController < ApplicationController
    def index
        render json: {name: 'Georgie'}
    end
end