import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ ...this.state, redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. What are we going to do? JK.{" "}
          <Link to="/">Click here</Link> to go back to the homepage. Or wait for
          5 seconds and we will do it for you. Or not. I am not your mom
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
