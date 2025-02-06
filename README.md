# React useEffect Cleanup Issue with setInterval

This example demonstrates a common issue in React's `useEffect` hook when using `setInterval`.  The problem arises from not properly managing the interval ID within the cleanup function, potentially leading to memory leaks and unexpected behavior.

## The Bug

The original code creates a `setInterval` within the `useEffect` hook. However, the `intervalId` is not updated when the component re-renders, resulting in multiple intervals running concurrently and causing memory leaks.  The `setCount` function also captures the state from a previous render, leading to stale closures.

## The Solution

The solution uses a useRef hook to store the interval ID.  This ensures the cleanup function always clears the most recently created interval, addressing the memory leak.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the rapidly increasing counter indicating multiple intervals running concurrently.
