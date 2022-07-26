import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function Paying() {
  const { data: session } = useSession();
  async function handleStripe(event) {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PKEY);
    fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session.user.email),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (session) {
        return stripe.redirectToCheckout({ sessionId: session.sessionId });
      })
      .then(function (result) {
        if (result.error) {
          console.log(result.error.message);
          toast.error(result.error.message);
        }
      })
      .catch(function (error) {
        toast.error(error);
      });
  }
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Manage subscription
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptatibus corrupti atque repudiandae nam.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <button
              onClick={handleStripe}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
