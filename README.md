# Node.js Server Crash on Large POST Requests

This repository demonstrates a common issue in Node.js servers where they fail to handle large POST requests gracefully.  The server crashes due to exceeding the default buffer size.

## Problem

The provided `bug.js` file showcases a server vulnerable to crashes when receiving large POST requests.  The request data is processed using the `'data'` event, but crucial error handling for large requests is missing.  The solution addresses this by aggregating the incoming data and implementing proper error handling.

## Solution

The solution is provided in `bugSolution.js`. It addresses the problem by using the stream's `'data'` and `'end'` events properly and combining the received chunks to handle larger requests.  This prevents buffer overflows and ensures the server continues running even with large incoming data.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js`.
4. Use a tool like `curl` or `Postman` to send a large POST request to `http://localhost:3000`.  Observe the server's response.
5. Repeat steps 2-4 using `node bugSolution.js` and compare the behaviour.
