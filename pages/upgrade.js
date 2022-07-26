import { getSession } from "next-auth/react";
import Layout from "@/components/Layout";
import Paying from "@/components/Paying";

export default function Index({user}) {

  return <Layout user={user} children={<Paying/>}/>;

}

export async function getServerSideProps(context) {
  const user = await getSession(context);


  return {
    props: { user },
  };
}
