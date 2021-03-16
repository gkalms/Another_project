#methods, classes, instance variables

class Car 

    def initialize(make, model) #these 2 are parameters
        @wheels = 4
        @make = make
        @model = model
    end

    def make 
        @make
    end

    def model
        @model
    end

    def year yr,month
        "#{yr} - #{month}"
    end

    def owner_set(owner_name) #this is a method
        @owner = owner_name # from above object an instance variable can be created
    end

    def owner_get
        @owner
    end
end

prius = Car.new 'Volkswagen', 'Tiguan'
prius.owner_set 'Jonathan'
p prius.make

corolla =  Car.new 'Volkswagen', 'Polo'
corolla.owner_set 'Joshua'
p corolla.make

