class Classy_car
attr_accessor :make
attr_accessor :model
attr_accessor :year
attr_accessor :color
attr_accessor :miles


def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
        
end

def seen_another_year
   @miles += 15000
end

def details
    if miles > 50000
    "This #{year} #{make} #{model} has #{miles} miles on it, and that #{color} paint is really fading"
    else
    "This #{color} #{year} #{make} #{model} has #{miles} miles on it"
    end
 end

end

mycar = Classy_car.new 'Toyota', 'Prado', '1998', 'Red'
p mycar.color
p mycar.year
p mycar.make
p mycar.model

mycar.seen_another_year
p mycar.miles

mycar.seen_another_year
p mycar.miles

mycar.details
