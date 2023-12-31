import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from "@mui/material";
import styles from "./styles/index.module.scss";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const userProfile = session?.user;

  if (!userProfile) return redirect("/login");

  return (
    <div className={styles.profile}>
      <Card className={styles.profileContainer}>
        <CardHeader
          avatar={userProfile?.image && <Avatar src={userProfile.image} />}
          title={userProfile?.name}
          subheader={userProfile?.email}
        />
        <CardContent>
          <Typography variant="body1">
            Welcome in, {userProfile?.name}.
          </Typography>

          <Typography variant="body2">
            This app is currently limited to only have you sign in and see your
            info.
          </Typography>
        </CardContent>
        <CardActions>
          <LogoutButton />
        </CardActions>
      </Card>
    </div>
  );
}
