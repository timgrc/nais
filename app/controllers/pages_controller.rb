class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    page = params[:page] ? params[:page] : 1
    @photo_gallery = PhotoGallery.new
    @photos        = PhotoGallery.page(page).per(8).order(id: :desc)

    respond_to do |format|
      format.html
      format.js { render :layout => false }
    end

    @contact = Contact.new
  end
end
