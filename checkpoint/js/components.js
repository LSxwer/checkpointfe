const components = {}; // Đùng để lưu trữ giao diện các màn hình tại đây

components.registerScreen = `
<div class="register-container">
    <div class="aside-right">
      <div class="header">
        <h3>Checkpoint</h3>
      </div>

      <form id="register-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="Input first name ...">
            <div class="error" id="first-name-error"></div>
          </div>

          <div class="input-wrapper">
            <input type="text" name="lastName" placeholder="Input last name ...">
            <div class="error" id="last-name-error"></div>
          </div>

        </div>

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Input email ...">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="input password ....">
          <div class="error" id="password-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="input confirm password ...">
          <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-login">
            Already have an account? Login
          </span>

          <button class="btn" type="submit">
            Register
          </button>
        </div>

      </form>
    </div>
  </div>
`;


components.loginScreen = `
<div class="login-container">
    <div class="aside-right">
      <div class="header">
        <h3>checkpoint</h3>
      </div>

      <form id="login-form">

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Input email ...">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="input password ....">
          <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-register">
            Don't have an account? Register
          </span>

          <button class="btn" type="submit">
            login
          </button>
        </div>

      </form>
    </div>
  </div>
`
components.homeScreen = `
<body>

  <div class="container">
    <h1>Add so lien lac</h1>
    <div class="todos"></div>

    <form class="row mt-3">
      <div class="col-auto">
        <input type="text" class="form-control" placeholder="so lien lac  ">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Add so lien lac</button>
      </div>
    </form>
  </div>


  <script type="module" src="./script.js"></script>

</body>`