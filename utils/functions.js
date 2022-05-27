const roles = { MANAGER: "manager", HR: "hr", APPLICANT: "applicant" };

export const routeFunction = () => {
  const user = JSON.parse(localStorage.getItem("hrAppUserCredentails"));
  if (localStorage.getItem("hrAppUserCredentails")) {
    console.log(window.location.pathname, `/${roles[user.role_name]}`);
    if (window.location.pathname !== `/$roles[user.role_name]`)
      window.location.replace(`/${roles[user.role_name]}`);
  }
  return;
};

export const routeLogin = () => {
  if (localStorage.getItem("hrAppUserCredentails")) {
    return;
  } else window.location.replace("/");
};

export const logOut = () => {
  localStorage.removeItem("hrAppUserCredentails");
  window.location.replace("/");
};
