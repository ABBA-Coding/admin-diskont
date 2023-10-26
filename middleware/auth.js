export default function ({ store, redirect, route }) {
  const publicPages = ["galleries1"];
  const authpage = publicPages.includes(route.name);
  const token = localStorage.getItem("auth_token");
  console.log("fafasr23423");
  // if (!store.state.authenticated && authpage) redirect("/admin/login");
  if (!token) redirect("/admin/login");
}