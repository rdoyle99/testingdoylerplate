import { getSession } from "next-auth/react";
import Layout from "@/components/Layout";

export default function Index({user}) {

  return <Layout user={user} />;

}

export async function getServerSideProps(context) {
  const user = await getSession(context);

  return {
    props: { user },
  };
}
