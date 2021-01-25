class PagesController < ApplicationController
  def home
    if locale == :en
      @languages = {
        French: :fr,
        Portuguese: :pt,
        Spanish: :es
      }
    elsif locale == :fr
      @languages = @languages = {
        English: nil,
        Spanish: :es,
        Portuguese: :pt
      }

    elsif locale == :pt
      @languages = @languages = {
        French: nil,
        Spanish: :es,
        English: :en
      }
    else
      @languages = {
        French: :fr,
        English: :en,
        Portuguese: nil
      }
    end
  end
end
