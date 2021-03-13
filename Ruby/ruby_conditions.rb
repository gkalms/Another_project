#Example 1
num = 4
if num < 3
    p 'yes it is true'
else
    p 'not true'
end

#Example 2
num1 = 4
if num1 < 3
    p 'yes it is true'
elsif num1 == 4
    p 'Number is 4'
else
    p 'not true'
end

#example 2b 
#opposite of "if" condition; "unless" is a ruby idiosyncracies
num = 5
unless num > 4
    p 'num is less than 4'
end

#this will run
num = 4
unless num > 4
    p 'num is less than 4'
end

#shorter way of writing above
num = 4
    p 'num is less than 4' unless num > 4
end

#Example 3
name = 'Georgie'
if name == 'Georgie'
    p 'Yes, name is true'
end
#above code is considered ineffecient

#instead below is better
nameAccept = ''
name = 'Georgie'
nameAccept = name if name == 'Georgie'
p nameAccept


