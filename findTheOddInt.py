# Find The Oddd Int 6 Kyu Codewars
# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

def find_it(seq):
    length_of_seq = len(seq)
    
    for i in range(0,length_of_seq):
        count = 0
        for j in range(0, length_of_seq):
            if seq[i] == seq[j]:
                count+=1

        if(count % 2 !=0):
            return seq[i]