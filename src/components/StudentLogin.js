// import React, { useState, useEffect } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import Modal from "./Modal"; // Assuming you have a modal component

// const StudentLogin = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalContent, setModalContent] = useState("");

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       alert("You already Logged in!");
//       navigate("/courses");
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError("");
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setFormData((prev) => ({ ...prev, phone: value }));
//       setError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
//     const phoneRegex = /^\d{10}$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

//     if (isLogin) {
//       if (!formData.username || !formData.password) {
//         setError("Username and Password are required");
//         return;
//       }

//       const foundUser = users.find(
//         (u) =>
//           u.username === formData.username &&
//           u.password === formData.password
//       );

//       if (foundUser) {
//         localStorage.setItem("loggedInUser", formData.username);
//         navigate("/courses");
//       } else {
//         setError("Invalid credentials");
//       }
//     } else {
//       const { username, email, phone, password, confirmPassword } = formData;

//       if (!username || !email || !phone || !password || !confirmPassword) {
//         setError("All fields are required");
//         return;
//       }

//       if (!usernameRegex.test(username)) {
//         setError(
//           "Username must be 3-20 characters, only letters, numbers, and underscores."
//         );
//         return;
//       }

//       if (!emailRegex.test(email)) {
//         setError("Invalid email format.");
//         return;
//       }

//       if (!phoneRegex.test(phone)) {
//         setError("Phone number must be exactly 10 digits.");
//         return;
//       }

//       if (!passwordRegex.test(password)) {
//         setError(
//           "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character."
//         );
//         return;
//       }

//       if (password !== confirmPassword) {
//         setError("Passwords do not match");
//         return;
//       }

//       const userExists = users.some((u) => u.username === username);
//       if (userExists) {
//         setError("Username already exists");
//         return;
//       }

//       const newUser = {
//         username,
//         email,
//         phone,
//         password,
//       };

//       localStorage.setItem("users", JSON.stringify([...users, newUser]));
//       setIsLogin(true);
//       setError("");
//       setFormData({
//         username: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//       });
//     }
//   };

//   const openModal = (title, content) => {
//     setModalTitle(title);
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const TERMS_CONTENT = `
//     1. Acceptance of Terms
//     By accessing or using our services, you agree to be bound by these Terms and Conditions.

//     2. Registration and Classes
//     Students are expected to arrive on time for classes and adhere to proper attire.

//     3. Payment and Refunds
//     Tuition is non-refundable except in cases of serious illness or injury.

//     4. Make-up Classes and Cancellations
//     Missed classes can be made up within the same term.

//     5. Photography and Videography
//     DanceWave Academy reserves the right to use photographs and videos for promotional purposes.

//     6. Conduct and Liability
//     Participation in dance classes involves physical activity, and you acknowledge the risks involved.

//     7. Privacy Policy
//     We will not share your personal information without your consent, except as required by law.

//     8. Changes to Terms
//     These terms may be modified at any time, and it is your responsibility to stay updated.
//   `;

//   const PRIVACY_CONTENT = `
//     1. Information Collection
//     We collect personal information to provide our services.

//     2. Cookies
//     Our website uses cookies to enhance your experience.

//     3. Data Sharing
//     We do not share your personal data without consent, except as required by law.

//     4. User Rights
//     You have the right to access, modify, or delete your personal data at any time.

//     5. Security
//     We employ security measures to protect your data, but cannot guarantee complete security.
//   `;

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">
//         <div className="toggle-buttons">
//           <button
//             className={isLogin ? "active" : ""}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             className={!isLogin ? "active" : ""}
//             onClick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>

//         <h2 className="auth-title">
//           {isLogin ? "Welcome Back" : "Create an Account"}
//         </h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {!isLogin && (
//             <>
//               <input
//                 name="email"
//                 placeholder="Email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 maxLength={10}
//               />
//             </>
//           )}
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {!isLogin && (
//             <input
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           )}

//           {isLogin && (
//             <div className="form-options">
//               <label>
//                 <input type="checkbox" />
//                 Remember me
//               </label>
//               <a href="/student/forgot-password">Forgot password?</a>
//             </div>
//           )}

//           {error && <div className="error">{error}</div>}

//           <button type="submit" className="submit-btn">
//             {isLogin ? "Sign In" : "Create Account"}
//           </button>
//         </form>

//         <div className="or-divider">— or continue with —</div>
//         <div className="social-buttons">
//           <button className="google">Google</button>
//           <button className="facebook">Facebook</button>
//         </div>

