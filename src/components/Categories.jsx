import "../App.css";

import {useNavigate} from "react-router-dom";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work",
    imageSrc: "cleaning1.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category-papper",
  },
  {
    name: "Self-Improvement",
    description: "Journals",
    imageSrc: "cleaning2.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "category-cleaning",
  },
  {
    name: "Travel",
    description: "Daily",
    imageSrc: "select_havlu.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "category-bez",
  },
  {
    name: "Desk and Officee",
    description: "Weekly",
    imageSrc: "select_havlu2.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category-papper",
  },
];

export default function Example() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="mx-auto max-w-2xl py-14 sm:py-24 lg:max-w-none lg:py-24">
          <h2 className="text-2xl font-normal text-gray-900">Ürün Grupları</h2>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-x-6 lg:space-y-3">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative my-3">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-48 sm:aspect-square lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a
                    // href={callout.href}
                    onClick={() => navigate(callout.href)}
                  >
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-normal text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
