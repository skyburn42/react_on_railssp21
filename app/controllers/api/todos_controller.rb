class Api::TodosController < ApplicationController
  # html, xml, json, redirect
  # new, edit, - forms 
  def index 
    render json: Todo.all
  end
  # show - optional
  def show
    render json: Todo.find(params[:id])
  end
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end
  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end
  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo was deleted'}
  end
  private 
    def todo_params
      # { newTodo: { title: 'react', complete } }
      # { todo: { title: 'react', complete } }
      # { todo: { title: "adsfasd", complete: false} }
      params.require(:todo).permit(:title, :complete)
    end
end