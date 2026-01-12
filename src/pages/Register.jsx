import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const { createUser, setLoginer, upDateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setError("Name must be more than five digits");
      return;
    } else {
      setError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setPassError("Password should be more than 6 characters");
      return;
    } else {
      setPassError("");
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        alert("User successfully created");
        navigate("/");
        upDateUser({ displayName: name, photoURL: photo }).then(() => {
          setLoginer({ ...user, displayName: name, photoURL: photo });
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoginer(user);
      });
    // console.log(name, photo, email, password);
  };
  return (
    <div className="card bg-base-100 w-full p-3  max-w-sm my-14 mx-auto shrink-0 shadow-2xl">
      <h2 className="text-2xl font-semibold text-center b-5">
        Register your account
      </h2>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="name"
            required
            name="name"
            className="input"
            placeholder="Name"
          />

          {error && <p className="text-red-500">{error}</p>}

          {/* photo url */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
            required
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          {passError && <p className="text-red-500">{passError}</p>}
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <p className="font-semibold my-2">
            Allready Have An Account ? Please{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
