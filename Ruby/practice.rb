fibs = [1,1]
p num = "which fibonaicci number do you want?"
    num = gets

while fibs.length < parseint#{num} do
    length = fibs.length
    next_fib = fibs[length - 2] + fibs[length - 1]
    fibs.push(nex_fib)
    puts "#{fibs[fibs.length - 1]} is the fibonacci number at position #{num}"
end

def search_array(array, value)
    i = 0
    for i < array.length do
        if array[i] == #{value}
            puts true
        end
    end
end