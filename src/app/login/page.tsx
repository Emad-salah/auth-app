import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { getProviders } from "next-auth/react";
import ProviderEntry from "./components/ProviderEntry";

export default async function Login() {
  const providers = (await getProviders()) || [];
  console.log({ providers });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in with one of the providers below
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1, display: "flex", flexDirection: "column" }}
          >
            {Object.values(providers).map(entry => (
              <ProviderEntry entry={entry} key={entry.id} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
