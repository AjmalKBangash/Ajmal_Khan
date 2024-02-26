import "./SignUpIn.css";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// REACT ICONS
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  // username: yup
  //   .string()
  //   .required("Username is required")
  //   .min(4, "username is incorrect")
  //   .max(20, "username is incorrect")
  //   .matches(/^[\S]+(?:[\s][\S]+)*$/, "Invalid username format"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Your password is incorrect")
    .required("Password is required"),
  // confirm_password: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm Password is required"),
});

const SignIn = () => {
  const [spinner, setSpinner] = useState(false);
  const [signInData, setSignInData] = useState(false);
  const [accNotVer, setAccNotVer] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    setSpinner(true);
    setSignInData(data);
    // reset();
  };
  useEffect(() => {
    if (signInData) {
      axios
        .post("core/simple/token/", signInData)
        .then((res) => {
          setSpinner(false);
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          setSignInData(false);
          setAccNotVer(false);
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
          setSignInData(false);
          if (err.response.data.error) {
            setAccNotVer("Please verify your account here!");
          }
        });
    }
  }, [signInData]);
  return (
    <div className="sign-up-form-top">
      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        <div
          className="sign-up-div"
          style={{
            margin: "3% auto",
            width: "fit-content",
          }}
        >
          <img height={"40px"} src="Media/Med-logo.png" alt="logo-img"></img>
        </div>
        {/* <div
          className="sign-up-div"
          style={{
            margin: "2% 6%",
            width: "fit-content",
            fontFamily: '"Anton", sans-serif',
            fontSize: "22px",
            color: "#00284b",
          }}
        >
          Sign Up
        </div> */}
        {/* <div className="sign-up-div">
          <div className="sign-up-icn_inpt">
            <IoPersonCircleSharp
              style={{ fontSize: "20px", color: "#00284b", marginRight: "4px" }}
            />
            <input {...register("username")} placeholder="User Name" />
          </div>
          {errors.username && (
            <p className="errorr">{errors.username?.message}</p>
          )}
        </div> */}
        <div className="sign-up-div">
          <div className="sign-up-icn_inpt">
            <MdMarkEmailRead
              style={{ fontSize: "20px", color: "#00284b", marginRight: "4px" }}
            />
            <input {...register("email")} placeholder="Email" />
          </div>{" "}
          {errors.email && <p className="errorr">{errors.email?.message}</p>}
        </div>
        <div className="sign-up-div">
          {/* <label>Password</label> */}
          <div className="sign-up-icn_inpt">
            <RiLockPasswordFill
              style={{ fontSize: "20px", color: "#00284b", marginRight: "4px" }}
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="errorr">{errors.password?.message}</p>
          )}
        </div>
        <div className="sign-up-div">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            {...register("rememberMe")}
            style={{
              marginRight: "8px",
              height: "15px",
              border: "1px solid red",
              width: "fit-content",
              cursor: "pointer",
            }}
          />
          <label style={{ cursor: "pointer" }} htmlFor="rememberMe">
            Remember Me
          </label>
        </div>
        <div className="sign-up-div">
          <button className="sign-up-btn" type="submit">
            {spinner ? <Loading data={"one"} /> : "Sign In"}
          </button>
          {accNotVer && (
            <p
              className="errorr plz-verify-account"
              onClick={() => navigate("/confirming-email")}
            >
              {accNotVer}
              {/* <span className="verify">Verify!</span> */}
            </p>
          )}
        </div>
        <div className="sign-up-div" style={{ margin: "3% 12%" }}>
          <p
            className="sign-up-already-account"
            onClick={() => navigate("/sign-up")}
          >
            Do not have an account?
          </p>
        </div>{" "}
        <div className="sign-up-div" style={{ margin: "3% 12%" }}>
          <p
            className="sign-up-already-account"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password!
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
