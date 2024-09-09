// import React from "react";
// import "../App.css";

// const Signup = ({ signupHandler, switchToLogin }) => {
//   return (
//     <div className="signupMainDiv">
//       <div className="card z-depth-5">
//         <div className="card-content blue darken-2 white-text">
//           <p className="flow-text center-align">Sign Up</p>
//         </div>
//         <div className="card-content">
//           <div id="signup">
//             <div className="row">
//               <form onSubmit={signupHandler} className="col s12">
//                 <div className="row">
//                   <div className="input-field col s12">
//                     <i className="material-icons prefix">person</i>
//                     <input id="name" type="text" name="nameVal" />
//                     <label htmlFor="name">Name</label>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="input-field col s12">
//                     <i className="material-icons prefix">email</i>
//                     <input id="signupEmail" type="email" name="emailVal" />
//                     <label htmlFor="signupEmail">Email</label>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="input-field col s12">
//                     <i className="material-icons prefix">lock</i>
//                     <input id="signupPassword" type="password" name="passVal" />
//                     <label htmlFor="signupPassword">Password</label>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn waves-effect waves-light pink right"
//                 >
//                   Sign Up
//                   <i className="material-icons right">send</i>
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="row">
//             <p className="center-align">
//               Already have an account?{" "}
//               <button
//                 onClick={switchToLogin}
//                 className="transparent-btn blue-text"
//               >
//                 Login
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import "../App.css";
const Signup = ({ signupHandler, switchToLogin, loginWithGoogle }) => {
  return (
    <div className="signupMainDiv">
      <div className="card z-depth-5">
        <div className="card-content blue darken-2 white-text">
          <p className="flow-text center-align">Sign Up</p>
        </div>
        <div className="card-content">
          <div id="signup">
            <div className="row">
              <form onSubmit={signupHandler} className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input id="name" type="text" name="nameVal" />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input id="signupEmail" type="email" name="emailVal" />
                    <label htmlFor="signupEmail">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input id="signupPassword" type="password" name="passVal" />
                    <label htmlFor="signupPassword">Password</label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn waves-effect waves-light pink right"
                >
                  Sign Up
                  <i className="material-icons right">send</i>
                </button>
                {/* <button
                  onClick={loginWithGoogle}
                  className="btn waves-effect waves-light red right"
                  style={{ marginRight: "10px" }}
                >
                  Sign Up with Google
                  <i className="material-icons right">google</i>
                </button> */}
                <button type="button" class="login-with-google-btn right" onClick={loginWithGoogle} >
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <p className="center-align">
              Already have an account?{" "}
              <button
                onClick={switchToLogin}
                className="transparent-btn blue-text"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

