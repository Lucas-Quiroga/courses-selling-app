import http from "./http";

const signup = (user) => {
  console.log(user);
  return http
    .post("api/user/signup", user)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export default signup;
