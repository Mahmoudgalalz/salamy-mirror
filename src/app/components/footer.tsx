"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const BrandriaBrand = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="22"
    viewBox="0 0 98 22"
    fill="none"
  >
    <g clip-path="url(#clip0_124_432)">
      <path
        d="M0 0.596191V21.4098H20.9487V0.596191H0ZM6.11263 15.9821H2.67273V15.8899C3.09343 15.7854 3.25429 15.3919 3.25429 14.7404V7.09354C3.25429 6.43581 3.09343 6.04855 2.67273 5.94405V5.858H6.11263V15.9821ZM9.30505 15.9821H7.40568V15.7976H7.77071C8.88434 15.7976 9.47828 14.6912 9.47828 13.0868C9.47828 11.4825 8.96477 10.4498 7.64697 10.4498H7.40568V10.2715H7.64697C8.72348 10.2715 9.07614 9.25112 9.07614 8.13238C9.07614 7.0751 8.72348 6.03011 7.78927 6.03011H7.40568V5.85185H9.138C11.0683 5.85185 12.0273 6.81078 12.0273 8.07705C12.0273 9.0913 11.4024 10.0933 9.29886 10.3207C11.39 10.5174 12.4356 11.464 12.4356 13.1729C12.4418 14.6297 11.3838 15.9821 9.30505 15.9821ZM17.0324 16.148C12.5284 16.148 15.4115 10.4805 13.2337 10.4805V10.3023H13.5492C14.2298 10.3023 14.8237 9.77976 14.8237 8.06476C14.8237 6.98289 14.5082 5.96864 13.4131 5.96864H13.2399V5.858H14.9537C16.7788 5.858 17.6883 6.90298 17.6883 8.16926C17.6883 9.92729 16.2777 10.4068 14.502 10.4068C18.078 11.1321 16.6798 14.9801 18.4059 15.6132C18.3997 15.6071 18.1585 16.148 17.0324 16.148Z"
        fill="white"
      />
      <path
        d="M44.8981 4.25372V6.28836L44.762 6.2269C44.5826 6.15313 44.3969 6.09166 44.199 6.06093C44.001 6.03019 43.803 6.01175 43.605 6.01175C43.0358 6.01175 42.5223 6.16543 42.0831 6.46663C41.6376 6.76783 41.285 7.21656 41.0313 7.78822V14.7343H38.804V5.08971H38.8906L41.0313 4.23528V5.37861C41.3283 5.00365 41.6809 4.6963 42.0831 4.46886C42.5842 4.1861 43.1472 4.03857 43.7659 4.03857C44.2052 4.05702 44.564 4.11849 44.8362 4.22913L44.8981 4.25372Z"
        fill="white"
      />
      <path
        d="M53.405 5.0469C52.6502 4.40147 51.5861 4.07568 50.2312 4.07568C49.5321 4.07568 48.8391 4.16174 48.1586 4.33386C47.478 4.49982 46.7356 4.77644 45.9499 5.13296L45.8571 5.17599L46.6923 6.86641L46.7789 6.82338C47.41 6.52832 47.9853 6.31318 48.4865 6.17795C48.9876 6.04271 49.4826 5.96895 49.9404 5.96895C50.7385 5.96895 51.3448 6.14721 51.7531 6.49144C52.1491 6.82953 52.3594 7.36431 52.3594 8.06507V8.9994C51.5242 8.64903 50.6086 8.46462 49.6434 8.46462C48.3318 8.46462 47.28 8.75353 46.519 9.31905C45.7519 9.89686 45.3683 10.6898 45.3683 11.6856C45.3683 12.3188 45.5353 12.8843 45.8694 13.3699C46.1973 13.8555 46.6675 14.2366 47.2491 14.5071C47.8307 14.7714 48.505 14.9066 49.2598 14.9066C49.8909 14.9066 50.4786 14.8206 51.0169 14.6362C51.4933 14.4825 51.9449 14.2428 52.3656 13.9416V14.7284H54.5496V7.82533C54.5434 6.62668 54.1598 5.69848 53.405 5.0469ZM52.3533 10.6591V12.288C51.9944 12.6015 51.5985 12.8351 51.1716 12.9765C50.7323 13.124 50.2435 13.1978 49.7115 13.1978C49.0495 13.1978 48.505 13.0564 48.0967 12.7675C47.6946 12.4847 47.5028 12.1159 47.5028 11.6487C47.5028 11.157 47.6946 10.7759 48.0967 10.4931C48.505 10.2042 49.0742 10.0567 49.7919 10.0567C50.3116 10.0567 50.7818 10.112 51.1963 10.2104C51.6046 10.3026 51.9882 10.4501 52.3533 10.6591Z"
        fill="white"
      />
      <path
        d="M65.4261 8.18157V14.7281H63.1988V8.5258C63.1988 7.75128 62.9823 7.13044 62.5492 6.694C62.1161 6.25142 61.5036 6.03013 60.7241 6.03013C60.1982 6.03013 59.728 6.14078 59.3135 6.35592C58.9051 6.57107 58.5649 6.88456 58.2926 7.29026V14.7281H56.0654V5.12653L58.1875 4.28439H58.2865L58.2926 4.38274V5.188C59.0846 4.45651 60.093 4.08154 61.2933 4.08154C62.1099 4.08154 62.8276 4.25366 63.4401 4.59174C64.065 4.94212 64.5414 5.41544 64.9002 6.04243C65.2467 6.65712 65.4261 7.38247 65.4261 8.18157Z"
        fill="white"
      />
      <path
        d="M74.824 0.89131V5.04666C74.4157 4.7639 73.9702 4.53646 73.5 4.38279C72.9617 4.20453 72.3987 4.11232 71.8234 4.11232C70.8396 4.11232 69.924 4.3582 69.1197 4.83152C68.3092 5.30483 67.6596 5.95641 67.1894 6.76167C66.713 7.57307 66.4779 8.48282 66.4779 9.49707C66.4779 10.5113 66.713 11.4272 67.177 12.2325C67.6472 13.0439 68.2907 13.6954 69.095 14.1749C69.9116 14.6544 70.8087 14.8941 71.7862 14.8941C72.9556 14.8941 73.9888 14.5437 74.8487 13.8614V14.7343H77.0575V0L74.824 0.89131ZM74.824 11.753C74.5023 12.128 74.1001 12.423 73.6423 12.6197C73.1659 12.8287 72.6277 12.9332 72.0461 12.9332C71.415 12.9332 70.8397 12.7795 70.3323 12.4722C69.8188 12.171 69.4105 11.7469 69.1135 11.2305C68.8104 10.7142 68.6619 10.1179 68.6619 9.47248C68.6619 8.82705 68.8165 8.23079 69.1135 7.71445C69.4105 7.20425 69.8188 6.7924 70.3323 6.49735C70.8397 6.19614 71.415 6.04862 72.0461 6.04862C72.6277 6.04862 73.1597 6.15926 73.6361 6.37441C74.1063 6.5834 74.5023 6.86616 74.824 7.21654V11.753Z"
        fill="white"
      />
      <path
        d="M84.7044 4.22913L84.7662 4.25372V6.28836L84.6239 6.2269C84.4445 6.15313 84.2589 6.09166 84.0609 6.06093C83.8629 6.03019 83.665 6.01175 83.467 6.01175C82.8978 6.01175 82.3905 6.16543 81.945 6.46663C81.4996 6.76783 81.1531 7.21656 80.8932 7.78822V14.7343H78.6598V5.08971H78.7464L80.8932 4.23528V5.37861C81.1902 5.00365 81.5429 4.6963 81.945 4.46886C82.4462 4.1861 83.0153 4.03857 83.634 4.03857C84.0671 4.05087 84.4321 4.11849 84.7044 4.22913Z"
        fill="white"
      />
      <path
        d="M88.0824 1.0018C88.3546 1.26612 88.4907 1.59191 88.4907 1.97917C88.4907 2.36643 88.3546 2.67993 88.0824 2.95654C87.8102 3.23315 87.4761 3.37453 87.0863 3.37453C86.6965 3.37453 86.381 3.23315 86.1088 2.95654C85.8366 2.67993 85.7004 2.35414 85.7004 1.97917C85.7004 1.60421 85.8427 1.26612 86.1088 1.0018C86.381 0.743632 86.7089 0.608398 87.0863 0.608398C87.4637 0.608398 87.8102 0.737485 88.0824 1.0018Z"
        fill="white"
      />
      <path
        d="M88.1999 4.05078V14.7342H85.9727V4.94824L86.0593 4.91136L88.1999 4.05078Z"
        fill="white"
      />
      <path
        d="M96.8616 5.04642C96.113 4.40098 95.0426 4.0752 93.6877 4.0752C92.9948 4.0752 92.2957 4.16125 91.6151 4.33337C90.9346 4.49934 90.1921 4.77595 89.4064 5.13247L89.3136 5.1755L90.1488 6.86592L90.2354 6.82289C90.8665 6.52784 91.4419 6.31269 91.9492 6.17746C92.4503 6.04223 92.9391 5.96846 93.4031 5.96846C94.195 5.96846 94.8075 6.14672 95.2097 6.49095C95.6056 6.82904 95.816 7.36382 95.816 8.06458V8.99892C94.9808 8.64854 94.0651 8.46413 93.1 8.46413C91.7883 8.46413 90.7366 8.75304 89.9818 9.31856C89.2146 9.89637 88.8248 10.6893 88.8248 11.6851C88.8248 12.3183 88.9919 12.8838 89.326 13.3694C89.6601 13.855 90.1241 14.2361 90.7056 14.5066C91.2872 14.7709 91.9616 14.9062 92.7164 14.9062C93.3474 14.9062 93.9352 14.8201 94.4734 14.6357C94.9498 14.482 95.4015 14.2423 95.8222 13.9411V14.7279H98.0061V7.82485C98 6.62619 97.6164 5.69799 96.8616 5.04642ZM95.816 10.6586V12.2875C95.4572 12.601 95.0612 12.8346 94.6343 12.976C94.195 13.1235 93.7063 13.1973 93.1742 13.1973C92.5122 13.1973 91.9678 13.0559 91.5594 12.767C91.1635 12.4842 90.9655 12.1154 90.9655 11.6483C90.9655 11.1565 91.1635 10.7754 91.5594 10.4926C91.9678 10.2037 92.537 10.0562 93.2546 10.0562C93.7743 10.0562 94.2445 10.1115 94.6652 10.2099C95.0612 10.3021 95.4448 10.4496 95.816 10.6586Z"
        fill="white"
      />
      <path
        d="M37.0717 6.81692C36.6077 6.03011 35.9828 5.39083 35.1971 4.92366C34.4052 4.45034 33.5266 4.21675 32.5491 4.21675C31.3179 4.21675 30.2723 4.59172 29.4062 5.34165V0.147461L27.3769 0.958861V14.6297H29.3876V13.7446C29.3938 13.7507 29.4 13.7507 29.4124 13.7569C29.8516 14.0888 30.3342 14.347 30.8601 14.5191C31.3922 14.6973 31.9428 14.7895 32.512 14.7895C33.4957 14.7895 34.3866 14.556 35.1785 14.0888C35.9705 13.6155 36.5953 12.9823 37.0655 12.1832C37.5295 11.3841 37.7646 10.4867 37.7646 9.49085C37.7646 8.49504 37.5295 7.60988 37.0717 6.81692ZM35.3085 11.3165C34.9991 11.8451 34.5846 12.2631 34.0587 12.5705C33.539 12.8778 32.9451 13.0315 32.2831 13.0315C31.7139 13.0315 31.1756 12.927 30.6683 12.7119C30.161 12.4967 29.7403 12.2017 29.4062 11.8267V7.19803C29.7403 6.81078 30.161 6.50343 30.6621 6.28828C31.1633 6.07314 31.7015 5.96864 32.2831 5.96864C32.9451 5.96864 33.5328 6.12231 34.0587 6.42966C34.5846 6.73701 34.9929 7.16115 35.3085 7.69594C35.624 8.23073 35.7725 8.83313 35.7725 9.5093C35.7725 10.1855 35.6178 10.7879 35.3085 11.3165Z"
        fill="white"
      />
      <path
        d="M27.1666 20.8566V17.1069H27.7481L29.035 19.7686L30.3219 17.1069H30.9034V20.8566H30.5075V17.5741L29.0288 20.5861L27.5563 17.5803V20.8566H27.1666Z"
        fill="white"
      />
      <path
        d="M32.9265 20.9056C32.6667 20.9056 32.4316 20.8441 32.2212 20.7212C32.0109 20.5982 31.8438 20.4323 31.7201 20.2233C31.5964 20.0143 31.5345 19.7745 31.5345 19.5164C31.5345 19.2582 31.5964 19.0246 31.7139 18.8156C31.8315 18.6066 31.9923 18.4406 32.1965 18.3177C32.3945 18.1948 32.6234 18.1333 32.8708 18.1333C33.1183 18.1333 33.3287 18.1948 33.5205 18.3177C33.7123 18.4406 33.8669 18.6066 33.9783 18.8156C34.0897 19.0246 34.1515 19.2582 34.1515 19.5164V19.6393H31.9366C31.9552 19.8176 32.0171 19.9712 32.1099 20.1126C32.2027 20.254 32.3202 20.3585 32.4687 20.4446C32.6172 20.5306 32.778 20.5675 32.9513 20.5675C33.0936 20.5675 33.2297 20.5429 33.3596 20.506C33.4957 20.463 33.6071 20.4015 33.6937 20.3216L33.9412 20.5859C33.7927 20.6966 33.6318 20.7765 33.471 20.8318C33.2977 20.8748 33.1183 20.8994 32.9265 20.9056ZM31.9366 19.3135H33.7432C33.7246 19.1537 33.669 19.0062 33.5823 18.8832C33.4957 18.7541 33.3905 18.6558 33.2668 18.582C33.1431 18.5083 33.0008 18.4714 32.8523 18.4714C32.7038 18.4714 32.5553 18.5083 32.4254 18.5759C32.2955 18.6496 32.1903 18.748 32.1037 18.8709C32.0232 19.0062 31.9676 19.1537 31.9366 19.3135Z"
        fill="white"
      />
      <path
        d="M35.9395 20.8995C35.6859 20.8995 35.4569 20.8381 35.2528 20.7151C35.0486 20.5922 34.8816 20.4262 34.764 20.2172C34.6403 20.0082 34.5846 19.7746 34.5846 19.5103C34.5846 19.246 34.6465 19.0186 34.764 18.8096C34.8878 18.6006 35.0486 18.4346 35.2528 18.3117C35.4569 18.1887 35.692 18.1273 35.9457 18.1273C36.1066 18.1273 36.2551 18.1518 36.4035 18.2072C36.552 18.2625 36.6881 18.3362 36.8057 18.4346V17.1069L37.2078 17.0146V20.8565H36.8119V20.5737C36.5706 20.7889 36.2798 20.8995 35.9395 20.8995ZM35.9766 20.5492C36.1437 20.5492 36.3045 20.5184 36.4468 20.4508C36.5891 20.3832 36.7129 20.291 36.8057 20.1742V18.8464C36.7129 18.7297 36.5953 18.6436 36.4468 18.576C36.3045 18.5084 36.1437 18.4776 35.9766 18.4776C35.791 18.4776 35.6178 18.5207 35.4693 18.6129C35.3208 18.7051 35.1971 18.8219 35.1105 18.9817C35.0239 19.1354 34.9806 19.3136 34.9806 19.5103C34.9806 19.707 35.0239 19.8853 35.1105 20.039C35.1971 20.1926 35.3208 20.3217 35.4693 20.4139C35.6178 20.5061 35.7848 20.5492 35.9766 20.5492Z"
        fill="white"
      />
      <path
        d="M38.0864 17.6539C38.0122 17.6539 37.9503 17.6293 37.9008 17.574C37.8513 17.5187 37.8204 17.4572 37.8204 17.3835C37.8204 17.3097 37.8451 17.2482 37.9008 17.1991C37.9565 17.1437 38.0184 17.1191 38.0864 17.1191C38.1607 17.1191 38.2225 17.1437 38.2782 17.1991C38.3339 17.2544 38.3586 17.3158 38.3586 17.3896C38.3586 17.4634 38.3339 17.5248 38.2782 17.574C38.2225 17.6232 38.1607 17.6539 38.0864 17.6539ZM37.8822 20.8565V18.1703H38.2844V20.8565H37.8822Z"
        fill="white"
      />
      <path
        d="M39.8187 20.9055C39.6207 20.9055 39.4475 20.8747 39.299 20.8071C39.1505 20.7395 39.033 20.6473 38.9464 20.5244C38.8598 20.4014 38.8226 20.26 38.8226 20.1002C38.8226 19.8482 38.9216 19.6453 39.1134 19.4978C39.3052 19.3503 39.5712 19.2765 39.8991 19.2765C40.1899 19.2765 40.456 19.338 40.6911 19.4609V19.1044C40.6911 18.8893 40.6292 18.7294 40.5055 18.6188C40.3817 18.5082 40.2023 18.4528 39.9734 18.4528C39.8373 18.4528 39.7074 18.4713 39.5712 18.5082C39.4351 18.545 39.2866 18.6065 39.1258 18.6864L38.9773 18.3791C39.1691 18.2869 39.3485 18.2192 39.5156 18.1762C39.6826 18.1332 39.8435 18.1147 40.0105 18.1147C40.3508 18.1147 40.6168 18.1947 40.8024 18.3545C40.988 18.5143 41.0808 18.7479 41.0808 19.0429V20.8501H40.6911V20.592C40.5673 20.6965 40.4374 20.7764 40.2889 20.8256C40.1404 20.8747 39.9858 20.9055 39.8187 20.9055ZM39.2 20.0818C39.2 20.2293 39.2619 20.3522 39.3918 20.4506C39.5217 20.5428 39.6826 20.592 39.8868 20.592C40.0476 20.592 40.1961 20.5674 40.3322 20.5182C40.4683 20.469 40.5859 20.3891 40.6911 20.2846V19.7806C40.5797 19.7068 40.4622 19.6515 40.3322 19.6146C40.2085 19.5839 40.0662 19.5654 39.9053 19.5654C39.6888 19.5654 39.5156 19.6146 39.3918 19.7068C39.2681 19.799 39.2 19.922 39.2 20.0818Z"
        fill="white"
      />
      <path
        d="M43.1102 17.6539C43.0359 17.6539 42.974 17.6293 42.9245 17.574C42.875 17.5187 42.8441 17.4572 42.8441 17.3835C42.8441 17.3097 42.8689 17.2482 42.9245 17.1991C42.9802 17.1437 43.0421 17.1191 43.1102 17.1191C43.1844 17.1191 43.2463 17.1437 43.3019 17.1991C43.3576 17.2544 43.3824 17.3158 43.3824 17.3896C43.3824 17.4634 43.3576 17.5248 43.3019 17.574C43.2463 17.6232 43.1844 17.6539 43.1102 17.6539ZM42.906 20.8565V18.1703H43.3081V20.8565H42.906Z"
        fill="white"
      />
      <path
        d="M43.9886 20.8563V18.1701H44.3908V18.4836C44.6011 18.2377 44.8857 18.1147 45.2446 18.1147C45.4487 18.1147 45.6282 18.1578 45.789 18.2438C45.9437 18.3299 46.0674 18.4528 46.1541 18.6065C46.2407 18.7602 46.284 18.9446 46.284 19.1536V20.8501H45.888V19.2396C45.888 18.9999 45.82 18.8094 45.6839 18.6741C45.5477 18.5389 45.3621 18.4651 45.1332 18.4651C44.9724 18.4651 44.8301 18.502 44.7001 18.5696C44.5764 18.6434 44.4712 18.7417 44.3846 18.877V20.8563H43.9886Z"
        fill="white"
      />
      <path
        d="M47.9297 20.9055C47.6946 20.9055 47.5152 20.8502 47.3914 20.7395C47.2677 20.6289 47.2058 20.4691 47.2058 20.2539V18.502H46.6243V18.164H47.2058V17.4817L47.6018 17.3833V18.164H48.4185V18.502H47.6018V20.1617C47.6018 20.3031 47.6327 20.4076 47.7008 20.4691C47.7627 20.5305 47.874 20.5613 48.0163 20.5613C48.0906 20.5613 48.1586 20.5551 48.2205 20.5428C48.2824 20.5306 48.3442 20.5121 48.4123 20.4875V20.8379C48.3442 20.8625 48.27 20.8809 48.1834 20.8932C48.0906 20.9055 48.0101 20.9117 47.9297 20.9055Z"
        fill="white"
      />
      <path
        d="M50.0518 20.9056C49.7919 20.9056 49.5568 20.8441 49.3465 20.7212C49.1361 20.5982 48.9691 20.4323 48.8453 20.2233C48.7216 20.0143 48.6597 19.7745 48.6597 19.5164C48.6597 19.2582 48.7216 19.0246 48.8391 18.8156C48.9567 18.6066 49.1176 18.4406 49.3217 18.3177C49.5197 18.1948 49.7486 18.1333 49.9961 18.1333C50.2436 18.1333 50.4539 18.1948 50.6457 18.3177C50.8375 18.4406 50.9922 18.6066 51.1035 18.8156C51.2149 19.0246 51.2768 19.2582 51.2768 19.5164V19.6393H49.0619C49.0804 19.8176 49.1423 19.9712 49.2351 20.1126C49.3279 20.254 49.4455 20.3585 49.5939 20.4446C49.7424 20.5306 49.9033 20.5675 50.0765 20.5675C50.2188 20.5675 50.3549 20.5429 50.4849 20.506C50.621 20.463 50.7323 20.4015 50.8189 20.3216L51.0664 20.5859C50.9179 20.6966 50.7571 20.7765 50.5962 20.8318C50.423 20.8748 50.2436 20.8994 50.0518 20.9056ZM49.0619 19.3135H50.8684C50.8499 19.1537 50.7942 19.0062 50.7076 18.8832C50.621 18.7541 50.5158 18.6558 50.3921 18.582C50.2683 18.5083 50.126 18.4714 49.9775 18.4714C49.829 18.4714 49.6806 18.5083 49.5506 18.5759C49.4207 18.6496 49.3155 18.748 49.2289 18.8709C49.1423 19.0062 49.0866 19.1537 49.0619 19.3135Z"
        fill="white"
      />
      <path
        d="M51.8275 20.8565V17.1069L52.2296 17.0146V20.8565H51.8275Z"
        fill="white"
      />
      <path
        d="M52.9039 20.8565V17.1069L53.3061 17.0146V20.8565H52.9039Z"
        fill="white"
      />
      <path
        d="M54.1846 17.6539C54.1104 17.6539 54.0485 17.6293 53.999 17.574C53.9495 17.5187 53.9186 17.4572 53.9186 17.3835C53.9186 17.3097 53.9433 17.2482 53.999 17.1991C54.0547 17.1437 54.1166 17.1191 54.1846 17.1191C54.2589 17.1191 54.3269 17.1437 54.3764 17.1991C54.4259 17.2544 54.4568 17.3158 54.4568 17.3896C54.4568 17.4634 54.4321 17.5248 54.3764 17.574C54.3207 17.6293 54.2589 17.6539 54.1846 17.6539ZM53.9804 20.8565V18.1703H54.3826V20.8565H53.9804Z"
        fill="white"
      />
      <path
        d="M56.3748 21.9997C56.1892 21.9997 56.0036 21.9751 55.8179 21.926C55.6323 21.8768 55.4653 21.8092 55.3168 21.717L55.49 21.4035C55.6509 21.4895 55.7994 21.551 55.9417 21.5879C56.0778 21.6248 56.2201 21.6493 56.3624 21.6493C56.6161 21.6493 56.814 21.5879 56.944 21.4649C57.0801 21.342 57.1419 21.1637 57.1419 20.9301V20.5552C56.8945 20.7642 56.6099 20.8687 56.282 20.8687C56.0345 20.8687 55.8056 20.8072 55.6014 20.6843C55.3972 20.5613 55.2364 20.3954 55.1126 20.1864C54.9951 19.9774 54.9332 19.7438 54.9332 19.4856C54.9332 19.2274 54.9951 18.9938 55.1126 18.7849C55.2302 18.5759 55.3972 18.4099 55.6014 18.2869C55.8056 18.164 56.0345 18.1025 56.2943 18.1025C56.449 18.1025 56.5975 18.1271 56.746 18.1824C56.8945 18.2378 57.0244 18.3115 57.1481 18.416V18.1456H57.5441V20.9117C57.5441 21.2559 57.4451 21.5203 57.2409 21.7047C57.0368 21.9075 56.7522 21.9997 56.3748 21.9997ZM56.3191 20.5306C56.4923 20.5306 56.647 20.4999 56.7955 20.4322C56.9378 20.3708 57.0553 20.2786 57.1481 20.1556V18.834C57.0553 18.7172 56.9378 18.6312 56.7955 18.5636C56.647 18.5021 56.4923 18.4652 56.3253 18.4652C56.1397 18.4652 55.9726 18.5082 55.8179 18.6004C55.6695 18.6926 55.5519 18.8094 55.4653 18.9693C55.3787 19.1229 55.3354 19.3012 55.3354 19.4918C55.3354 19.6823 55.3787 19.8606 55.4653 20.0142C55.5519 20.1679 55.6695 20.2909 55.8241 20.3831C55.9664 20.4814 56.1335 20.5244 56.3191 20.5306Z"
        fill="white"
      />
      <path
        d="M59.4929 20.9056C59.2331 20.9056 58.998 20.8441 58.7876 20.7212C58.5773 20.5982 58.4102 20.4323 58.2865 20.2233C58.1628 20.0143 58.1009 19.7745 58.1009 19.5164C58.1009 19.2582 58.1628 19.0246 58.2803 18.8156C58.3979 18.6066 58.5587 18.4406 58.7629 18.3177C58.9609 18.1948 59.1898 18.1333 59.4373 18.1333C59.6847 18.1333 59.8951 18.1948 60.0869 18.3177C60.2787 18.4406 60.4333 18.6066 60.5447 18.8156C60.6561 19.0246 60.7179 19.2582 60.7179 19.5164V19.6393H58.503C58.5216 19.8176 58.5835 19.9712 58.6763 20.1126C58.7691 20.254 58.8866 20.3585 59.0351 20.4446C59.1836 20.5245 59.3445 20.5675 59.5177 20.5675C59.66 20.5675 59.7961 20.5429 59.926 20.506C60.0621 20.463 60.1735 20.4015 60.2601 20.3216L60.5076 20.5859C60.3529 20.6966 60.1982 20.7765 60.0374 20.8318C59.8765 20.8871 59.6847 20.8994 59.4929 20.9056ZM58.503 19.3135H60.3096C60.291 19.1537 60.2354 19.0062 60.1487 18.8832C60.0621 18.7541 59.957 18.6558 59.8332 18.582C59.7095 18.5083 59.5672 18.4714 59.4187 18.4714C59.2702 18.4714 59.1217 18.5083 58.9918 18.5759C58.8619 18.6496 58.7567 18.748 58.6701 18.8709C58.5835 19.0062 58.5278 19.1537 58.503 19.3135Z"
        fill="white"
      />
      <path
        d="M61.2624 20.8563V18.1701H61.6645V18.4836C61.8749 18.2377 62.1595 18.1147 62.5183 18.1147C62.7225 18.1147 62.9019 18.1578 63.0628 18.2438C63.2174 18.3299 63.3412 18.4528 63.4278 18.6065C63.5144 18.7602 63.5577 18.9446 63.5577 19.1536V20.8501H63.1618V19.2396C63.1618 18.9999 63.0937 18.8094 62.9576 18.6741C62.8215 18.5389 62.6359 18.4651 62.407 18.4651C62.2461 18.4651 62.1038 18.502 61.9739 18.5696C61.8501 18.6434 61.745 18.7417 61.6583 18.877V20.8563H61.2624Z"
        fill="white"
      />
      <path
        d="M65.4757 20.9059C65.222 20.9059 64.9869 20.8444 64.7827 20.7215C64.5724 20.5985 64.4053 20.4326 64.2878 20.2236C64.1702 20.0146 64.1022 19.7748 64.1022 19.5167C64.1022 19.2585 64.164 19.0188 64.2878 18.8098C64.4115 18.6008 64.5786 18.4348 64.7827 18.3119C64.9931 18.1889 65.222 18.1274 65.4757 18.1274C65.6736 18.1274 65.8654 18.1643 66.0449 18.2381C66.2305 18.3119 66.3913 18.4163 66.5274 18.5516L66.2738 18.8405C66.1686 18.7237 66.0448 18.6376 65.9025 18.5823C65.7664 18.5208 65.618 18.4963 65.4757 18.4963C65.2901 18.4963 65.123 18.5393 64.9745 18.6315C64.826 18.7237 64.7085 18.8466 64.6157 19.0003C64.5291 19.154 64.4858 19.3322 64.4858 19.5228C64.4858 19.7134 64.5291 19.8916 64.6157 20.0453C64.7023 20.199 64.826 20.3281 64.9745 20.4203C65.123 20.5125 65.2962 20.5555 65.4757 20.5555C65.6241 20.5555 65.7603 20.5248 65.8964 20.4694C66.0263 20.4141 66.15 20.3281 66.2676 20.2174L66.5151 20.4879C66.3728 20.6231 66.2119 20.7276 66.0325 20.8014C65.8592 20.8628 65.6736 20.9059 65.4757 20.9059Z"
        fill="white"
      />
      <path
        d="M68.1793 20.9056C67.9195 20.9056 67.6844 20.8441 67.474 20.7212C67.2637 20.5982 67.0966 20.4323 66.9729 20.2233C66.8492 20.0143 66.7873 19.7745 66.7873 19.5164C66.7873 19.2582 66.8492 19.0246 66.9667 18.8156C67.0843 18.6066 67.2451 18.4406 67.4493 18.3177C67.6473 18.1948 67.8762 18.1333 68.1237 18.1333C68.3711 18.1333 68.5815 18.1948 68.7733 18.3177C68.9651 18.4406 69.1197 18.6066 69.2311 18.8156C69.3425 19.0246 69.4043 19.2582 69.4043 19.5164V19.6393H67.1894C67.208 19.8176 67.2699 19.9712 67.3627 20.1126C67.4555 20.254 67.573 20.3585 67.7215 20.4446C67.87 20.5245 68.0309 20.5675 68.2041 20.5675C68.3464 20.5675 68.4825 20.5429 68.6124 20.506C68.7485 20.463 68.8537 20.4015 68.9465 20.3216L69.194 20.5859C69.0455 20.6966 68.8846 20.7765 68.7238 20.8318C68.5629 20.8871 68.3773 20.8994 68.1793 20.9056ZM67.1956 19.3135H69.0022C68.9836 19.1537 68.9279 19.0062 68.8413 18.8832C68.7547 18.7541 68.6495 18.6558 68.5258 18.582C68.4021 18.5083 68.2598 18.4714 68.1113 18.4714C67.9628 18.4714 67.8143 18.5083 67.6844 18.5759C67.5545 18.6496 67.4493 18.748 67.3627 18.8709C67.2761 19.0062 67.2204 19.1537 67.1956 19.3135Z"
        fill="white"
      />
      <path
        d="M72.1637 20.9117C71.9162 20.9117 71.6997 20.8686 71.5079 20.7764C71.3223 20.6842 71.1738 20.5613 71.0686 20.4015C70.9634 20.2416 70.9139 20.0572 70.9139 19.8421C70.9139 19.6946 70.9387 19.5593 70.9944 19.4364C71.0439 19.3134 71.1305 19.2028 71.2542 19.0983C71.378 18.9938 71.545 18.8832 71.7492 18.7664C71.6254 18.6065 71.5326 18.4652 71.4831 18.3361C71.4336 18.207 71.4027 18.0656 71.4027 17.9242C71.4027 17.7583 71.4398 17.6046 71.5203 17.4694C71.6007 17.3341 71.7059 17.2296 71.8482 17.1559C71.9843 17.0821 72.1451 17.0391 72.3122 17.0391C72.4792 17.0391 72.6277 17.0698 72.7514 17.1374C72.8814 17.205 72.9804 17.2972 73.0546 17.414C73.1288 17.5308 73.166 17.6661 73.166 17.8197C73.166 17.998 73.1165 18.1517 73.0237 18.293C72.9247 18.4344 72.7762 18.5635 72.5658 18.6864L72.2936 18.8463C72.4421 19.0122 72.603 19.1782 72.7762 19.3503C72.9494 19.5224 73.135 19.6884 73.3144 19.8605C73.4073 19.7191 73.4815 19.5593 73.5372 19.3872C73.599 19.2151 73.6424 19.0368 73.6795 18.8524L74.0445 18.9139C73.995 19.1413 73.9393 19.3565 73.8589 19.5532C73.7785 19.7499 73.6919 19.9343 73.5805 20.1003C73.698 20.1986 73.8094 20.297 73.9269 20.3892C74.0445 20.4814 74.1497 20.5674 74.2487 20.6412L74.0074 20.9239C73.9084 20.844 73.8032 20.7641 73.6918 20.6781C73.5805 20.592 73.4691 20.4998 73.3578 20.4076C73.2031 20.5736 73.0237 20.6965 72.8133 20.7826C72.6215 20.8686 72.3988 20.9117 72.1637 20.9117ZM72.1822 20.5797C72.3617 20.5797 72.5287 20.5428 72.6896 20.4752C72.8504 20.4076 72.9865 20.3031 73.1103 20.174C72.8999 19.9835 72.6958 19.7929 72.504 19.5962C72.306 19.3995 72.1266 19.2151 71.9719 19.0307C71.8049 19.1229 71.6687 19.2089 71.5698 19.2889C71.4708 19.3688 71.4027 19.4548 71.3594 19.5409C71.3223 19.6269 71.2975 19.7253 71.2975 19.8359C71.2975 20.0572 71.378 20.2355 71.545 20.3707C71.7121 20.506 71.9162 20.5797 72.1822 20.5797ZM72.0894 18.6004L72.3988 18.4221C72.5349 18.3422 72.6339 18.2562 72.6958 18.1578C72.7638 18.0595 72.7947 17.955 72.7947 17.832C72.7947 17.7029 72.7453 17.5861 72.6525 17.5001C72.5597 17.4079 72.4421 17.3649 72.306 17.3649C72.1575 17.3649 72.0276 17.414 71.9286 17.5185C71.8296 17.623 71.7801 17.7583 71.7801 17.9181C71.7801 18.0287 71.8049 18.1332 71.8482 18.2377C71.8915 18.3422 71.9781 18.4652 72.0894 18.6004Z"
        fill="white"
      />
      <path
        d="M77.1008 20.9056C76.8038 20.9056 76.5192 20.8442 76.2408 20.7274C75.9624 20.6106 75.7273 20.4323 75.517 20.211L75.7892 19.9283C75.981 20.1372 76.1913 20.2909 76.4141 20.3954C76.6368 20.4999 76.8657 20.5491 77.1132 20.5491C77.3112 20.5491 77.4844 20.5184 77.6391 20.4569C77.7937 20.3954 77.9113 20.3094 77.9979 20.1926C78.0845 20.0819 78.1278 19.9528 78.1278 19.8115C78.1278 19.6209 78.0598 19.4734 77.9237 19.3689C77.7875 19.2644 77.5648 19.1906 77.2555 19.1353L76.711 19.0492C76.346 18.9878 76.08 18.8833 75.9067 18.7296C75.7335 18.5759 75.6469 18.3669 75.6469 18.1026C75.6469 17.8936 75.7026 17.7153 75.8139 17.5555C75.9253 17.4018 76.08 17.2789 76.278 17.1867C76.4759 17.1006 76.711 17.0576 76.9709 17.0576C77.2307 17.0576 77.4968 17.1006 77.7566 17.1867C78.0165 17.2728 78.2454 17.3957 78.4619 17.5555L78.2268 17.8752C77.8123 17.5617 77.3916 17.408 76.9585 17.408C76.7791 17.408 76.6182 17.4326 76.4821 17.4941C76.346 17.5494 76.2408 17.6231 76.1604 17.7276C76.08 17.8321 76.049 17.9428 76.049 18.0719C76.049 18.2501 76.1109 18.3792 76.2285 18.4714C76.346 18.5636 76.544 18.6312 76.8162 18.6743L77.3545 18.7603C77.769 18.8279 78.066 18.9447 78.2578 19.1046C78.4434 19.2644 78.5362 19.498 78.5362 19.7869C78.5362 20.002 78.4743 20.1987 78.3506 20.3708C78.2268 20.5429 78.0598 20.672 77.8432 20.7704C77.6329 20.8626 77.3854 20.9056 77.1008 20.9056Z"
        fill="white"
      />
      <path
        d="M80.3489 20.9059C80.0952 20.9059 79.8601 20.8444 79.6498 20.7215C79.4394 20.5985 79.2724 20.4326 79.1486 20.2236C79.0249 20.0146 78.963 19.7748 78.963 19.5167C78.963 19.2585 79.0249 19.0188 79.1486 18.8098C79.2724 18.6008 79.4394 18.4348 79.6498 18.3119C79.8601 18.1889 80.0952 18.1274 80.3489 18.1274C80.6025 18.1274 80.8438 18.1889 81.048 18.3119C81.2583 18.4348 81.4192 18.6008 81.5429 18.8098C81.6667 19.0188 81.7285 19.2585 81.7285 19.5167C81.7285 19.7748 81.6667 20.0146 81.5429 20.2236C81.4192 20.4326 81.2522 20.5985 81.048 20.7215C80.8438 20.8444 80.6025 20.9059 80.3489 20.9059ZM80.3489 20.5555C80.5345 20.5555 80.7015 20.5063 80.85 20.4141C80.9985 20.3219 81.116 20.199 81.2088 20.0391C81.2955 19.8855 81.3388 19.7072 81.3388 19.5167C81.3388 19.3261 81.2955 19.1417 81.2088 18.988C81.1222 18.8343 81.0047 18.7114 80.85 18.6131C80.7015 18.5208 80.5345 18.4717 80.3489 18.4717C80.1633 18.4717 79.9962 18.5208 79.8477 18.6131C79.6992 18.7053 79.5817 18.8282 79.4889 18.988C79.4023 19.1417 79.359 19.32 79.359 19.5167C79.359 19.7134 79.4023 19.8855 79.4889 20.0391C79.5755 20.199 79.6931 20.3219 79.8477 20.4141C79.9962 20.5063 80.1633 20.5555 80.3489 20.5555Z"
        fill="white"
      />
      <path
        d="M82.2854 20.8565V17.1069L82.6875 17.0146V20.8565H82.2854Z"
        fill="white"
      />
      <path
        d="M84.4013 20.9058C84.1971 20.9058 84.0177 20.8628 83.8568 20.7767C83.696 20.6907 83.5723 20.5677 83.4856 20.4141C83.399 20.2604 83.3557 20.076 83.3557 19.867V18.1704H83.7517V19.7871C83.7517 20.0268 83.8197 20.2174 83.9558 20.3526C84.0919 20.4878 84.2776 20.5616 84.5065 20.5616C84.6673 20.5616 84.8096 20.5247 84.9395 20.4509C85.0695 20.3772 85.1685 20.2727 85.2489 20.1436V18.1704H85.6449V20.8566H85.2489V20.5431C85.0324 20.789 84.7539 20.9058 84.4013 20.9058Z"
        fill="white"
      />
      <path
        d="M87.3833 20.9055C87.1482 20.9055 86.9688 20.8502 86.8451 20.7395C86.7213 20.6289 86.6533 20.4691 86.6533 20.2539V18.502H86.0717V18.164H86.6533V17.4817L87.0492 17.3833V18.164H87.8659V18.502H87.0492V20.1617C87.0492 20.3031 87.0802 20.4076 87.1482 20.4691C87.2101 20.5305 87.3215 20.5613 87.4638 20.5613C87.538 20.5613 87.6061 20.5551 87.6679 20.5428C87.7298 20.5306 87.7917 20.5121 87.8597 20.4875V20.8379C87.7917 20.8625 87.7174 20.8809 87.6308 20.8932C87.5442 20.9055 87.4638 20.9117 87.3833 20.9055Z"
        fill="white"
      />
      <path
        d="M88.4908 17.6539C88.4165 17.6539 88.3547 17.6293 88.299 17.574C88.2433 17.5187 88.2186 17.4572 88.2186 17.3835C88.2186 17.3097 88.2433 17.2482 88.299 17.1991C88.3547 17.1437 88.4165 17.1191 88.4908 17.1191C88.565 17.1191 88.6269 17.1437 88.6826 17.1991C88.7321 17.2482 88.763 17.3158 88.763 17.3896C88.763 17.4634 88.7383 17.5248 88.6826 17.574C88.6331 17.6293 88.565 17.6539 88.4908 17.6539ZM88.2928 20.8565V18.1703H88.695V20.8565H88.2928Z"
        fill="white"
      />
      <path
        d="M90.6315 20.9059C90.3778 20.9059 90.1427 20.8444 89.9323 20.7215C89.722 20.5985 89.5549 20.4326 89.4312 20.2236C89.3075 20.0146 89.2456 19.7748 89.2456 19.5167C89.2456 19.2585 89.3075 19.0188 89.4312 18.8098C89.5549 18.6008 89.722 18.4348 89.9323 18.3119C90.1427 18.1889 90.3778 18.1274 90.6315 18.1274C90.8851 18.1274 91.1264 18.1889 91.3306 18.3119C91.5409 18.4348 91.7018 18.6008 91.8255 18.8098C91.9493 19.0188 92.0111 19.2585 92.0111 19.5167C92.0111 19.7748 91.9493 20.0146 91.8255 20.2236C91.7018 20.4326 91.5347 20.5985 91.3306 20.7215C91.1264 20.8444 90.8851 20.9059 90.6315 20.9059ZM90.6315 20.5555C90.8171 20.5555 90.9841 20.5063 91.1326 20.4141C91.2811 20.3219 91.3986 20.199 91.4914 20.0391C91.5781 19.8855 91.6214 19.7072 91.6214 19.5167C91.6214 19.3261 91.5781 19.1417 91.4914 18.988C91.4048 18.8343 91.2873 18.7114 91.1326 18.6131C90.9841 18.5208 90.8171 18.4717 90.6315 18.4717C90.4459 18.4717 90.2788 18.5208 90.1303 18.6131C89.9818 18.7053 89.8643 18.8282 89.7715 18.988C89.6849 19.1417 89.6416 19.32 89.6416 19.5167C89.6416 19.7134 89.6849 19.8855 89.7715 20.0391C89.8581 20.199 89.9757 20.3219 90.1303 20.4141C90.2788 20.5063 90.4459 20.5555 90.6315 20.5555Z"
        fill="white"
      />
      <path
        d="M92.5679 20.8563V18.1701H92.9701V18.4836C93.1804 18.2377 93.465 18.1147 93.8239 18.1147C94.028 18.1147 94.2075 18.1578 94.3683 18.2438C94.523 18.3299 94.6467 18.4528 94.7333 18.6065C94.82 18.7602 94.8633 18.9446 94.8633 19.1536V20.8501H94.4673V19.2396C94.4673 18.9999 94.3992 18.8094 94.2631 18.6741C94.127 18.5389 93.9414 18.4651 93.7125 18.4651C93.5516 18.4651 93.4093 18.502 93.2794 18.5696C93.1557 18.6434 93.0505 18.7417 92.9639 18.877V20.8563H92.5679Z"
        fill="white"
      />
      <path
        d="M96.3914 20.9057C96.1687 20.9057 95.9584 20.8688 95.7604 20.795C95.5624 20.7213 95.3953 20.6168 95.2531 20.4877L95.4943 20.2295C95.6181 20.3463 95.7604 20.4324 95.9089 20.4938C96.0573 20.5553 96.212 20.586 96.3729 20.586C96.5894 20.586 96.7626 20.543 96.8988 20.4508C97.0349 20.3586 97.1029 20.2479 97.1029 20.1004C97.1029 19.9836 97.0596 19.8914 96.9792 19.8238C96.8988 19.7562 96.7688 19.7132 96.5956 19.6886L96.1254 19.6271C95.8532 19.5902 95.6552 19.5042 95.5253 19.3874C95.3954 19.2644 95.3273 19.1046 95.3273 18.8956C95.3273 18.7481 95.3706 18.6129 95.4572 18.4961C95.5438 18.3793 95.6614 18.2871 95.8161 18.2194C95.9707 18.1518 96.144 18.1211 96.3419 18.1211C96.5399 18.1211 96.7255 18.1518 96.8988 18.2072C97.072 18.2625 97.239 18.3547 97.4061 18.4776L97.1957 18.7481C97.0472 18.6436 96.8988 18.5698 96.7565 18.5206C96.6142 18.4715 96.4719 18.4469 96.3234 18.4469C96.1378 18.4469 95.9831 18.4899 95.8717 18.5698C95.7542 18.6497 95.6985 18.7604 95.6985 18.8895C95.6985 19.0124 95.7356 19.1046 95.8161 19.1661C95.8965 19.2275 96.0202 19.2706 96.1996 19.2952L96.6698 19.3566C96.9421 19.3935 97.1401 19.4734 97.2762 19.5902C97.4123 19.707 97.4803 19.8791 97.4803 20.0881C97.4803 20.2418 97.4308 20.3832 97.338 20.5061C97.2452 20.6291 97.1091 20.7274 96.9483 20.8012C96.7874 20.8749 96.6018 20.9118 96.3914 20.9057Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_124_432">
        <rect width="98" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const social = [
  {
    key: 0,
    icon: <Facebook color="#FCD961" />,
    href: "/",
  },
  {
    key: 1,
    icon: <Instagram color="#FCD961" />,
    href: "/",
  },
  {
    key: 2,
    icon: <Twitter color="#FCD961" />,
    href: "/",
  },
  {
    key: 3,
    icon: <Youtube color="#FCD961" />,
    href: "/",
  },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="static bottom-0 bg-[#333D42] py-10 pt-28 px-20">
      <div className="flex justify-around">
        <div className="flex flex-col gap-10">
          <img
            className="w-[20rem]"
            src="logo-white.png"
            alt="Salamy's Logo white"
          />
          <div className="flex flex-col text-default gap-3">
            <h3 className="text-default font-normal text-3xl">
              منصة سلامي النفسية
            </h3>
            <p className=" leading-0 text-2xl flex-wrap font-light break-words w-[40rem]">
              احصل على الدعم النفسي الذي تحتاجه الآن علي منصة سلامي للصحة
              النفسية، واعرف اكثر عن كيفية تنظيم حياتك وعلاقات مع الاشخاص
              المحيطة بشكل علمي
            </p>
            <Button
              className="bg-primary text-content1 py-5 text-2xl px-2"
              radius="sm"
            >
              اعرف اكتر
            </Button>
          </div>
        </div>
        <div className="flex text-default flex-col 2xl:justify-start items-center gap-10">
          {RightElementFooter()}
        </div>
      </div>

      <Divider className="bg-white my-16" />
      <section className="flex justify-between">
        <h1 className="font-semibold">جميع الحقوق محفوظة لمنصة سلامي ٢٠٢٣</h1>
        <div className="flex items-center  gap-6">
          <h1 className="text-primary font-medium"> احدي مشروعات</h1>
          <a href="https://dbrandria.com/">{BrandriaBrand}</a>
        </div>
      </section>
    </footer>
  );
}

