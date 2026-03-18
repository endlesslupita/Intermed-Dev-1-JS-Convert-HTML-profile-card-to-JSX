# Assignment: Converting HTML Profile Card to JSX

## Objective

This assignment aims to provide practical experience in converting standard HTML markup into JSX syntax, which is used in React components. Understanding the differences between HTML and JSX and applying best practices in JSX will be the focus.

## Assignment Details

You are given an HTML snippet representing a simple user profile card. Your task is to convert this HTML into valid JSX that can be used within a React component. Pay special attention to JSX-specific syntax rules, such as enclosing all elements within a single parent element, using `className` instead of `class`, and ensuring all elements are properly closed.

```html
<div class="profile-card">
  <h2>User Profile</h2>
  <img src="https://example.com/user-photo.jpg" alt="User Photo" class="photo"/>
  <p>Name: Jane Doe</p>
  <p>Email: jane.doe@example.com</p>
  <a href="mailto:jane.doe@example.com">Send Email</a>
</div>
```

## Instructions

1. **Create a React Component** — Start by creating a new functional component named `UserProfile`.
2. **Convert HTML to JSX** — Inside the component's return statement, convert the given HTML snippet into JSX. Remember to replace `class` with `className` and make sure all elements are correctly closed.
3. **Encapsulate in a Single Parent** — Ensure that the JSX code is encapsulated within a single parent element. You may use a `<div>` or a React Fragment (`<>...</>`).
4. **Use JSX Expressions** — Where appropriate, replace static content with JSX expressions. For example, you could replace the user's name and email with props passed to the component.
5. **Test Your Component** — Include your component in a React application to ensure it renders correctly without errors.

## Assignment Submission

Once you have completed the assignment, please prepare the following for submission:

### GitHub Repository

- Push your program to a new GitHub repository.
- Ensure that your repository is public so that it can be accessed and reviewed.
- Your repository should include all source code files and a `README.md` file that briefly describes the project and how to run it.

### Demonstration

Provide a video demonstrating your program in action. The demonstration should include:

- Show the program's functionality.
- Present test cases and demonstrate that you are passing those cases (at least 3 normal cases and at least 3 edge cases).

### Submission

- Submit the link to your GitHub repository.
- Include a link to your video demonstration (YouTube link, public or unlisted).

------------------------------
# Vite-installed README:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
