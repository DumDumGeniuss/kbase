class HomeController < ApplicationController
    def index
      p TestWorker.perform_async('Hello', 5)
    end
end
