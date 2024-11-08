
// Style
import "./join-form.css";

/* FUNCTIONALITY */
const JoinForm = () => {
  return (
    <div className="join-form-container">
        <form className="join-form-content">
            <div className="join-form-input-container">
                <label className="join-form-name-title">Name:</label>
                <input required type="text" className="join-form-input-style" />
            </div>
            <div className="join-form-input-container">
                <label className="join-form-email-title">Email:</label>
                <input required type="email" className="join-form-input-style" />
            </div>
            <div className="join-form-input-container">
                <label className="join-form-password-title">Password:</label>
                <input required type="password" className="join-form-input-style" />
            </div>
        </form>
        <button type="submit" className="join-form-btn">Join Now</button>
    </div>
  )
}

export default JoinForm