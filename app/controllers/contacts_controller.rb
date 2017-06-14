class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    Contact.new(contact_params)
    # ContactMailer.contact.deliver_now
    client = Postmark::ApiClient.new(ENV['POSTMARK_API_KEY'])
    client.deliver(
      from: 'sender@example.com',
      to: 'receiver@example.com',
      subject: 'hello',
      html_body: '<strong>Hello from Postmark!<strong>',
      track_opens: true
    )
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
