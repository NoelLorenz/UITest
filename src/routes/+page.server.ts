import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const userCreds = {
      user: formData.get("user") as string,
      password: formData.get("password") as string,
    };

    console.log("User Credentials:", userCreds);

    if (userCreds.user === "admin" && userCreds.password === "password") {
      throw redirect(303, "/dashboard");
    } else {
      throw redirect(303, "/");
    }
  },
};
