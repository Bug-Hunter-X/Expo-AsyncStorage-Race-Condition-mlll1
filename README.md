# Expo AsyncStorage Race Condition

This repository demonstrates a common race condition when using AsyncStorage in Expo and provides a solution.

## Bug

Attempting to access AsyncStorage before it's fully initialized can result in unexpected behavior or app crashes.  The `bug.js` file reproduces this issue.

## Solution

The `bugSolution.js` file presents a solution that uses a Promise to ensure AsyncStorage is ready before accessing it. This prevents the race condition and makes the code more robust.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the `bug.js` example and observe the error.
4. Run the `bugSolution.js` example to see the corrected behavior.