# new_task_manger_api

## Introduction

This is my first deployed web app on AWS. I've utilized a combination of MongoDB Atlas for data storage, Node.js with Express for the web application, and Nginx for efficient AWS routing.

## Features

- **Task Management**: Users can log in to create their tasks. They can also delete tasks or even delete their user account completely.
- **Web Tokens**: The app creates web tokens allowing users to remain authenticated across different computers or phones.
- **Avatar Upload**: Users have the capability to upload and set avatars.
- **Authentication**: 
  - Robust authentication is in place ensuring the security of each user's data.
  - User passwords are securely **hashed** for added protection.
- **Task Utilities**: 
  - **Sorting**: Tasks can be sorted by their creation time.
  - **Pagination**: Supports pagination for displaying a large number of tasks.
  - **Filtering**: Users can filter tasks by their completion status.

## Current Status

The backend of the application is complete, and I'm currently working on developing the frontend. In the interim, you can interact with the API using tools like Postman. 

**API Endpoint**: [http://99.79.196.24/](http://99.79.196.24/)
