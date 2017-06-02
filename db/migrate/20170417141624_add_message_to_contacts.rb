class AddMessageToContacts < ActiveRecord::Migration[5.0]
  def change
    change_column :contacts, :message, :text
  end
end
