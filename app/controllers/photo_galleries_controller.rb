class PhotoGalleriesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create, :edit, :update, :destroy ]
  def create
    photo_gallery = PhotoGallery.new(photo_gallery_params)
    photo_gallery.save!
    redirect_to "/#photos"
  end

  def new
    @photo_gallery = PhotoGallery.new
  end

  def edit
    @photo_gallery = PhotoGallery.find(params[:id])
    respond_to do |format|
      format.js
    end
  end

  def update
    @photo_gallery                  = PhotoGallery.find(params[:id])
    @photo_gallery.description      = photo_gallery_params[:description]
    @photo_gallery.has_photo_before = photo_gallery_params[:has_photo_before]
    if photo_gallery_params[:photo_before] != nil
      @photo_gallery.photo_before       = photo_gallery_params[:photo_before]
      @photo_gallery.photo_before_cache = photo_gallery_params[:photo_before_cache]
    end
    if photo_gallery_params[:photo_after] != nil
      @photo_gallery.photo_after       = photo_gallery_params[:photo_after]
      @photo_gallery.photo_after_cache = photo_gallery_params[:photo_after_cache]
    end
    @photo_gallery.save!
    # raise
    redirect_to "/#photos"
  end

  def destroy
    photo_gallery = PhotoGallery.find(params[:id])
    photo_gallery.destroy
    # redirect_to "/#photos"
  end

  def photo_gallery_params
    params.require(:photo_gallery).permit(
      :description,
      :photo_before,
      :photo_after,
      :has_photo_before,
      :photo_before_cache,
      :photo_after_cache
    )
  end
end