//         {!isLogin && (
//           <p className="terms-text">
//             By signing up, you agree to our{" "}
//             <button
//               type="button"
//               className="link-button"
//               onClick={() => openModal("Terms of Service", TERMS_CONTENT)}
//             >
//               Terms of Service
//             </button>{" "}
//             and{" "}
//             <button
//               type="button"
//               className="link-button"
//               onClick={() => openModal("Privacy Policy", PRIVACY_CONTENT)}
//             >
//               Privacy Policy
//             </button>
//             .
//           </p>
//         )}
//       </div>

//       <Modal
//         show={showModal}
//         title={modalTitle}
//         content={modalContent}
//         onClose={closeModal}
//       />
//     </div>
//   );
// };

// export default StudentLogin;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import Modal from "./Modal";

// const StudentLogin = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalContent, setModalContent] = useState("");

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       const pendingBooking = localStorage.getItem('pendingBooking');
//       navigate(pendingBooking ? '/courses' : '/courses');
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError("");
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setFormData((prev) => ({ ...prev, phone: value }));
//       setError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
//     const phoneRegex = /^\d{10}$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

//     if (isLogin) {
//       if (!formData.username || !formData.password) {
//         setError("Username and Password are required");
//         return;
//       }

//       const foundUser = users.find(
//         (u) =>
//           u.username === formData.username &&
//           u.password === formData.password
//       );

//       if (foundUser) {
//         localStorage.setItem("loggedInUser", formData.username);
//         const hasPendingBooking = localStorage.getItem('pendingBooking');
//         navigate(hasPendingBooking ? '/courses' : '/courses');
//       } else {
//         setError("Invalid credentials");
//       }
//     } else {
//       const { username, email, phone, password, confirmPassword } = formData;

//       if (!username || !email || !phone || !password || !confirmPassword) {
//         setError("All fields are required");
//         return;
//       }

//       if (!usernameRegex.test(username)) {
//         setError(
//           "Username must be 3-20 characters, only letters, numbers, and underscores."
//         );
//         return;
//       }

//       if (!emailRegex.test(email)) {
//         setError("Invalid email format.");
//         return;
//       }

//       if (!phoneRegex.test(phone)) {
//         setError("Phone number must be exactly 10 digits.");
//         return;
//       }

//       if (!passwordRegex.test(password)) {
//         setError(
//           "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character."
//         );
//         return;
//       }

//       if (password !== confirmPassword) {
//         setError("Passwords do not match");
//         return;
//       }

//       const userExists = users.some((u) => u.username === username);
//       if (userExists) {
//         setError("Username already exists");
//         return;
//       }

//       const newUser = {
//         username,
//         email,
//         phone,
//         password,
//       };

//       localStorage.setItem("users", JSON.stringify([...users, newUser]));
//       setIsLogin(true);
//       setError("");
//       setFormData({
//         username: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//       });
//     }
//   };

//   const openModal = (title, content) => {
//     setModalTitle(title);
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const TERMS_CONTENT = `
//     1. Acceptance of Terms
//     By accessing or using our services, you agree to be bound by these Terms and Conditions.

//     2. Registration and Classes
//     Students are expected to arrive on time for classes and adhere to proper attire.

//     3. Payment and Refunds
//     Tuition is non-refundable except in cases of serious illness or injury.

//     4. Make-up Classes and Cancellations
//     Missed classes can be made up within the same term.

//     5. Photography and Videography
//     DanceWave Academy reserves the right to use photographs and videos for promotional purposes.

//     6. Conduct and Liability
//     Participation in dance classes involves physical activity, and you acknowledge the risks involved.

//     7. Privacy Policy
//     We will not share your personal information without your consent, except as required by law.

//     8. Changes to Terms
//     These terms may be modified at any time, and it is your responsibility to stay updated.
//   `;

//   const PRIVACY_CONTENT = `
//     1. Information Collection
//     We collect personal information to provide our services.

//     2. Cookies
//     Our website uses cookies to enhance your experience.

//     3. Data Sharing
//     We do not share your personal data without consent, except as required by law.

//     4. User Rights
//     You have the right to access, modify, or delete your personal data at any time.

//     5. Security
//     We employ security measures to protect your data, but cannot guarantee complete security.
//   `;

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">
//         <div className="toggle-buttons">
//           <button
//             className={isLogin ? "active" : ""}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             className={!isLogin ? "active" : ""}
//             onClick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>

//         <h2 className="auth-title">
//           {isLogin ? "Welcome Back" : "Create an Account"}
//         </h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {!isLogin && (
//             <>
//               <input
//                 name="email"
//                 placeholder="Email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 maxLength={10}
//               />
//             </>
//           )}
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {!isLogin && (
//             <input
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           )}

//           {isLogin && (
//             <div className="form-options">
//               <label>
//                 <input type="checkbox" />
//                 Remember me
//               </label>
//               <a href="/student/forgot-password">Forgot password?</a>
//             </div>
//           )}

