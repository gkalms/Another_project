# frozen_string_literal: true

#def is beginning of a code block; def is "define a method"; 
#"end" breaks the code started by "def"

#Example 1
def greet
    p 'hello georgina'
    end
    
    greet() #can also be written as just <greet>

#Example 2
def greet(name) 
p "hello #{name}"
end

greet('georgie')

#Example 3
def greet name 
    p "Aloha #{name}"
    end
    
    greet 'georgiek'

    #Example 4
def greet(name, _last_name) 
    p "Ciao #{name} #{_last_name}"
    end
    
    greet 'georgie', 'Kalms'