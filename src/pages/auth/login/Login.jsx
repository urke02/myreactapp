import Buttons from "../../../components/button/Buttons";
import LoginForm from "../../../components/forms/login/LoginForm";

export default function Login() {
  return (
    <section className="section py-12">
      <div className="container">
        <h1 className="h1">Login Form</h1>

        <LoginForm /><br/>
        <Buttons />
      </div>
    </section>
  )
}
