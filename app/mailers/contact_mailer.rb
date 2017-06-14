class ContactMailer < ApplicationMailer
  def contact
    # @contact = contact

    # mail(
    #   :to  => 'contact@nais-maquillage-permanent.fr',
    #   :subject => 'Hello from Postmark'
    # )

    mail(
      :subject => 'Hello from Postmark',
      :to  => 'contact@nais-maquillage-permanent.fr',
      :from => 'contact@nais-maquillage-permanent.fr',
      :html_body => '<strong>Hello</strong> dear Postmark user.',
      :track_opens => 'true'
    )
  end
end
