class User < ApplicationRecord
    has_secure_password
    has_many :todos
  
    validates :title, uniqueness: { message: 'User already exists' }
  end
  