import Link from "next/link";
import clsx from "clsx";

const defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.414 3.33337C18.414 5.94618 15.9315 8.19805 12.4754 8.72021L8.05739 9.38762C7.66511 9.44696 7.38307 9.70229 7.38228 9.99879C7.38149 10.2954 7.66218 10.5515 8.05413 10.612L12.2593 11.26C15.7173 11.793 18.1958 14.0504 18.1958 16.6667H19.8833C19.8833 13.4581 16.8438 10.6899 12.6031 10.0363L12.4077 10.0061L12.8125 9.94496C17.0545 9.30412 20.1015 6.54024 20.1015 3.33337H18.414Z"
      fill="#333D42"
    />
  </svg>
);

const categoryIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="20"
    viewBox="0 0 29 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.0104 3.33325C16.0104 5.94606 13.344 8.19793 9.63184 8.72009L4.88659 9.3875C4.46525 9.44683 4.16232 9.70217 4.16147 9.99867C4.16063 10.2953 4.4621 10.5514 4.88309 10.6118L9.39972 11.2599C13.1139 11.7929 15.7761 14.0503 15.7761 16.6666H17.5885C17.5885 14.0667 15.4449 11.7558 12.2082 10.6249H25.375C25.8755 10.6249 26.2812 10.3451 26.2812 9.99992C26.2812 9.65475 25.8755 9.37492 25.375 9.37492H12.3984C15.658 8.25664 17.8229 5.94147 17.8229 3.33325H16.0104Z"
      fill="white"
    />
  </svg>
);

export default function ArrowLink({
  name,
  path,
  variant = "default",
}: {
  name: string;
  path: `/${string}`;
  variant?: "default" | "category";
}) {
  return (
    <Link href={path} className="hover:text-black">
      <div
        className={clsx(
          "flex items-center px-4 py-2 rounded-xl transition hover:ease-in-out duration-75",
          variant === "default"
            ? "border-3 border-gray-700 hover:bg-[#FCD961] hover:border-[#FCD961] "
            : variant === "category"
            ? "bg-[#F05B5B] w-fit text-white hover:bg-[#c54a4a] gap-2"
            : null
        )}
      >
        {name}
        {
          {
            default: defaultIcon,
            category: categoryIcon,
          }[variant]
        }
      </div>
    </Link>
  );
}
