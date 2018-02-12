class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :location
      t.string :img_url

      t.timestamps
    end
  end
end
