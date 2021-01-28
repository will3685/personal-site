class PagesController < ApplicationController
  def home
    if locale == :en
      @languages = {
        French: :fr,
        Spanish: :es,
        Portuguese: :pt
      }
    elsif locale == :fr
      @languages = @languages = {
        English: nil,
        Spanish: :es,
        Portuguese: :pt
      }

    elsif locale == :pt
      @languages = @languages = {
        French: :fr,
        Spanish: :es,
        English: nil
      }
    else
      @languages = {
        French: :fr,
        English: nil,
        Portuguese: :pt
      }
    end
  end
end
