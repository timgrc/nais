class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]
  def create
    contact = Contact.new(contact_params)
    # ContactMailer.contact.deliver_now
    client = Postmark::ApiClient.new(ENV['POSTMARK_API_KEY'])
    client.deliver(
      from: 'contact@nais-maquillage-permanent.fr',
      to: 'contact@nais-maquillage-permanent.fr',
      subject: 'Contact de nais-maquillage-permanent.fr',
      html_body: "
        <strong>CONTACT DE NAIS-MAQUILLAGE-PERMANENT.FR</strong><br><br>
        <strong>Nom :</strong> #{contact.name}<br>
        <strong>Email :</strong> #{contact.email}<br>
        <strong>Message :</strong><br>
        #{contact.message}<br>
      ",
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
