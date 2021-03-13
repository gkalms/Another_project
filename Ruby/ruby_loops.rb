#Lesson 1 - Looping thur Arrays
#Example 1
nums = [1,4]
for n in nums do
p n
end

#Example 2 - different syntax cnvention to above code
nums2 = [1,5,13]
nums2.each do |n| #pipe symbol || represents a block of code receiving an argument
p n
end

#Example 3 - different syntax cnvention to above codes
nums3 = [5,23,8,19]
nums3.each {|n| p n}

#Lesson 2 - METHODS for Arrays
#empty?
nums4 = [1,4]
p nums4.empty? 

#while statement
num5 = 2
while num5 <4 do
p 'less than 4'
num5+= 1
end

#index - example 1

nums1 = [10,25,33]
nums1.each_index do |i|
p i
p nums1[i]
end

#index - example 2 - runs with index produced alongside the code result
nums6 = [16,26,36]
nums6.each.with_index do |n , index|
p n
p index
end

#push
nums7 = [1,4]
nums7.push(20, 24)
nums7 << 30
p nums7

#chomp
p 'hello'.chomp('ello')
p 'hello$/'.chomp('$/')

#strip
name1 = 'Georgie'
p name1.strip
p name1

name2 = 'Georgie'
p name2.strip!
p name2

#compact
nums8 = [2,3,4,5, nil]
p nums8.compact
p nums8

nums9 = [2,3,4,5, nil]
p nums9.compact!
p nums9

#fetch - calrify/did not work
nums10 = [2,3,4,5, nil]
p nums10.fetch (3, 'Georgie')
p nums10

#zip
a = [2,3,4]
b = [6,7,8]
p [1,2,3].zip(a,b)

#sample #random pick
nums10 = [2,3,4,5, nil]
p nums10.sample 
p nums10.sample(2)



