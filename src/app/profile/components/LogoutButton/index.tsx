"use client";
import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function LogoutButton() {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </Button>
  );
}
