array = []

for i in (1..5000) 
    if (i%2 == 0)
    else 
        array.push(i)
    end
end

p array.sum
