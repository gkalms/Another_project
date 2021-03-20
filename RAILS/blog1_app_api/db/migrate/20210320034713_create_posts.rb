class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table "posts", force: :cascade do |t|
      t.string "title"
      t.string "content"
      t. string "author"      
    end
  end
end