//           {error && <div className="error">{error}</div>}

//           <button type="submit" className="submit-btn">
//             {isLogin ? "Sign In" : "Create Account"}
//           </button>
//         </form>

//         <div className="or-divider">— or continue with —</div>
//         <div className="social-buttons">
//           <button className="google">Google</button>
//           <button className="facebook">Facebook</button>
//         </div>

//         {!isLogin && (
//           <p className="terms-text">
//             By signing up, you agree to our{" "}
//             <button
//               type="button"
//               className="link-button"
//               onClick={() => openModal("Terms of Service", TERMS_CONTENT)}
//             >
//               Terms of Service
//             </button>{" "}
//             and{" "}
//             <button
//               type="button"
//               className="link-button"
//               onClick={() => openModal("Privacy Policy", PRIVACY_CONTENT)}
//             >
//               Privacy Policy
//             </button>
//             .
//           </p>
//         )}
//       </div>

//       <Modal
//         show={showModal}
//         title={modalTitle}
//         content={modalContent}
//         onClose={closeModal}
//       />
//     </div>
//   );
// };

// export default StudentLogin;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Modal from "./Modal";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate('/courses');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, phone: value }));
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (isLogin) {
      if (!formData.username || !formData.password) {
        setError("Username and Password are required");
        return;
      }

      const foundUser = users.find(
        (u) =>
          u.username === formData.username.trim() &&
          u.password === formData.password
      );

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify({
          username: foundUser.username,
          email: foundUser.email
        }));
        const hasPendingBooking = localStorage.getItem('pendingBooking');
        navigate(hasPendingBooking ? '/courses' : '/courses');
      } else {
        setError("Invalid credentials");
      }
    } else {
      const { username, email, phone, password, confirmPassword } = formData;

      if (!username || !email || !phone || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (!usernameRegex.test(username)) {
        setError(
          "Username must be 3-20 characters, only letters, numbers, and underscores."
        );
        return;
      }

      if (!emailRegex.test(email)) {
        setError("Invalid email format.");
        return;
      }

      if (!phoneRegex.test(phone)) {
        setError("Phone number must be exactly 10 digits.");
        return;
      }

      if (!passwordRegex.test(password)) {
        setError(
          "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character."
        );
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const userExists = users.some((u) => u.username === username.trim());
      if (userExists) {
        setError("Username already exists");
        return;
      }

      const newUser = {
        username: username.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: password.trim(),
      };

      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      
      // Automatically log in new user
      localStorage.setItem("loggedInUser", JSON.stringify({
        username: newUser.username,
        email: newUser.email
      }));
      
      navigate('/courses');
    }
  };

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const TERMS_CONTENT = `
    1. Acceptance of Terms
    By accessing or using our services, you agree to be bound by these Terms and Conditions.

    2. Registration and Classes
    Students are expected to arrive on time for classes and adhere to proper attire.

    3. Payment and Refunds
    Tuition is non-refundable except in cases of serious illness or injury.

    4. Make-up Classes and Cancellations
    Missed classes can be made up within the same term.

    5. Photography and Videography
    DanceWave Academy reserves the right to use photographs and videos for promotional purposes.

    6. Conduct and Liability
    Participation in dance classes involves physical activity, and you acknowledge the risks involved.

    7. Privacy Policy
    We will not share your personal information without your consent, except as required by law.

    8. Changes to Terms
    These terms may be modified at any time, and it is your responsibility to stay updated.
  `;

  const PRIVACY_CONTENT = `
    1. Information Collection
    We collect personal information to provide our services.

    2. Cookies
    Our website uses cookies to enhance your experience.

    3. Data Sharing
    We do not share your personal data without consent, except as required by law.

    4. User Rights
    You have the right to access, modify, or delete your personal data at any time.

    5. Security
    We employ security measures to protect your data, but cannot guarantee complete security.
  `;

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="toggle-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <h2 className="auth-title">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {!isLogin && (
            <>
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={10}
              />
            </>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {!isLogin && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          {isLogin && (
            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/student/forgot-password">Forgot password?</a>
            </div>
          )}

          {error && <div className="error">{error}</div>}

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="or-divider">— or continue with —</div>
        <div className="social-buttons">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>

        {!isLogin && (
          <p className="terms-text">
            By signing up, you agree to our{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => openModal("Terms of Service", TERMS_CONTENT)}
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => openModal("Privacy Policy", PRIVACY_CONTENT)}
            >
              Privacy Policy
            </button>
            .
          </p>
        )}
      </div>

      <Modal
        show={showModal}
        title={modalTitle}
        content={modalContent}
        onClose={closeModal}
      />
    </div>
  );
};

export default StudentLogin;