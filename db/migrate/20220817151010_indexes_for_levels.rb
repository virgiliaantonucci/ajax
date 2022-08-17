class IndexesForLevels < ActiveRecord::Migration[6.1]
  def change
      add_index :levels, :eng_level_id
      add_index :levels, :gr_level_id
  end
end
