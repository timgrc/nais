class CreatePhotoGalleries < ActiveRecord::Migration[5.0]
  def change
    create_table :photo_galleries do |t|
      t.string :description
      t.string :photo_before
      t.string :photo_after

      t.timestamps
    end
  end
end
