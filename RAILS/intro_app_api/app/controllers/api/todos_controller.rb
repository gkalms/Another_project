class Api::TodosController < ApplicationController
  before_action :user_exists

  def index
    render json: Todo.all
  end

  def create
    todo = Todo.create(title: params[:title], description: params[:description], completed: params[:completed])
    todo_valid = todo.valid?
    if todo_valid
      render json: { message: 'Succesful creation' }, status: 200
    else
      render json: { message: 'Unsuccesful creation attempt' }, status: 400
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(title: params[:title], description: params[:description], completed: params[:completed])
    render json: { message: 'succesful update' }, status: 200
  end

  def destroy
    Todo.destroy(params[:id])
    render json: { message: 'succesfully deleted' }, status: 200
  end
end
