Alphabet = [a: 1, b: 2, c: 3, d: 4]
#Hash = Data structure = stores data in key-value pairs
#Not an array - there i sno index
# a = key, 1 = value; key: value pairs separated by commas
# to add new values
Alphabet[:e]=5
Alphabet[:d]
Alphabet.fetch(:d,0)
Alphabet.sort #Sorting
Alphabet.sort_by(&:last) #sorting by value. Note: creates array

#Multiple values one key
dictionary = {
  opportunity: [
    "a set of circumstances that makes it possible to do something",
    "a situation or condition favorable for attainment of a goal"
  ],
  creativity: [
    "the use of imagination or original ideas to create something new",
    "the ability to create",
    "the process where new ideas emerge from combining existing ideas in new ways"
  ]
}
dictionary[:creativity][1] #to access a value - we 'organise' data into arrow then access via index. The definitions of creativity - values - form the array content