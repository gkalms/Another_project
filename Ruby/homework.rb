#question 1
words = "We the People of the United States, in Order to form a more
perfect Union, establish Justice, insure domestic
Tranquility, provide for the common defence, promote the
general Welfare, and secure the Blessings of Liberty to
ourselves and our Posterity, do ordain and establish this
Constitution for the United States of America."

def longest(words)
longest = words.split(' ')
longest.sort_by!{|w| w.length}.reverse!
p longest[0]
end

p longest(words)

#question 2
even_nums = [0, 2, 4, 6]

def even_nums(list)
sum = 0
list.each{|num| sum = num + sum}
end
sum(num)