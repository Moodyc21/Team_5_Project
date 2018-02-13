User.destroy_all
City.destroy_all
Post.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
  end

chris = User.create(username: 'moodyc21', firstname: 'Christopher', lastname: 'Moody', img_url: 'https://i.imgur.com/XT6bwJI.jpg?1', description: 'Something, some-thing.')
atlanta = City.create(name: 'Atlanta, GA', location: 'Georgia, USA', img_url: 'https://i.imgur.com/7i2UEAT.jpg')
Post.create(title: 'Atlanta is Great!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: chris, city: atlanta)

olee = User.create(username: 'babylee2002', firstname: 'Okhyun', lastname: 'Lee', img_url: 'https://i.imgur.com/kcDlE28.jpg', description: 'Hey!')
singapore = City.create(name: 'Singapore', location: 'Island off of Malaysia', img_url: 'https://i.imgur.com/H1rbRh8.jpg')
Post.create(title: 'Singapore was not a bore!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: olee, city: singapore)

josh = User.create(username: 'jschoe04', firstname: 'Josh', lastname: 'Schoenfeld', img_url: 'https://i.imgur.com/B0KOrC1.jpg?2', description: 'Hi!')
barcelona = City.create(name: 'Barcelona', location: 'Spain', img_url: 'https://i.imgur.com/9h4qO3c.jpg?1')
Post.create(title: 'Barcelona I do not want to come homa!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: josh, city: barcelona)

murdock = User.create(username: 'mDawg1234', firstname: 'Murdock', lastname: 'Schoenfeld', img_url: 'https://i.imgur.com/bFFkBgF.png', description: 'Bark!')
newZealand = City.create(name: 'New Zealand', location: 'Off the coast of Australia', img_url: 'https://i.imgur.com/Q2MzDFx.jpg')
Post.create(title: 'New Zealand was alright.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: murdock, city: newZealand)
