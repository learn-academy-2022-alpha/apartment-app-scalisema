# README

# Create Rails App

  $ rails new apartment-app-15 -d postgresql -T

  $ cd apartment-app-15

  $ rails db:create

## Adding RSpec

  $ bundle add rspec-rails
  
  $ rails generate rspec:install

## Git Setup

  $ git remote add origin https://github.com/learn-academy-2022-alpha/apartment-app-scalisema.git

  $ git checkout -b main

  $ git add .

  $ git commit -m "Create Rails App"

  $ git push origin main

## Adding React

  $ bundle add webpacker

  $ bundle add react-rails

  $ rails webpacker:install

  $ rails webpacker:install:react

  $ yarn add @babel/preset-react

  $ yarn add @rails/activestorage

  $ yarn add @rails/ujs

  $ rails generate react:install

  $ rails generate react:component App

## Adding Devise

  $ bundle add devise

  $ rails generate devise:install

  $ rails generate devise User

  $ rails db:migrate

### Added Code: config/environments/development.rb (Line 71)
```ruby
  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

### Replaced Code: config/initializers/devise.rb (Line 270)
```ruby
  # Find this line:
  config.sign_out_via = :delete
  # And replace it with this:
  config.sign_out_via = :get
```

## Rails Routing

  $ rails generate controller Home

  CD into app/views/home

  $ touch index.html.erb

### Added Code to index.html.erb (Line 1)
```ruby
  <%= react_component 'App', {
    logged_in: user_signed_in?,
    current_user: current_user,
    new_user_route: new_user_registration_path,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
  } %>
```
### Replaced Code: app/views/layouts/application.html.erb (Line 10)
```html
  // Find this line:
  <%= javascript_importmap_tags %>

  // And replace it with this:
  <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```
### Added Code: config/routes.rb (Lines 2-3)
```ruby
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index
```

## React Routing

  $yarn add react-router-dom@5.3.0

### Added Code: app/javascript/components/App.js (line 3)
```javascript
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
```
## Adding Reactstrap:

  $ bundle add bootstrap

  $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss

  $ yarn add reactstrap

### Added Code: app/assets/stylesheets/application.scss (line 16)
```ruby
  @import 'bootstrap';
```

## Apartment Resource

  $ rails g resource Apartment street:string city:string state:string manager:string email:string price:decimal bedrooms:integer bathrooms:integer pets:string image:text user_id:integer

  $ rails db:migrate

### Added code: app/models/apartment.rb (line 2)
```ruby
  belongs_to :user
```

### Added code: app/models/user.rb (line 6)
```ruby
    has_many :apartments
```

# Home-Page Creation

## Created Dirctories and files
  app/javascript/components/components

    Header.js

  app/javascript/components/pages

    Home.js
  
  app/javascript

    App.css

### Added Code: app/javascript/App.js
Added Imports to App.js

```Javascript
  import Header from './components/Header'
  import Home from './pages/Home'
  import './App.css'
```

Added render for React Componets to App.js

```Javascript
class App extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    )
  }
}
```

### Added Code to Home.js and Header.js
Added basic react page template code to both:
```Javascript
  import React, { Component } from 'react'

  class Header extends Component {
      render() {
          return (
              <div className="header">
                  <h1>This is my fancy header</h1>
              </div>
          )
      }
  }
  export default Header
```

### Added Code to App.css
Added Basic classes for Home and Header
```css
  .header {
      background-color: pink;
  }

  .home {
      background-color: aqua;
  }
```
