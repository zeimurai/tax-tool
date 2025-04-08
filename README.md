# tax-tool
Form 8843

## User Management Endpoints

The backend provides the following endpoints for user management and authentication using JWT. These endpoints are accessible under the `/accounts/` prefix:

- **Signup**
  - **Path:** `/accounts/signup/`
  - **Method:** POST
  - **Description:** Registers a new user. Requires a JSON payload with `username` and `password`.
  - **Response:** Returns a success message along with the JWT `access` and `refresh` tokens.
  
- **Login**
  - **Path:** `/accounts/login/`
  - **Method:** POST
  - **Description:** Authenticates a user and provides JWT tokens. Requires a JSON payload with valid credentials.
  - **Response:** Returns the JWT `access` and `refresh` tokens.

- **Logout**
  - **Path:** `/accounts/logout/`
  - **Method:** POST
  - **Description:** Logs out an authenticated user by blacklisting the provided refresh token. Requires a JSON payload with the `refresh` token.
  - **Response:** Returns a success message once the token is blacklisted.

- **Token Refresh**
  - **Path:** `/accounts/refresh/`
  - **Method:** POST
  - **Description:** Generates a new access token using a valid refresh token.
  - **Response:** Returns a new JWT access token.

All endpoints, except for Signup and Login, require JWT authentication.
