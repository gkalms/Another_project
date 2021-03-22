class TeaKettle

    attr_reader :water
    attr_reader :milk

    def initialize
    @water = 1000
    @milk = 200
    end

def MakeTea
    @water -= 250
end

def WhiteTea
    @milk -= 50
end

def Kettle_level
    puts "water level: #{@water}"
    puts "milk level: #{@milk}"
end

end

Kettle2 = TeaKettle.new

 p Kettle2.instance_variables

#p Kettle2.water

#p Kettle2.milk

#p Kettle2.MakeTea

#p Kettle2.WhiteTea

#Kettle2.Kettle_level