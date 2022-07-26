/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Request time off",

    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    iconBorder: "border-teal-300",
    benefit: "something",
  },
  {
    title: "Benefits",

    icon: BadgeCheckIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    iconBorder: "border-purple-300",
    benefit: "something",
  },
  {
    title: "Schedule a one-on-one",

    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    iconBorder: "border-sky-300",
    benefit: "something",
  },
  {
    title: "Payroll",

    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    iconBorder: "border-yellow-300",
    benefit: "something",
  },
  {
    title: "Submit an expense",

    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    iconBorder: "border-rose-300",
    benefit: "something",
  },
  {
    title: "Training",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    iconBorder: "border-indigo-300",
    benefit: "something",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SignIn() {
  const [open, setOpen] = useState(true);
  const authButtonRef = useRef();

  return (
    <Transition.Root show={true} as={Fragment} unmount={false}>
      <Dialog
        static={true}
        initialFocus={authButtonRef}
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6 w-9/12">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 font-medium text-gray-900"
                  >
                    Doylerplate
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Do something cool</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 text-center">
                <button
                  ref={authButtonRef}
                  onClick={() => signIn("twitter")}
                  type="button"
                  className="inline-flex justify-center w-1/4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-400"
                >
                  Log In
                </button>
              </div>
              <div className="mt-8 rounded-lg grid lg:grid-cols-3 xs:grid-cols-2">
                {actions.map((action, actionIdx) => (
                  <div
                    key={action.title}
                    className={classNames(
                      "rounded-xl bg-white p-6 m-2 border ",
                      action.iconBorder
                    )}
                  >
                    <div>
                      <span
                        className={classNames(
                          action.iconBackground,
                          action.iconForeground,
                          "rounded-full inline-flex p-3 ring-4 ring-white"
                        )}
                      >
                        <action.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-medium">
                        {/* Extend touch target to entire panel */}
                        <span className="" aria-hidden="true" />
                        {action.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {action.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
