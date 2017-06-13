class ContactMailer < ApplicationMailer
  def contact
    # @contact = contact

    mail(
      :subject => 'Hello from Postmark',
      :to  => 'contact@nais-maquillage-permanent.fr',
      :from => 'contact@nais-maquillage-permanent.fr',
      :track_opens => 'true')
  end
end
