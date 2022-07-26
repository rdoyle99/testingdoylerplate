import { getSession } from "next-auth/react";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";


export default function Index({ user }) {
  if (user === null) return <Layout user={false} children={<Dashboard />} />;
  return <Layout user={user} children={<Dashboard />} />;
}

export async function getServerSideProps(context) {
  const user = await getSession(context);

  return {
    props: { user },
  };
}
