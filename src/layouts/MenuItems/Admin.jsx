import { FaCalendarAlt } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export const admin = [
  {
    name: "Dashboard",
    to: "dashboard",
    icon:
      <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3335 13.3329L23.3335 4.56619C22.4168 3.74626 21.23 3.29297 20.0002 3.29297C18.7703 3.29297 17.5835 3.74626 16.6668 4.56619L6.66682 13.3329C6.13744 13.8063 5.71499 14.3871 5.42761 15.0366C5.14023 15.6861 4.99451 16.3893 5.00016 17.0995V31.6662C5.00016 32.9923 5.52694 34.264 6.46462 35.2017C7.40231 36.1394 8.67408 36.6662 10.0002 36.6662H30.0002C31.3262 36.6662 32.598 36.1394 33.5357 35.2017C34.4734 34.264 35.0002 32.9923 35.0002 31.6662V17.0829C35.0034 16.3755 34.8566 15.6754 34.5693 15.029C34.282 14.3826 33.8608 13.8044 33.3335 13.3329ZM23.3335 33.3329H16.6668V24.9995C16.6668 24.5575 16.8424 24.1336 17.155 23.821C17.4675 23.5085 17.8915 23.3329 18.3335 23.3329H21.6668C22.1089 23.3329 22.5328 23.5085 22.8453 23.821C23.1579 24.1336 23.3335 24.5575 23.3335 24.9995V33.3329ZM31.6668 31.6662C31.6668 32.1082 31.4912 32.5321 31.1787 32.8447C30.8661 33.1573 30.4422 33.3329 30.0002 33.3329H26.6668V24.9995C26.6668 23.6734 26.14 22.4017 25.2024 21.464C24.2647 20.5263 22.9929 19.9995 21.6668 19.9995H18.3335C17.0074 19.9995 15.7356 20.5263 14.798 21.464C13.8603 22.4017 13.3335 23.6734 13.3335 24.9995V33.3329H10.0002C9.55813 33.3329 9.13421 33.1573 8.82165 32.8447C8.50909 32.5321 8.33349 32.1082 8.33349 31.6662V17.0829C8.33379 16.8462 8.38448 16.6123 8.48219 16.3968C8.57989 16.1813 8.72238 15.989 8.90016 15.8329L18.9002 7.08286C19.2043 6.81566 19.5953 6.6683 20.0002 6.6683C20.405 6.6683 20.796 6.81566 21.1002 7.08286L31.1002 15.8329C31.2779 15.989 31.4204 16.1813 31.5181 16.3968C31.6158 16.6123 31.6665 16.8462 31.6668 17.0829V31.6662Z" fill="#C1BBEB" />
      </svg>


  },
  {
    name: "Categories",
    to: "categories",
    icon:
      <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="12" height="12" fill="#C1BBEB" />
        <rect x="23" y="5" width="12" height="12" fill="#C1BBEB" />
        <rect x="5" y="23" width="12" height="12" fill="#C1BBEB" />
        <rect x="23" y="23" width="12" height="12" fill="#C1BBEB" />
      </svg>



  }, {
    name: "Subcategories",
    to: "sub-categories",
    icon:
      <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="8" height="8" fill="#C1BBEB" />
        <rect x="16" y="5" width="8" height="8" fill="#C1BBEB" />
        <rect x="27" y="5" width="8" height="8" fill="#C1BBEB" />
        <rect x="5" y="16" width="8" height="8" fill="#C1BBEB" />
        <rect x="16" y="16" width="8" height="8" fill="#C1BBEB" />
        <rect x="27" y="16" width="8" height="8" fill="#C1BBEB" />
        <rect x="5" y="27" width="8" height="8" fill="#C1BBEB" />
        <rect x="16" y="27" width="8" height="8" fill="#C1BBEB" />
        <rect x="27" y="27" width="8" height="8" fill="#C1BBEB" />
      </svg>


  },
  {

    name: "Users",
    to: "user-management",
    icon: <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_327_5881)">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.9288 38.75H8.75C6.67875 38.75 5 37.0713 5 35V24.5863C5 22.7738 6.29625 21.2213 8.07875 20.8975C10.7212 20.4163 15.2775 19.5875 17.855 19.12C19.2737 18.8612 20.7263 18.8612 22.145 19.12C24.7225 19.5875 29.2788 20.4163 31.9213 20.8975C33.7038 21.2213 35 22.7738 35 24.5863C35 27.3125 35 32.0825 35 35C35 37.0713 33.3212 38.75 31.25 38.75H17.9288ZM29.785 23.05L29.79 23.0563C30.0088 23.3838 30.06 23.795 29.9287 24.1662L29.0462 26.6662C28.9312 26.9925 28.685 27.2575 28.3675 27.3963L26.7075 28.12L27.3675 29.4412C27.5525 29.81 27.5425 30.2462 27.3425 30.6075L24.2075 36.25H31.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L29.785 23.05ZM26.3663 22.4275L21.6975 21.5788C20.575 21.375 19.425 21.375 18.3025 21.5788L13.6337 22.4275L12.6363 23.9238L13.13 25.3213L15.5 26.3537C15.8138 26.4912 16.0575 26.7512 16.175 27.0737C16.2925 27.3962 16.2712 27.7525 16.1175 28.0588L15.1625 29.9688L18.6525 36.25H21.3475L24.8375 29.9688L23.8825 28.0588C23.7288 27.7525 23.7075 27.3962 23.825 27.0737C23.9425 26.7512 24.1862 26.4912 24.5 26.3537L26.87 25.3213L27.3638 23.9238L26.3663 22.4275ZM10.215 23.05L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25H15.7925L12.6575 30.6075C12.4575 30.2462 12.4475 29.81 12.6325 29.4412L13.2925 28.12L11.6325 27.3963C11.315 27.2575 11.0688 26.9925 10.9538 26.6662L10.0712 24.1662C9.94 23.795 9.99125 23.3838 10.21 23.0563L10.215 23.05ZM28.75 30V32.5C28.75 33.19 29.31 33.75 30 33.75C30.69 33.75 31.25 33.19 31.25 32.5V30C31.25 29.31 30.69 28.75 30 28.75C29.31 28.75 28.75 29.31 28.75 30ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z" fill="#C1BBEB" />
      </g>
      <defs>
        <clipPath id="clip0_327_5881">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>

  },
  {
    name: "Service Providers",

    to: "service-providers",

    icon: <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_327_5886)">
        <path fillRule="evenodd" clipRule="evenodd" d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z" fill="#C1BBEB" />
      </g>
      <defs>
        <clipPath id="clip0_327_5886">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  },
  {
    name: "Franchisee",
    to: "franchise",
    icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0.833984L18.372 4.65698L17.343 6.37198L17 6.16598V7.99998H22V22H2V7.99998H7V6.16598L6.657 6.37198L5.628 4.65698L12 0.833984ZM9 4.96598V7.99998H15V4.96598L12 3.16598L9 4.96598ZM11 4.99798H13.004V7.00198H11V4.99798ZM4 9.99998V20H8V13H16V20H20V9.99998H4ZM14 20V15H10V20H14Z" fill="#C1BBEB" />
    </svg>


  },
  {
    name: "Finance",
    to: "finance",
    icon: <svg width="35" height="35" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.2361 21.8435C32.9951 21.0315 30.5091 21.212 28.4072 22.3374L24.9807 23.8788C24.7038 22.3007 23.4918 21.1148 21.9958 21.0692C21.987 21.069 16.8582 21.0111 16.8582 21.0111C12.7531 19.885 10.0857 21.332 8.56409 22.7579C8.25289 23.0496 7.97922 23.3498 7.73836 23.646C7.32776 23.2038 6.60298 23.0856 6.07443 23.3762L1.41879 25.9354C0.814942 26.2674 0.552207 26.9956 0.805455 27.6358L5.35537 39.1377C5.65434 39.8934 6.57315 40.2274 7.29007 39.8333L11.9457 37.2742C12.3821 37.0343 12.639 36.5873 12.6531 36.1162H19.6017C20.7351 36.1162 21.8541 35.8185 22.8377 35.2553C22.8377 35.2553 35.9061 27.7589 35.9798 27.6919C37.8099 26.027 37.8663 22.7966 35.2361 21.8435C36.2853 22.2237 32.9951 21.0315 35.2361 21.8435ZM7.33169 36.688L3.79631 27.7508L6.03255 26.5216L9.56793 35.4588L7.33169 36.688ZM34.2311 25.5773L21.4743 32.8826C20.9049 33.2087 20.2573 33.381 19.6014 33.381H11.6914L9.03554 26.667C9.26306 26.2034 9.71118 25.4342 10.439 24.7522C11.9295 23.3555 13.8941 22.998 16.2786 23.6898C16.3978 23.7244 16.5213 23.7427 16.6454 23.7441L21.9175 23.8034C22.0521 23.815 22.3006 24.1143 22.3006 24.5679C22.3006 25.035 22.044 25.3327 21.9098 25.3327H16.7297V28.0679H21.9098C22.5515 28.0679 23.1487 27.8509 23.6458 27.4791L29.5774 24.8109C29.6089 24.7968 29.6396 24.7815 29.6699 24.765C31.0928 23.9914 32.781 23.8636 34.3014 24.4145C34.903 24.6327 34.4684 25.3364 34.2311 25.5773ZM25.9995 19.7079C20.5664 19.7079 16.1462 15.2874 16.1462 9.85393C16.1462 4.42051 20.5663 0 25.9995 0C31.4326 0 35.8527 4.42051 35.8527 9.85393C35.8527 15.2874 31.4325 19.7079 25.9995 19.7079ZM25.9995 2.73521C22.077 2.73521 18.8859 5.92863 18.8859 9.85393C18.8859 13.7792 22.0771 16.9727 25.9995 16.9727C29.922 16.9727 33.1131 13.7791 33.1131 9.85393C33.1131 5.92872 29.9219 2.73521 25.9995 2.73521Z" fill="#C1BBEB" />
    </svg>
  },
  {
    name: "Accounts",
    to: "accounts",
    icon: <svg width="35" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth="2.5" d="M25.9419 33.3927C31.6895 33.3927 36.3489 31.451 36.3489 29.0557C36.3489 26.6605 31.6895 24.7188 25.9419 24.7188C20.1943 24.7188 15.5349 26.6605 15.5349 29.0557C15.5349 31.451 20.1943 33.3927 25.9419 33.3927Z" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M36.349 31.837V29.055M15.535 29.055V33.392C15.535 35.787 20.194 37.729 25.942 37.729C27.8703 37.7432 29.7921 37.5039 31.658 37.017M22.687 16.85C20.2238 15.8268 17.5735 15.3308 14.907 15.394C9.16 15.394 4.5 17.335 4.5 19.73C4.5 22.125 9.16 24.067 14.907 24.067C17.5735 24.1303 20.2238 23.6343 22.687 22.611" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M4.5 19.7305V24.0685C4.5 26.4635 9.16 28.4055 14.907 28.4055C15.163 28.4055 15.4167 28.4018 15.668 28.3945" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M4.5 24.0684V28.4054C4.5 30.8014 9.16 32.7434 14.907 32.7434C15.1177 32.7434 15.3267 32.7407 15.534 32.7354" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M33.093 18.9455C38.8407 18.9455 43.5 17.0037 43.5 14.6085C43.5 12.2132 38.8407 10.2715 33.093 10.2715C27.3454 10.2715 22.686 12.2132 22.686 14.6085C22.686 17.0037 27.3454 18.9455 33.093 18.9455Z" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M22.6851 14.6074V18.9444C22.6851 21.3404 27.3451 23.2824 33.0931 23.2824C38.8411 23.2824 43.5001 21.3394 43.5001 18.9444V14.6074" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M35.6421 27.4893C40.1571 27.0153 43.5001 25.3123 43.5001 23.2833V18.9453M22.6851 18.9463V23.2833C22.7078 23.878 22.9601 24.4408 23.3891 24.8533" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M36.3501 31.7402C40.5021 31.1712 43.5001 29.5412 43.5001 27.6202V23.2832" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M38.5 45.5C42.366 45.5 45.5 42.366 45.5 38.5C45.5 34.634 42.366 31.5 38.5 31.5C34.634 31.5 31.5 34.634 31.5 38.5C31.5 42.366 34.634 45.5 38.5 45.5Z" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeWidth="2.5" d="M35.8501 42.5V34.5H38.4691C39.1817 34.5 39.8652 34.7831 40.3691 35.287C40.873 35.7909 41.1561 36.4744 41.1561 37.187C41.1561 37.8996 40.873 38.5831 40.3691 39.087C39.8652 39.5909 39.1817 39.874 38.4691 39.874M38.4691 39.874H35.8501M38.4691 39.874L41.0881 42.498" stroke="#C1BBEB" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  },
  {
    name: "Profile",
    to: "profile",
    icon: <svg width="35" height="35" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1757 9.87591C21.1757 10.2197 21.1523 10.5634 21.1093 10.9033C21.1289 10.7665 21.1484 10.6259 21.164 10.4892C21.0703 11.1689 20.8906 11.829 20.6289 12.4618C20.6796 12.3368 20.7343 12.2118 20.7851 12.0868C20.5234 12.704 20.1875 13.2822 19.7773 13.8134C19.8593 13.7079 19.9414 13.6025 20.0234 13.497C19.6171 14.0204 19.1445 14.4931 18.621 14.8993C18.7265 14.8173 18.832 14.7353 18.9375 14.6533C18.4062 15.0595 17.8281 15.3993 17.2109 15.6611C17.3359 15.6103 17.4609 15.5556 17.5859 15.5048C16.9531 15.7665 16.2929 15.9462 15.6132 16.04C15.75 16.0204 15.8906 16.0009 16.0273 15.9853C15.3437 16.0751 14.6562 16.0751 13.9726 15.9853C14.1093 16.0048 14.25 16.0243 14.3867 16.04C13.707 15.9462 13.0468 15.7665 12.414 15.5048C12.539 15.5556 12.664 15.6103 12.789 15.6611C12.1718 15.3993 11.5937 15.0634 11.0624 14.6533C11.1679 14.7353 11.2734 14.8173 11.3789 14.8993C10.8554 14.4931 10.3828 14.0204 9.97651 13.497C10.0585 13.6025 10.1406 13.7079 10.2226 13.8134C9.81635 13.2822 9.47651 12.704 9.21479 12.0868C9.26557 12.2118 9.32026 12.3368 9.37104 12.4618C9.10932 11.829 8.92964 11.1689 8.83589 10.4892C8.85542 10.6259 8.87495 10.7665 8.89057 10.9033C8.80073 10.2197 8.80073 9.53216 8.89057 8.84856C8.87104 8.98528 8.85151 9.12591 8.83589 9.26263C8.92964 8.58294 9.10932 7.92278 9.37104 7.28997C9.32026 7.41497 9.26557 7.53997 9.21479 7.66497C9.47651 7.04778 9.81245 6.46966 10.2226 5.93841C10.1406 6.04388 10.0585 6.14934 9.97651 6.25481C10.3828 5.73138 10.8554 5.25872 11.3789 4.85247C11.2734 4.9345 11.1679 5.01653 11.0624 5.09856C11.5937 4.69231 12.1718 4.35247 12.789 4.09075C12.664 4.14153 12.539 4.19622 12.414 4.247C13.0468 3.98528 13.707 3.80559 14.3867 3.71184C14.25 3.73138 14.1093 3.75091 13.9726 3.76653C14.6562 3.67669 15.3437 3.67669 16.0273 3.76653C15.8906 3.747 15.75 3.72747 15.6132 3.71184C16.2929 3.80559 16.9531 3.98528 17.5859 4.247C17.4609 4.19622 17.3359 4.14153 17.2109 4.09075C17.8281 4.35247 18.4062 4.68841 18.9375 5.09856C18.832 5.01653 18.7265 4.9345 18.621 4.85247C19.1445 5.25872 19.6171 5.73138 20.0234 6.25481C19.9414 6.14934 19.8593 6.04388 19.7773 5.93841C20.1836 6.46966 20.5234 7.04778 20.7851 7.66497C20.7343 7.53997 20.6796 7.41497 20.6289 7.28997C20.8906 7.92278 21.0703 8.58294 21.164 9.26263C21.1445 9.12591 21.125 8.98528 21.1093 8.84856C21.1523 9.18841 21.1718 9.53216 21.1757 9.87591C21.1796 10.6923 21.8906 11.4775 22.7382 11.4384C23.582 11.3993 24.3046 10.7509 24.3007 9.87591C24.2929 8.00481 23.7304 6.09075 22.6289 4.56731C22.332 4.15716 22.0156 3.75481 21.664 3.39153C21.3085 3.02435 20.9179 2.70794 20.5117 2.39935C19.7734 1.83685 18.9492 1.42278 18.0742 1.10247C14.5468 -0.190499 10.2929 0.961845 7.9062 3.86809C7.57807 4.26653 7.26557 4.6806 6.99995 5.12591C6.73432 5.56731 6.52729 6.03606 6.33588 6.51263C5.97651 7.39544 5.79291 8.33294 5.71869 9.28216C5.57416 11.1415 6.05854 13.0829 7.02729 14.6767C7.96088 16.2158 9.37104 17.5361 11.0195 18.2822C11.5039 18.5009 11.9999 18.704 12.5156 18.8486C13.0273 18.9892 13.5468 19.0673 14.0742 19.1298C15.0351 19.2431 16.0156 19.165 16.9648 18.9736C20.5703 18.2392 23.5898 15.1337 24.1484 11.4892C24.2304 10.9579 24.2929 10.4267 24.2929 9.88763C24.2968 9.07122 23.5703 8.28606 22.7304 8.32513C21.8867 8.35247 21.1757 9.00091 21.1757 9.87591ZM26.3593 34.3017C25.5937 34.3017 24.8281 34.3017 24.0625 34.3017C22.2382 34.3017 20.4179 34.3017 18.5937 34.3017C16.3984 34.3017 14.2031 34.3017 12.0039 34.3017C10.1093 34.3017 8.21479 34.3017 6.31635 34.3017C5.42963 34.3017 4.54291 34.3095 3.65619 34.3017C3.55854 34.3017 3.46088 34.2939 3.36713 34.2822C3.50385 34.3017 3.64447 34.3212 3.78119 34.3368C3.62494 34.3134 3.4765 34.2704 3.33197 34.2118C3.45697 34.2626 3.58197 34.3173 3.70697 34.3681C3.55072 34.3017 3.40619 34.2158 3.26947 34.1103C3.37494 34.1923 3.48041 34.2743 3.58588 34.3564C3.46869 34.2587 3.35932 34.1533 3.26557 34.0361C3.3476 34.1415 3.42963 34.247 3.51166 34.3525C3.40619 34.2158 3.32416 34.0712 3.25385 33.915C3.30463 34.04 3.35932 34.165 3.4101 34.29C3.3515 34.1454 3.31244 33.9931 3.2851 33.8408C3.30463 33.9775 3.32416 34.1181 3.33979 34.2548C3.27729 33.7822 3.32025 33.2822 3.32025 32.8056C3.32025 32.247 3.32025 31.6923 3.32025 31.1337C3.32025 30.7157 3.34369 30.3017 3.39838 29.8876C3.37885 30.0243 3.35932 30.165 3.34369 30.3017C3.45307 29.5009 3.664 28.7157 3.98041 27.9697C3.92963 28.0947 3.87494 28.2197 3.82416 28.3447C4.12885 27.6337 4.51947 26.9658 4.99213 26.3525C4.9101 26.4579 4.82807 26.5634 4.74604 26.6689C5.21869 26.0634 5.76166 25.5165 6.37104 25.0439C6.26557 25.1259 6.1601 25.2079 6.05463 25.29C6.66791 24.8173 7.33588 24.4267 8.04682 24.122C7.92182 24.1728 7.79682 24.2275 7.67182 24.2782C8.41792 23.9657 9.19917 23.7509 10.0039 23.6415C9.86714 23.6611 9.72651 23.6806 9.58979 23.6962C10.1679 23.622 10.7421 23.6181 11.3242 23.6181C12.039 23.6181 12.7539 23.6181 13.4687 23.6181C15.1367 23.6181 16.8046 23.6181 18.4726 23.6181C19.1171 23.6181 19.7578 23.6142 20.4023 23.6962C20.2656 23.6767 20.125 23.6572 19.9882 23.6415C20.789 23.7509 21.5742 23.9618 22.3203 24.2782C22.1953 24.2275 22.0703 24.1728 21.9453 24.122C22.6562 24.4267 23.3242 24.8173 23.9375 25.29C23.832 25.2079 23.7265 25.1259 23.6211 25.0439C24.2265 25.5165 24.7734 26.0595 25.2461 26.6689C25.164 26.5634 25.082 26.4579 25 26.3525C25.4726 26.9658 25.8632 27.6337 26.1679 28.3447C26.1172 28.2197 26.0625 28.0947 26.0117 27.9697C26.3242 28.7157 26.539 29.497 26.6484 30.3017C26.6289 30.165 26.6093 30.0243 26.5937 29.8876C26.6679 30.4775 26.6718 31.0634 26.6718 31.6572C26.6718 32.3017 26.6718 32.9462 26.6718 33.5908C26.6718 33.8134 26.6796 34.0361 26.6523 34.2548C26.6718 34.1181 26.6914 33.9775 26.707 33.8408C26.6836 33.997 26.6406 34.1454 26.582 34.29C26.6328 34.165 26.6875 34.04 26.7382 33.915C26.6718 34.0712 26.5859 34.2158 26.4804 34.3525C26.5625 34.247 26.6445 34.1415 26.7265 34.0361C26.6289 34.1533 26.5234 34.2626 26.4062 34.3564C26.5117 34.2743 26.6171 34.1923 26.7226 34.1103C26.5859 34.2158 26.4414 34.2978 26.2851 34.3681C26.4101 34.3173 26.5351 34.2626 26.6601 34.2118C26.5156 34.2704 26.3632 34.3095 26.2109 34.3368C26.3476 34.3173 26.4882 34.2978 26.625 34.2822C26.539 34.2939 26.4492 34.2978 26.3593 34.3017C25.957 34.3056 25.5429 34.4736 25.2539 34.7587C24.9843 35.0283 24.7773 35.4736 24.7968 35.8642C24.8359 36.7001 25.4843 37.4384 26.3593 37.4267C27.8789 37.4033 29.2148 36.4111 29.6601 34.954C29.8359 34.3759 29.7968 33.7548 29.7968 33.1611C29.7968 31.8017 29.8398 30.454 29.6054 29.1064C29.2617 27.1337 28.2695 25.2783 26.9101 23.8212C25.5507 22.3642 23.7226 21.2939 21.789 20.8173C20.6796 20.5439 19.5625 20.5009 18.4296 20.5009C17.2656 20.5009 16.1054 20.5009 14.9414 20.5009C13.7929 20.5009 12.6484 20.5009 11.4999 20.5009C10.3398 20.5009 9.18745 20.5556 8.05854 20.8564C6.14057 21.3642 4.33588 22.4462 3.00385 23.915C1.6601 25.3954 0.687439 27.2548 0.371032 29.2392C0.160095 30.5712 0.203063 31.9072 0.203063 33.2509C0.203063 33.8681 0.167907 34.5126 0.390564 35.1025C0.679627 35.8603 1.14056 36.4579 1.81635 36.9072C2.34369 37.2548 3.01166 37.4228 3.63666 37.4306C3.94135 37.4345 4.24604 37.4306 4.55072 37.4306C5.33197 37.4306 6.10932 37.4306 6.89057 37.4306C7.99995 37.4306 9.10542 37.4306 10.2148 37.4306C11.5039 37.4306 12.7929 37.4306 14.082 37.4306C15.4062 37.4306 16.7265 37.4306 18.0507 37.4306C19.2617 37.4306 20.4687 37.4306 21.6796 37.4306C22.6289 37.4306 23.5781 37.4306 24.5234 37.4306C25.0664 37.4306 25.6093 37.4306 26.1523 37.4306C26.2226 37.4306 26.2929 37.4306 26.3632 37.4306C27.1797 37.4306 27.9648 36.7118 27.9257 35.8681C27.8867 35.0165 27.2382 34.3017 26.3593 34.3017Z" fill="#C1BBEB" />
    </svg>

  },
  {
    name: "Booking Details",
    to: "booking-details",
    icon: <FaCalendarAlt  className="text-2xl text-gray"/>
  },
  {
    name: "Transaction History",
    to: "transaction-history",
    icon: <TbTransactionRupee  className="text-2xl text-gray"/>
  },
  {
    name: "Service History",
    to: "service-history",
    icon: <MdOutlineMiscellaneousServices  className="text-2xl text-gray"/>
  },
  {
    name: "Chat",
    to: "chat",
    icon: <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.3332 3.33398H16.6665C15.3404 3.33398 14.0687 3.86077 13.131 4.79845C12.1933 5.73613 11.6665 7.0079 11.6665 8.33398V11.6673H6.6665C5.34042 11.6673 4.06865 12.1941 3.13097 13.1318C2.19329 14.0695 1.6665 15.3412 1.6665 16.6673V26.6673C1.66596 27.7017 1.98626 28.7109 2.58326 29.5556C3.18027 30.4004 4.02458 31.0392 4.99984 31.384V35.0007C5.00035 35.296 5.07932 35.5859 5.22867 35.8406C5.37802 36.0954 5.59239 36.3059 5.84984 36.4507C6.09893 36.5918 6.38019 36.6664 6.6665 36.6673C6.96564 36.6672 7.25924 36.5866 7.5165 36.434L15.4665 31.6673H23.3332C24.6593 31.6673 25.931 31.1405 26.8687 30.2029C27.8064 29.2652 28.3332 27.9934 28.3332 26.6673V25.6173L32.4832 28.1007C32.7404 28.2533 33.034 28.3339 33.3332 28.334C33.6195 28.3331 33.9007 28.2585 34.1498 28.1173C34.4073 27.9726 34.6216 27.7621 34.771 27.5073C34.9204 27.2525 34.9993 26.9626 34.9998 26.6673V23.0507C35.9751 22.7058 36.8194 22.067 37.4164 21.2223C38.0134 20.3775 38.3337 19.3684 38.3332 18.334V8.33398C38.3332 7.0079 37.8064 5.73613 36.8687 4.79845C35.931 3.86077 34.6592 3.33398 33.3332 3.33398ZM24.9998 26.6673C24.9998 27.1093 24.8242 27.5333 24.5117 27.8458C24.1991 28.1584 23.7752 28.334 23.3332 28.334H14.9998C14.7007 28.3341 14.4071 28.4147 14.1498 28.5673L8.33317 32.0507V30.0007C8.33317 29.5586 8.15758 29.1347 7.84502 28.8221C7.53245 28.5096 7.10853 28.334 6.6665 28.334C6.22448 28.334 5.80055 28.1584 5.48799 27.8458C5.17543 27.5333 4.99984 27.1093 4.99984 26.6673V16.6673C4.99984 16.2253 5.17543 15.8014 5.48799 15.4888C5.80055 15.1762 6.22448 15.0007 6.6665 15.0007H11.6665V18.334C11.6665 19.6601 12.1933 20.9318 13.131 21.8695C14.0687 22.8072 15.3404 23.334 16.6665 23.334H24.5332L24.9998 23.6173V26.6673ZM34.9998 18.334C34.9998 18.776 34.8242 19.1999 34.5117 19.5125C34.1991 19.8251 33.7752 20.0007 33.3332 20.0007C32.8911 20.0007 32.4672 20.1762 32.1547 20.4888C31.8421 20.8014 31.6665 21.2253 31.6665 21.6673V23.7173L25.8498 20.234C25.5926 20.0813 25.299 20.0007 24.9998 20.0007H16.6665C16.2245 20.0007 15.8006 19.8251 15.488 19.5125C15.1754 19.1999 14.9998 18.776 14.9998 18.334V8.33398C14.9998 7.89196 15.1754 7.46803 15.488 7.15547C15.8006 6.84291 16.2245 6.66732 16.6665 6.66732H33.3332C33.7752 6.66732 34.1991 6.84291 34.5117 7.15547C34.8242 7.46803 34.9998 7.89196 34.9998 8.33398V18.334Z" fill="#C1BBEB" />
    </svg>
  },
  {
    name: "Settings",
    to: "settings",
    icon: <svg width="35" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5456 0.916016C16.6485 0.916016 17.647 1.52852 18.1985 2.43268C18.4667 2.87018 18.6456 3.40977 18.6009 3.97852C18.571 4.41602 18.7052 4.85352 18.9436 5.26185C19.7037 6.50143 21.3878 6.9681 22.6993 6.2681C24.1748 5.42227 26.0377 5.93268 26.8872 7.37643L27.8858 9.09727C28.7502 10.541 28.2733 12.3931 26.7829 13.2243C25.5161 13.9681 25.069 15.616 25.8291 16.8702C26.0675 17.2639 26.3358 17.5993 26.7531 17.8035C27.2747 18.0806 27.6771 18.5181 27.9603 18.9556C28.5117 19.8598 28.467 20.9681 27.9305 21.9452L26.8872 23.6952C26.3358 24.6285 25.3075 25.2118 24.2493 25.2118C23.7277 25.2118 23.1464 25.066 22.6695 24.7744C22.282 24.5264 21.8349 24.4389 21.358 24.4389C19.8826 24.4389 18.6456 25.6494 18.6009 27.0931C18.6009 28.7702 17.2297 30.0827 15.5158 30.0827H13.4889C11.7601 30.0827 10.389 28.7702 10.389 27.0931C10.3592 25.6494 9.1222 24.4389 7.64675 24.4389C7.15493 24.4389 6.70783 24.5264 6.33524 24.7744C5.85832 25.066 5.26218 25.2118 4.75546 25.2118C3.68241 25.2118 2.65406 24.6285 2.10263 23.6952L1.07429 21.9452C0.522856 20.9973 0.493048 19.8598 1.04448 18.9556C1.28294 18.5181 1.73004 18.0806 2.23676 17.8035C2.65406 17.5993 2.92233 17.2639 3.17569 16.8702C3.92086 15.616 3.47376 13.9681 2.20696 13.2243C0.731505 12.3931 0.254592 10.541 1.10409 9.09727L2.10263 7.37643C2.96704 5.93268 4.81508 5.42227 6.30543 6.2681C7.60204 6.9681 9.28614 6.50143 10.0462 5.26185C10.2847 4.85352 10.4188 4.41602 10.389 3.97852C10.3592 3.40977 10.5231 2.87018 10.8063 2.43268C11.3577 1.52852 12.3563 0.945182 13.4442 0.916016H15.5456ZM14.5173 11.3868C12.1774 11.3868 10.2847 13.2243 10.2847 15.5139C10.2847 17.8035 12.1774 19.6264 14.5173 19.6264C16.8571 19.6264 18.7052 17.8035 18.7052 15.5139C18.7052 13.2243 16.8571 11.3868 14.5173 11.3868Z" fill="#C1BBEB" />
    </svg>
  },
  {
    name: "Income Management",
    to: "income-management",
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM13 17H11V15H9V13H11V11H9V9H11V7H13V9H15V11H13V13H15V15H13V17Z"
          fill="#C1BBEB"
        />
      </svg>
    ),
  },
  {
    name: "Service Management",
    to: "service-management",
    icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8H15V6H9V8ZM2 20V15H6V16H8V15H16V16H18V15H22V20H2ZM2 14V8H7V4H17V8H22V14H18V12H16V14H8V12H6V14H2Z" fill="#C1BBEB" />
    </svg>


  },
  {
    name: "Ads Management",
    to: "ads-management",

    icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="#C1BBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 15V11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9C9.53043 9 10.0391 9.21071 10.4142 9.58579C10.7893 9.96086 11 10.4696 11 11V15M7 13H11M17 9V15H15.5C15.2033 15 14.9133 14.912 14.6666 14.7472C14.42 14.5824 14.2277 14.3481 14.1142 14.074C14.0006 13.7999 13.9709 13.4983 14.0288 13.2074C14.0867 12.9164 14.2296 12.6491 14.4393 12.4393C14.6491 12.2296 14.9164 12.0867 15.2074 12.0288C15.4983 11.9709 15.7999 12.0006 16.074 12.1142C16.3481 12.2277 16.5824 12.42 16.7472 12.6666C16.912 12.9133 17 13.2033 17 13.5" stroke="#C1BBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  },
  {
    name: "Notifications",
    to: "notifications",
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_522_16153)">
        <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#C1BBEB" />
      </g>
      <defs>
        <clipPath id="clip0_522_16153">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

  },
];
