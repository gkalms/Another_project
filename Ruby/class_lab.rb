class Classy_car
attr_accessor :make, :color, :miles, :model, :year

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

 def ahh_fresh_paint
    puts "The new white color was a good choice"
 end

 def color
    @color
    ahh_fresh_paint
 end

end

mycar = Classy_car.new 'Toyota', 'Prado', '1998', 'Red'
p mycar.details
mycar.seen_another_year
mycar.seen_another_year
mycar.seen_another_year
mycar.seen_another_year
p mycar.miles
p mycar.details
p mycar.miles
mycar.color 'white'


