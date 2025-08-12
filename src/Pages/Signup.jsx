const Signup = () => {
  return (
    <form action="">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
// This code defines a simple Signup component that renders a form with fields for name, email, and password, along with a submit button.
// The form does not have any functionality attached to it, so it will not submit or perform any actions when the button is clicked.
// You can enhance this component by adding state management, form validation, and submission handling as needed