function RightElementFooter(): JSX.Element {
  return (
    <>
      <div className="flex gap-10 ">
        <h1 className="text-default text-4xl font-light flex flex-col">
          <span className="text-[4rem] mb-6">اشترك</span>
          في الخدمة البريدية
        </h1>

        <div className="flex text-default flex-col gap-4">
          <h1 className=" font-light text-xl">
            اشترك في الخدمة البريدية ليصلك جديد موقع سلامي
          </h1>
          <div className="relative">
            <Input
              className="bg-foreground rounded-lg text-content1-foreground"
              size="sm"
              radius="md"
              placeholder="البريد الالكتروني"
            />
            <Button
              className=" text-sm absolute top-0 left-0 p-6 bg-primary text-content1"
              radius="sm"
            >
              اشترك
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 flex gap-10">
        <div>
          <h1 className="text-2xl">عن منصة سلامي</h1>
          <ul className="text-lg flex gap-10 font-light my-6">
            <li>
              <a href="/">قصتنا</a>
            </li>
            <li>
              <a href="/">مهمتنا</a>
            </li>
          </ul>
          <h1 className="text-2xl">كيف يعمل سلامي</h1>
          <ul className="text-lg flex gap-10 font-light my-6">
            <li>
              <a href="/">انتاج المحتوي</a>
            </li>
            <li>
              <a href="/">دقة المحتوي</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">طلب المساعدة</h1>
          <ul className="text-lg flex flex-col gap-[26px] font-light my-6">
            <li>
              <a href="/">مؤسسات ومنظمات</a>
            </li>
            <li>
              <a href="/">الصحة النفسية بالفئات العمرية</a>
            </li>
            <li>
              <a href="/">خطوط المساعدة والدعم النفسي</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">تواصل معنا</h1>
          <ul className="text-lg flex flex-col gap-[26px] font-light my-6">
            <li>
              <a href="tel:+010000054376">+٠١٠٠٠٠٥٤٣٧٦</a>
            </li>
            <li>٣٠ شارع ١٠٠ المعادي, القاهرة</li>
            <li>
              <ul className="flex gap-4">
                {social.map(({ href, icon, key }) => {
                  return (
                    <a href={href} key={key}>
                      {icon}
                    </a>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
