#!/usr/bin/env python3

'''
statetrans.py : A simple demonstration of the state-transition matrix in Part 11 of 
The Extended Kalman Filter: An Interactive Tutorial for Non-Experts

Requires: NumPy, matplotlib

Copyright (C) 2016 Simon D. Levy

statetrans.py is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

BreezySTM32 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

For details see <http://www.gnu.org/licenses/>.
'''

import numpy as np
import matplotlib.pyplot as plt

# Arbitrary constants
TIMESTEP    = 1
ACCEL       = 10
ITERATIONS  = 100

# State vector
x = np.array([0,0,ACCEL])

# State transition matrix
a = np.array([[1, TIMESTEP,0], 
              [0, 1,       TIMESTEP], 
              [0, 0,       1]])

# Distances over time
d = np.zeros(ITERATIONS)

# Run the system for the specified number of iterations
for t in range(ITERATIONS):
    x = np.dot(a, x)
    d[t] = x[0]

# Plot distance over time
plt.plot(d)
plt.xlabel('Time')
plt.ylabel('Distance')
plt.show()
