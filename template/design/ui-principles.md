# UI Principles

## Start With Intent

Start every screen from the user decision or action it supports. Do not begin by assembling components. Define the flow, state and data first.

## Design The States

Every non-trivial UI should define:

- Loading
- Empty
- Ready
- Error
- Success when completion must be confirmed

These states should be documented in the screen spec before implementation.

## Prioritize Scanning

Users should understand page purpose, current state and available primary action quickly. Use clear hierarchy, predictable placement and restrained visual styling.

## Keep Components Bounded

Components should do one job. Extract a component when it reduces real repetition or clarifies a screen. Use composables for reusable behavior rather than hiding business logic in generic UI components.

## Build Vertical Slices

Implement the smallest user-visible path that crosses the UI, state, data boundary and tests. Avoid broad infrastructure work before a specific flow needs it.
