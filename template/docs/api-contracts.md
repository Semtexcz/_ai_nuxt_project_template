# API Contracts

Document API expectations before implementation when a screen depends on server data.

## Contract Template

### Endpoint

`GET /api/example`

### Purpose

Describe the screen or flow this endpoint supports.

### Request

- Route params:
- Query params:
- Body:
- Auth requirements:

### Response

```json
{
  "status": "ok"
}
```

### Error States

- `400`: invalid input
- `401`: unauthenticated
- `403`: forbidden
- `404`: resource not found
- `500`: unexpected server failure

## Existing Endpoints

### `GET /api/health`

Returns a simple health response for smoke tests and deployment checks.
