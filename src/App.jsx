import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/custom/Hero";

export default function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}
