window.onload = function () {
  var Router = function (name, routes) {
    return {
      name,
      routes,
    };
  };

  var view = document.getElementById("view");
  console.log(document);

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
  if (currentPath === "/") {
    view.innerHTML = "This is the login page";
  } else {
    var route = router.routes.filter(function (r) {
      return r.path === currentPath;
    })[0];
  }
};
