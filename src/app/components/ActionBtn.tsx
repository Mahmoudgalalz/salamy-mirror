import Link from "next/link";

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 1.875C10.3452 1.875 10.625 2.15483 10.625 2.5V10.9911L13.7247 7.89139C13.9688 7.64732 14.3645 7.64732 14.6086 7.89139C14.8527 8.13547 14.8527 8.53117 14.6086 8.77525L10.4419 12.9419C10.1978 13.186 9.80217 13.186 9.55808 12.9419L5.39139 8.77525C5.14732 8.53117 5.14732 8.13547 5.39139 7.89139C5.63547 7.64732 6.0312 7.64732 6.27528 7.89139L9.375 10.9911V2.5C9.375 2.15483 9.65483 1.875 10 1.875ZM2.5 11.875C2.84517 11.875 3.125 12.1548 3.125 12.5V15.8333C3.125 16.1096 3.23475 16.3746 3.4301 16.5699C3.62545 16.7652 3.8904 16.875 4.16667 16.875H15.8333C16.1096 16.875 16.3746 16.7652 16.5699 16.5699C16.7652 16.3746 16.875 16.1096 16.875 15.8333V12.5C16.875 12.1548 17.1548 11.875 17.5 11.875C17.8452 11.875 18.125 12.1548 18.125 12.5V15.8333C18.125 16.4411 17.8836 17.024 17.4537 17.4537C17.024 17.8836 16.4411 18.125 15.8333 18.125H4.16667C3.55887 18.125 2.97598 17.8836 2.54622 17.4537C2.11644 17.024 1.875 16.4411 1.875 15.8333V12.5C1.875 12.1548 2.15483 11.875 2.5 11.875Z"
      fill="#033A35"
    />
  </svg>
);

const printIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.7037 0.625C3.7037 0.279825 3.98352 0 4.3287 0H13.588C13.9332 0 14.213 0.279825 14.213 0.625V5.55556H15.625C16.8907 5.55556 17.9167 6.58157 17.9167 7.84725V12.3842C17.9167 13.6499 16.8907 14.6759 15.625 14.6759H14.213V17.2917C14.213 17.6368 13.9332 17.9167 13.588 17.9167H4.3287C3.98352 17.9167 3.7037 17.6368 3.7037 17.2917V14.6759H2.29167C1.02602 14.6759 0 13.6499 0 12.3842V7.84725C0 6.58157 1.02602 5.55556 2.29167 5.55556H3.7037V0.625ZM4.9537 5.55556H12.963V1.25H4.9537V5.55556ZM3.7037 13.4259V10.8102C3.7037 10.465 3.98352 10.1852 4.3287 10.1852H13.588C13.9332 10.1852 14.213 10.465 14.213 10.8102V13.4259H15.625C16.2003 13.4259 16.6667 12.9596 16.6667 12.3842V7.84725C16.6667 7.27192 16.2003 6.80556 15.625 6.80556H2.29167C1.71637 6.80556 1.25 7.27192 1.25 7.84725V12.3842C1.25 12.9596 1.71637 13.4259 2.29167 13.4259H3.7037ZM4.9537 11.4352V16.6667H12.963V11.4352H4.9537Z"
      fill="#033A35"
    />
  </svg>
);

const shareIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 3.125C13.9645 3.125 13.125 3.96447 13.125 5C13.125 5.30261 13.1962 5.58678 13.3222 5.83833C13.6308 6.45432 14.2668 6.875 15 6.875C16.0355 6.875 16.875 6.03553 16.875 5C16.875 3.96447 16.0355 3.125 15 3.125ZM11.875 5C11.875 3.27411 13.2741 1.875 15 1.875C16.7259 1.875 18.125 3.27411 18.125 5C18.125 6.72589 16.7259 8.125 15 8.125C14.0011 8.125 13.1125 7.65628 12.5408 6.92834L8.01868 9.18942C8.08806 9.44825 8.125 9.72008 8.125 10C8.125 10.2799 8.08806 10.5518 8.01868 10.8106L12.5408 13.0717C13.1125 12.3438 14.0011 11.875 15 11.875C16.7259 11.875 18.125 13.2741 18.125 15C18.125 16.7259 16.7259 18.125 15 18.125C13.2741 18.125 11.875 16.7259 11.875 15C11.875 14.7201 11.9119 14.4482 11.9813 14.1894L7.45913 11.9283C6.88753 12.6562 5.99888 13.125 5 13.125C3.27411 13.125 1.875 11.7259 1.875 10C1.875 8.27411 3.27411 6.875 5 6.875C5.99888 6.875 6.88753 7.34372 7.45913 8.07166L11.9813 5.81058C11.9119 5.55172 11.875 5.27989 11.875 5ZM5 8.125C3.96447 8.125 3.125 8.9645 3.125 10C3.125 11.0355 3.96447 11.875 5 11.875C5.73314 11.875 6.36916 11.4543 6.67776 10.8383C6.80378 10.5867 6.875 10.3026 6.875 10C6.875 9.69742 6.80378 9.41325 6.67776 9.16167C6.36916 8.54567 5.73314 8.125 5 8.125ZM15 13.125C14.2668 13.125 13.6308 13.5457 13.3222 14.1617C13.1962 14.4132 13.125 14.6974 13.125 15C13.125 16.0355 13.9645 16.875 15 16.875C16.0355 16.875 16.875 16.0355 16.875 15C16.875 13.9645 16.0355 13.125 15 13.125Z"
      fill="#033A35"
    />
  </svg>
);

const copyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.4009 2.16677C13.9011 0.666658 16.3332 0.666661 17.8333 2.16677C19.3334 3.66688 19.3334 6.09905 17.8333 7.59915L15.5591 9.87344C15.315 10.1174 14.9192 10.1174 14.6752 9.87344C14.4311 9.62935 14.4311 9.2336 14.6752 8.98952L16.9494 6.71527C17.9614 5.70331 17.9614 4.06261 16.9494 3.05065C15.9375 2.0387 14.2968 2.0387 13.2848 3.05065L9.8735 6.46203C7.71706 8.61844 7.95276 10.4802 8.73633 11.2638C8.98041 11.5079 8.98041 11.9036 8.73633 12.1477C8.49225 12.3918 8.09653 12.3918 7.85246 12.1477C6.36178 10.6569 6.59747 7.97024 8.98958 5.57814L12.4009 2.16677ZM11.2638 8.98952C11.5079 8.74544 11.9037 8.74544 12.1477 8.98952C12.7937 9.63552 13.2287 10.4049 13.0293 11.4019C12.8481 12.3079 12.1586 13.2739 11.0106 14.4219L7.59921 17.8333C6.0991 19.3334 3.66694 19.3334 2.16683 17.8333C0.666719 16.3332 0.666722 13.901 2.16683 12.4009L4.44108 10.1266C4.68516 9.88252 5.08088 9.88252 5.32496 10.1266C5.56904 10.3707 5.56904 10.7664 5.32496 11.0105L3.05071 13.2848C2.03876 14.2967 2.03876 15.9374 3.05071 16.9494C4.06267 17.9614 5.70337 17.9614 6.71533 16.9494L10.1267 13.538C11.2529 12.4118 11.7006 11.672 11.8036 11.1567C11.8885 10.7323 11.7549 10.3645 11.2638 9.87344C11.0197 9.62935 11.0197 9.2336 11.2638 8.98952Z"
      fill="#033A35"
    />
  </svg>
);

export default function ActionBtn({
  title,
  icon,
}: {
  title: string;
  icon: "download" | "print" | "share" | "copy";
}) {
  return (
    <Link href={``} className="hover:text-black">
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl transition hover:ease-in-out duration-75 border-3 border-gray-700 hover:bg-[#FCD961] hover:border-[#FCD961] ">
        {
          {
            download: downloadIcon,
            print: printIcon,
            share: shareIcon,
            copy: copyIcon,
          }[icon]
        }
        {title}
      </div>
    </Link>
  );
}
