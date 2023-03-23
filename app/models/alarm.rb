class Alarm < ApplicationRecord
    belongs_to :team, optional: true

    def formatted_time
        # format the time using strftime
        self.time.strftime("%I:%M%p")
    end
end
