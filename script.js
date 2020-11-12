window.onload = function () {
  console.log("hello");
  var Router = function (name, routes) {
    return {
      name,
      routes,
    };
  };

  var view = document.getElementById("view");

  var router = new Router("router", [
    {
      path: "/",
      name: "Login",
    },
    {
      path: "/sign-up",
      name: "SignUp",
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
    },
  ]);
  var currentPath = window.location.pathname;
  console.log(currentPath);
  if (currentPath === "/") {
    view.innerHTML = "This is the login page";
  } else {
    var route = router.routes.filter(function (r) {
      return r.path === currentPath;
    })[0];
    switch (route) {
      case "/sign-up":
        view.innerHTML = "Sign Up";
        break;
      case "/reset-password":
        view.innerHTML = "Reset Password";
        break;
      default:
        view.innerHTML = "No Page Exists";
        break;
    }
  }
};
