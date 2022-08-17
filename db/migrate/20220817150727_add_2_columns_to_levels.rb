class Add2ColumnsToLevels < ActiveRecord::Migration[6.1]
  def change
    add_column :levels, :eng_level_id, :integer
    add_column :levels, :gr_level_id, :integer
  end
end
