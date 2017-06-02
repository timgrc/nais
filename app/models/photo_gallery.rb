class PhotoGallery < ApplicationRecord
  mount_uploader :photo_before, PhotoUploader
  mount_uploader :photo_after, PhotoUploader
end
