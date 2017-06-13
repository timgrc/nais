class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    contact = Contact.new(contact_params)
    ContactMailer.contact(contact).deliver_now
  end

  def contact_params
    params.require(:contact).permit(
      :name,
      :email,
      :message
    )
  end
end
