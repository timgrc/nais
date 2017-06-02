class AddHasPhotoBeforeToPhotoGalleries < ActiveRecord::Migration[5.0]
  def change
    add_column :photo_galleries, :has_photo_before, :boolean
  end
end
