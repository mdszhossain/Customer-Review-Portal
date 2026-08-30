# Customer Review Portal

A Node.js + Express + MongoDB web application for managing shops, users, and customer reviews. The app allows authenticated users to create shops, view shops in an admin panel, and generate QR links for review forms.

## Features

- User signup and signin with Passport authentication
- Admin dashboard for managing shops
- Create and delete shops
- Customer review form submission
- Review summary page with total reviews and average rating
- QR code generation for review form links
- EJS-based frontend views

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templates
- Passport.js + passport-local-mongoose
- Joi validation
- qrcode package

## Project Structure

```text
Customer-Review-Portal/
├── controller/
│   ├── adminController.js
│   ├── reviewController.js
│   ├── reviewFormController.js
│   ├── shopController.js
│   └── userController.js
├── db/
│   └── connectDB.js
├── middlewares/
│   ├── isAuthentication.js
│   ├── validateReview.js
│   ├── validateSignin.js
│   └── validateSignup.js
├── models/
│   ├── reviewModel.js
│   ├── shopModel.js
│   └── userModel.js
├── public/
│   ├── css/
│   └── js/
├── routes/
│   ├── adminRouter.js
│   ├── reviewerRouter.js
│   ├── reviewRouter.js
│   ├── shopRouter.js
│   └── userRouter.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── validation/
│   ├── reviewValidation.js
│   ├── signinValidation.js
│   └── signupValidation.js
├── views/
│   ├── adminPanel.ejs
│   ├── createShop.ejs
│   ├── reviewForm.ejs
│   ├── reviewPage.ejs
│   ├── signin.ejs
│   ├── signinError.ejs
│   ├── signup.ejs
│   ├── signupSuccess.ejs
│   ├── successPage.ejs
│   ├── qrcode.ejs
│   ├── includes/
│   └── layout/
├── .env
├── package.json
├── server.js
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a reachable MongoDB instance
- npm installed

## Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
SESSION_SECRET_KEY=your_session_secret
```

The app currently connects to MongoDB using this local URL in [db/connectDB.js](db/connectDB.js):

```js
mongodb://127.0.0.1:27017/customerReviewPortal
```

## Running the Project

Start the server:

```bash
node server.js
```

Then open the app in a browser:

```text
http://localhost:3000/crp/signin
```

## Authentication Flow

The project uses Passport Local strategy for:

- signup
- signin
- signout
- session-based authentication

Routes for authentication are defined in [routes/userRouter.js](routes/userRouter.js).

## Routes Overview

### User routes

- `GET /crp/signup` — show signup page
- `POST /crp/signup` — register a user
- `GET /crp/signin` — show signin page
- `POST /crp/signin` — login user
- `GET /crp/signinError` — signin error page
- `POST /crp/signout` — log out user

### Admin routes

- `GET /crp/adminPanel` — show shop list for logged-in user

### Shop routes

- `GET /crp/createShop` — render create shop page
- `POST /crp/createShop` — create new shop
- `DELETE /crp/deleteShop/:id` — delete shop

### Review routes

- `GET /crp/adminPanel/:id/reviews` — render review page for a shop

### Reviewer routes

- `GET /crp/:id/reviewForm` — render review form
- `POST /crp/:id/reviewForm` — submit review
- `GET /crp/:id/qrcode` — generate QR code for review form URL

## Models

### User

Defined in [models/userModel.js](models/userModel.js)

Fields:
- `fullName`
- `email`
- `phone`
- Passport local auth fields added by plugin

### Shop

Defined in [models/shopModel.js](models/shopModel.js)

Fields:
- `shopname`
- `shoplocation`
- `userId`

### Review

Defined in [models/reviewModel.js](models/reviewModel.js)

Fields:
- `star`
- `message`
- `customerName`
- `phone`
- `shopId`

## Main Controllers

- [controller/userController.js](controller/userController.js) — signup, signin, signout logic
- [controller/adminController.js](controller/adminController.js) — load admin panel and shops
- [controller/shopController.js](controller/shopController.js) — create and delete shops
- [controller/reviewController.js](controller/reviewController.js) — display shop reviews and analytics
- [controller/reviewFormController.js](controller/reviewFormController.js) — render and submit review forms

## Validation

Validation logic is implemented in [middlewares](middlewares) and [validation](validation):

- signup validation
- signin validation
- review validation

## Notes

- The app uses Express 5 and EJS templates.
- The current project is structured around a single admin user workflow.
- QR generation uses the `qrcode` package.
- The app does not currently include a dedicated test script in [package.json](package.json).

## Future Improvements

- Add proper dashboard filters and pagination
- Add review edit/delete functionality
- Add admin role support
- Improve QR code styling and download option
- Add API endpoints for frontend separation
- Add automated tests

## License

This project is licensed under ISC.
