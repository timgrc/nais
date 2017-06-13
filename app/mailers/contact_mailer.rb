class ContactMailer < ApplicationMailer
  def contact
    # @contact = contact

    mail(
      :to  => 'contact@nais-maquillage-permanent.fr',
      :subject => 'Hello from Postmark'
    )
  end
end
