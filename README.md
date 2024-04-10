# DataNeuron Backend API


## Base URL

The API is currently deployed at: [https://dataneuron-backend-4y9j.onrender.com/](https://dataneuron-backend-4y9j.onrender.com/)

## Endpoints

### 1. Get Data

- **Endpoint:** `/user/`
- **Method:** `GET`
- **Description:** Fetches all the data entries from the backend.
- **Response:** An array of data objects.

### 2. Create Data

- **Endpoint:** `/user/post`
- **Method:** `POST`
- **Description:** Adds a new data entry.
- **Body:**
  ```json
  {
    "content": "Sample data",

  }
- **Response:** An array of data objects.

### 3. Update Data

- **Endpoint:** `/user/update/${id}`
- **Method:** `PATCH`
- **Description:** Update the Existing data.
- **Body:**
  ```json
  {
    "content": "Additional Updated information"
  }
- **Response:**  The updated data object.

### 4. Get Count
- **Endpoint:**  `/user/count`
- **Method:** `GET`
- **Description:** Retrieves the count of add and update operations performed.
- **Body:**
  ```json
  {
    "add": 5,
    "update": 3
  }
- **Response:**  Get the updated Counts of operations.


## Deployed Backend

This setup ensures a seamless flow for managing and tracking data entries through a simple and intuitive API.
