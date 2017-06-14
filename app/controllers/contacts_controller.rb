class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    Contact.new(contact_params)
    # ContactMailer.contact.deliver_now
    ContactMailer.contact
    redirect_to "/#contact"
  end

  def contact_params
    params.require(:contact).permit(
      :name,
      :email,
      :message
    )
  end
end
