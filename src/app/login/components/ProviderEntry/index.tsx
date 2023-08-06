"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import { type ClientSafeProvider } from "next-auth/react";

interface Props {
  entry: ClientSafeProvider;
}

export default function Login({ entry }: Props) {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 0, maxWidth: 300 }}
      key={entry.id}
      onClick={() => signIn(entry.id, { callbackUrl: "/profile" })}
    >
      Sign In with {entry.name}
    </Button>
  );
}
