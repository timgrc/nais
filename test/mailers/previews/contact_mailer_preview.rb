# test/mailers/previews/user_mailer_preview.rb
class UserMailerPreview < ActionMailer::Preview
  def contact
    ContactMailer.contact
  end
end
