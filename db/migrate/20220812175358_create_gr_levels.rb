class CreateGrLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :gr_levels do |t|
      t.string :phrase
      t.string :walkthru

      t.timestamps
    end
  end
end
