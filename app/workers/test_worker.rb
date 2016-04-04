class TestWorker
  include Sidekiq::Worker
  def perform(name, count)
    return count
  end
end
