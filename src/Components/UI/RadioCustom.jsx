import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    title: "I`m a photographer",
    offer: "Offer a photo collaboration",
  },
  {
    title: "I`m a customer",
    offer: "Order a photo session or ask a question",
  },
  {
    title: "Сompany or a private business",
    offer: "Order advertising or promotion",
  },
];

export default function RadioCustom() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full ">
      <div className="mx-auto w-full  ">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-[20px]">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.title}
                value={plan}
                className={({ active, checked }) =>
                  `${active ? "" : ""}
                  ${
                    checked
                      ? "bg-white border border-neutral-900 text-neutral-900"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-[16px] px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between ">
                      <div className="flex justify-center align-middle gap-5 items-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-neutral-900 overflow-hidden">
                          <img
                            className="w-full h-full"
                            src="https://via.placeholder.com/50x50"
                            alt=""
                          />
                        </div>
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-neutral-900" : "text-neutral-900"
                            }`}
                          >
                            {plan.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description as="p" className="">
                            <p className="w-full max-w-[200px] truncate ">
                              {plan.offer}
                            </p>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#000000" opacity="1" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
