import axios from "axios";
import * as qs from "qs";

axios.interceptors.request.use(config => {
  if (
    config.method.toLocaleLowerCase() === "post" ||
    config.method.toLocaleLowerCase() === "put" ||
    config.method.toLocaleLowerCase() === "delete"
  ) {
    config.data = qs.stringify(config.data);
    // console.log("data:", config.data);
  }
  return config;
});

async function test() {
  const result = await axios.request({
    url: "http://localhost:5600/api/auth/login",
    method: "POST",
    data: {
      username: "admin",
      password: "demoPSW",
      type: "account"
    }
  });
  console.log("result:", result.status);
}

test();
