#methods, classes, instance variables

#all objects derived from classes in Ruby
#class - classifying something that has inbuilt features

class Car #class name has capital firt letter as convention
    #@owner - an instance variables belonging to the objects e.g prius and corolla below

    def make #"getMake" is like a property or method that is defined
        'Volkswagen'
    end

    def model
         'Tiguan'
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

mycar = Car.new #the word "new" allows to create object from class blueprint
#object name does not need to be capital
car_make = mycar.make # "car_make" this is an instance of the onject "Car"
p car_make #printing result using variable "make"
p mycar.model
p mycar.year '2007','08'

prius = Car.new
prius.owner_set 'Jonathan'
p prius.owner_name

corolla =  Car.new
corolla.owner_get 'Joshua'
p corolla.owner_name

