# User Flow: <Flow Name>

## Goal

State the user outcome in one sentence.

## Actor

Name the persona or user role that performs this flow.

## Preconditions

- The user has access to the application.
- Required data or permissions are available.

## Main Flow

1. User opens the relevant screen.
2. System shows the default state.
3. User performs the primary action.
4. System validates input or intent.
5. System confirms the outcome.

## Screen States

- Loading: what the user sees while data is being fetched.
- Empty: what the user sees when there is no data.
- Ready: what the user sees when the flow can proceed.
- Error: what the user sees when the flow cannot continue.
- Success: what confirms completion.

## Data Requirements

- Inputs needed from the user.
- Data loaded from APIs.
- Data persisted or sent to APIs.

## Acceptance Criteria

- The flow can be completed from the default screen state.
- Loading, empty and error states are visible and accessible.
- The implementation includes tests when practical.
