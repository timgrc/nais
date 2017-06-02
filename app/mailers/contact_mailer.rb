class ContactMailer < ApplicationMailer
  def contact
    @greeting = "Hi"

    mail to: "grc.tmt@gmail.com", subject: 'Test'
  end
end
