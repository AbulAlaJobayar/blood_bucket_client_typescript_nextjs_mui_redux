# Blood-Bucket Website

## Table of Contents

- [Introduction](#introduction)
- [Live URL](#live-url)
- [Features](#features)
- [Technology Used](#technology-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Blood-Bucket is a TypeScript Next.js project designed to facilitate blood donations by connecting donors with recipients. With features like creating and managing blood requests, user authentication, and an admin dashboard for managing site activity, Blood-Bucket aims to streamline the process of blood donation, ensuring that those in need can easily find willing donors and that the donation process is secure, efficient, and user-friendly.

---

## Live URL

Visit the live Blood-Bucket application at [Blood-Bucket Live](https://blood-bucket-client.vercel.app).

---

## Features

- **User Authentication**: Securely manage user access with login and registration.
- **Search Donors**: Search and filter blood donors by blood type, location, and availability.
- **Donor Profiles**: View detailed donor profiles with relevant information.
- **Request Blood**: Initiate blood donation requests with necessary details.
- **Admin Dashboard**: Manage user accounts, approve/reject blood requests, and oversee site activity.
- **User Profile Management**: Edit profile information, view blood requests made/received, and manage donation status.
- **Responsive Design**: Accessible and user-friendly on various devices (desktops, tablets, mobile phones).

---

## Technology Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: Adds static typing to JavaScript for improved code quality.
- **Material-UI (MUI)**: A popular React UI framework for building responsive and accessible designs.
- **Redux**: A predictable state container for JavaScript applications.
- **Axios**: A promise-based HTTP client for making requests to the server.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **React Hook Form**: A performant, flexible, and extensible form library for React.

---

## Setup

Follow these steps to set up the Blood-Bucket project locally:

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd blood-bucket`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root of the project.
5. Add the necessary environment variables to the `.env` file:

```plaintext
NEXT_PUBLIC_API_URL=your-api-url
