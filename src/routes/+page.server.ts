import { redirect } from "@sveltejs/kit";

export function load({ request }) {
  const lang = request.headers.get("accept-language")?.split(",")[0];
  if (lang && lang.toLocaleLowerCase().includes("fr")) {
    redirect(302, "/fr");
  }
  redirect(302, "/en");
}
