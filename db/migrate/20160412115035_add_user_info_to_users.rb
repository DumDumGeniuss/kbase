class AddUserInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :user_name, :string, :limit => 10
    add_column :users, :robot_name, :string, :limit => 10
  end
end
