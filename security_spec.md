# Firebase Security Specification - AURX Frameworks

## Data Invariants
- Users can only read and write their own profile records.
- Leads can be created by anyone (public), but can only be read by admins.
- Timestamps (`createdAt`, `updatedAt`) must be server-synced.
- String fields must have strict size limits to prevent resource exhaustion attacks.

## The Dirty Dozen Payloads (Target: /users/{userId})

1. **Identity Spoofing**: Attempt to create a user profile with a `userId` that doesn't match `request.auth.uid`.
2. **PII Leak**: Attempt to read another user's email or private info.
3. **Mass Assignment**: Attempt to update a field not in the whitelist (e.g., `isAdmin: true`).
4. **Invalid Type**: Attempt to set `displayName` to an array or boolean.
5. **Overlong String**: Attempt to set `displayName` to a 1MB string.
6. **Time Spoofing**: Attempt to set `updatedAt` to a past date instead of `request.time`.
7. **Phantom Doc**: Attempt to write to a collection not defined in the blueprint.
8. **Invalid ID**: Attempt to use an ID with special characters or over 128 characters.
9. **Update Gap**: Attempt to update `createdAt` (should be immutable).
10. **Shadow Key**: Attempt to add a field like `role` during creation when the schema doesn't allow it.
11. **Negative Size**: Attempt to send an empty object when fields are required.
12. **Email Verification Bypass**: Attempt to write as a user whose email is not verified (if required).

## Success Criteria
- All "Dirty Dozen" payloads must be REJECTED with `PERMISSION_DENIED`.
- Final `firestore.rules` must pass the Red Team Audit.
