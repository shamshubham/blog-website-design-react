# Blog website design using react

This is a simple blog application which shows a simple blog website structure created with the help of react. The website helps all users to read the post, create a new post by registered user.

## Features

- Home page displaying a list of blog posts
- About page providing information about the website
- Contact page for contacting the website owner
- Write page for writing new blog posts (accessible only to logged-in users)
- Login and Registration pages for user authentication

## Technologies Used

- React
- React Router for navigation
- CSS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Navigate to the project directory:

  ```bash
  cd simple-blog-website-react
  ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 to view the website in the browser.

## Folder Structure

```
- src
  - components
    - header
      - header.css
      - Header.jsx
    - post
      - post.css
      - Post.jsx
    - posts
      - posts.css
      - Posts.jsx
    - sidebar
      - sidebar.css
      - Sidebar.jsx
    - singlePost
      - singlePost.css
      - singlePost.jsx
    - topbar
      - topbar.css
      - Topbar.jsx
  - pages
    - home
      - home.css
      - Home.jsx
    - login
      - login.css
      - Login.jsx
    - register
      - register.css
      - Register.jsx
    - settings
      - settings.css
      - Settings.jsx
    - single
      - single.css
      - single.jsx
    - write
      - write.css
      - Write.jsx
  - App.js
  - index.js

```

## Dependencies

- react-router-dom: Framework for react routing

## Contributing

Contributions are welcome! If you find any issues or want to contribute enhancements, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
