#select (alias for 'filter' in javascript)
new_arr = [1,2,3,4,5]
p new_arr.select {|num| num>3}
p new_arr.filter {|num| num%2==0} #better to use select in Ruby


#detect
p new_arr.detect {|num| num > 2}
p new_arr.detect {|num| num == 3}

#reject
p new_arr.reject {|num| num > 3}

name_arr =["Chelsie", "Nicole", "Ash", "Stacey", "Vathsala"]
p name_arr.sort
p name_arr.sort.reverse
p name_arr.sort_by{|name| name.length}
p name_arr.sort_by{|name| name.length}.reverse



