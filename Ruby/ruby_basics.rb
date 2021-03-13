# puts = console.log()
# console.log('Hello World!');

hello_text = 'Hello World!'
puts hello_text

puts 'Hello World'

name = 'Georgie'
#puts name


#const name = "ash"
#console log("my name is:", ash)
#console.log(`my name is: ${ash}`)

puts "Hi! Welcome to the first ruby app #{name}"

number_value = 10
string_value = 'Ash'

puts 4/2
puts 4.0/2.0

boolean_value_false = false
boolean_value_true = true

puts boolean_value_false || boolean_value_true

null_value = nil
#in jvascript would be -> const null_value = null

nums = [1,2,3]
nums2 = Array(1...10)
nums3 = Array(1..10)

puts nums2
puts nums3
puts nums

#puts 'Georgie'.size

course = {
  'name' => 'SEI Flex', 
  'batch' => "Nov 2020"
}

#p course
#puts course
#p course['name']
#puts course['name']

course2 = {
  :name => 'SEI Flex 2',
  :batch => 'Nov 2020'
}
#p course2

p :course_name # data symbol
p :course_name.object_id
p :course_name.object_id
#both above lines are the same reference

p 'course_name'.object_id
p 'course_name'.object_id
#the two above lines are different in reference

name = "georgie"
name2 = :georgie
name3 = name
name4 = name2

p 'name'.object_id
p :name2.object_id
p name3.object_id
p name4.object_id

# length or size of object
name = "Learning Ruby"
p name.length
p name.size

p 'Georgina'.size
p [1,2,3,4,5].length
p [1,2,3,4,5].size

#What type of object
p [1,2,3,4,5].class
p 'name3'.class

#converting string, integer, symbol etc to something else
p '5'.to_i #string to integer
p 5.to_s #number to string
p 5.to_f #integer to floating number
p 'georgie'.to_sym # string to symbol
