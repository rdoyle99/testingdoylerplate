import { signIn } from "next-auth/react";
import { NextSeo } from "next-seo";

export default function SignedOut() {
  return (
    <>
      <NextSeo
        title={`Doylerplate | Doylerplate signed out`}
        description={`signed out`}
        canonical="https://www.doylerplate.com/"
        openGraph={{
          url: `https://www.doylerplate.com/blog/`,
          title: `doylerplate | Magic Sales Bot Blog`,
          description: `doylerplate`,
          images: [
            {
              url: `doyle.imageUrl`,
              width: 800,
              height: 600,
              alt: `doyle.href`,
              type: "image/jpeg",
            },
          ],
          site_name: "Doylerplate",
        }}
        twitter={{
          handle: "@ryan___doyle",
          cardType: "summary_large_image",
        }}
      />
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
