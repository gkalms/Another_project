#attributes, instance variables

class Car 
    attr_accessor :owner #combines set and get in one line

    def initialize(make, model) #these 2 - make, model - are parameters
        @wheels = 4
        @make = make
        @model = model
    end

    attr_reader :make 
    #longer way for attr_reader make will be
        #def make
            #@make
        #end

    attr_reader :model

    def year yr,month
        "#{yr} - #{month}"
    end

    #def owner_set(owner_name) #this is a method
     #   @owner = owner_name # from above object an instance variable can be created
    #end

    #def owner_get
     #   @owner
    #end

    #Above two last methods are replaced by the "attr_accessor" line
end

prius = Car.new 'Volkswagen', 'Tiguan'
#prius.owner_set 'Jonathan'
p prius.make
prius.owner = 'Jonathan'
p prius.owner

corolla =  Car.new 'Mercedes', 'Benz'
#corolla.owner_set 'Joshua'
p corolla.model
corolla.owner = 'Joshua'

