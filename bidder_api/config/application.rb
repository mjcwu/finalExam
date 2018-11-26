require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BiddrApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Don't generate system test files.
    config.generators.system_tests = nil
    config.generators do |g|
      # Don't create helpers files when using
      # the generator
      g.helper = false
      # Don't create assets files when using the
      # generator
      g.assets = false
  
      # This tells Rails' ActiveJob to use the gem
      # "delayed_job" to manage our job queue.
    end
  
    config.middleware.insert_before(0, Rack::Cors) do
      allow do
        origins "localhost:3030", "localhost:3001"
        # "origins" specifies which host are allowed to
        # make CORS request to our Rails server
        resource(
          "/api/*",
          headers: :any,
          credentials: true,
          # Allows cookies to be sent accross origins with AJAX
          # (i.e. fetch or XMLHTTPRequest)
          methods: [:get, :post, :delete, :patch, :put, :options]
        )
      end
    end
  end
end
