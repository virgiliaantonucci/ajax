class CreateLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :levels do |t|
      t.string :name
      t.boolean :is_completed

      t.timestamps
    end
  end
end
