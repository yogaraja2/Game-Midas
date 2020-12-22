import React from "react";
import { Grid, Hidden, TextField } from "@material-ui/core";
import LinkButton from "../../components/LinkButton";

function Login() {
  return (
    <Grid container className="login-wrapper">
      <Grid item xs={12} sm={2} md={4} className="login-splash-sec">
        <div className="login-splash"></div>
      </Grid>

      <Grid item xs={12} sm={10} md={8} className="login-box-sec">
        <div className="login-box-wrap">
          <div className="header-sec">
            <h3 className="main-head">Welcome to Midas</h3>
            <div className="sign-up-sec">
              <div className="cont">new Here?</div>
              <LinkButton className="signup-btn">Create an Account</LinkButton>
            </div>
          </div>

          <form className="field-wrap">
            <TextField className="login-field email-field"/>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
