import React from "react";

/**
 * ! Creates the Button to create a New Photo Coll
 * * OvidioSantoro - 2022-02-16
 * @returns React Component
 */
const NewPostPhoto = () => {
  return (
    <div className="button-new">
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_503_402)">
          <rect
            x="6.67578"
            y="11.5684"
            width="32.6634"
            height="28.783"
            rx="1.5"
            stroke="black"
            stroke-linejoin="round"
          />
          <path
            d="M3.2565 51.1372H42.6719C43.7959 51.1372 44.7106 50.1967 44.7106 49.041V8.51418C44.7106 7.35847 43.7959 6.41797 42.6719 6.41797H3.2565C2.13248 6.41797 1.21777 7.35847 1.21777 8.51418V49.041C1.21777 50.1967 2.13248 51.1372 3.2565 51.1372ZM2.57692 8.51418C2.57692 8.32887 2.64852 8.15114 2.77597 8.0201C2.90341 7.88906 3.07626 7.81544 3.2565 7.81544H42.6719C42.8521 7.81544 43.0249 7.88906 43.1524 8.0201C43.2798 8.15114 43.3514 8.32887 43.3514 8.51418V49.041C43.3514 49.2263 43.2798 49.404 43.1524 49.5351C43.0249 49.6661 42.8521 49.7397 42.6719 49.7397H3.2565C3.07626 49.7397 2.90341 49.6661 2.77597 49.5351C2.64852 49.404 2.57692 49.2263 2.57692 49.041V8.51418Z"
            fill="black"
          />
          <path
            d="M12.2642 25.0524C11.853 24.5934 11.4274 24.1492 11.0345 23.679C10.9426 23.573 10.8735 23.4483 10.8318 23.3131C10.7901 23.1778 10.7768 23.0351 10.7926 22.8941C10.8084 22.7532 10.853 22.6173 10.9235 22.4953C10.994 22.3733 11.0889 22.2679 11.2018 22.1861C11.396 22.0295 11.6392 21.9512 11.8858 21.9659C12.1841 21.9659 12.4824 21.992 12.7808 22.007C12.9372 22.007 12.9918 21.9734 12.9554 21.798C12.6993 20.7222 12.5458 19.6235 12.497 18.5174C12.4573 17.985 12.5255 17.4501 12.6971 16.9461C12.7335 16.8209 12.7945 16.7047 12.8764 16.6047C12.9582 16.5047 13.0592 16.423 13.1731 16.3645C13.287 16.3061 13.4113 16.2723 13.5385 16.2651C13.6656 16.2579 13.7928 16.2776 13.9122 16.3228C14.5048 16.5249 15.049 16.853 15.5094 17.2857C16.2301 17.9127 16.8971 18.602 17.5031 19.3459C17.6886 19.5661 17.6959 19.5661 17.8669 19.3272C18.0379 19.0884 18.1907 18.8309 18.358 18.5808C18.4663 18.4046 18.6254 18.2675 18.8132 18.1886C19.001 18.1096 19.2082 18.0928 19.4058 18.1404C19.6022 18.1733 19.7838 18.2677 19.9258 18.4107C20.0678 18.5537 20.1632 18.7383 20.1989 18.9391C20.3044 19.428 20.3917 19.9207 20.4863 20.432C20.5082 20.529 20.53 20.6298 20.5518 20.7343C20.6537 20.7044 20.6828 20.6223 20.7337 20.5663C20.8579 20.423 21.0193 20.3188 21.199 20.2659C21.3787 20.213 21.5694 20.2137 21.7488 20.2678C21.9331 20.3076 22.1013 20.4038 22.2312 20.5438C22.3611 20.6837 22.4466 20.8607 22.4764 21.0515C22.571 21.6076 22.6328 22.1712 22.7092 22.731L22.7747 23.2349C22.8075 23.4327 22.8875 23.4663 23.0658 23.3617C23.1886 23.2846 23.326 23.2351 23.4688 23.2166C23.6117 23.198 23.7568 23.2109 23.8944 23.2543C24.032 23.2978 24.1591 23.3707 24.2671 23.4684C24.3752 23.5661 24.4617 23.6862 24.521 23.8208C24.5812 23.9622 24.6133 24.1144 24.6156 24.2687C24.7672 26.4394 24.5618 28.6208 24.0081 30.7216C23.7335 31.7363 23.281 32.6912 22.6729 33.5395C22.6576 33.5676 22.6393 33.5939 22.6183 33.6178C22.2872 33.8156 22.4218 34.0433 22.5528 34.2971C22.8584 34.8793 23.1458 35.4765 23.4405 36.0662C23.6006 36.3871 23.5496 36.6596 23.2986 36.8126C23.0476 36.9656 22.7929 36.8425 22.6292 36.5178C22.2945 35.8497 21.9598 35.1816 21.6323 34.5098C21.5596 34.3605 21.5014 34.3158 21.3158 34.3531C20.862 34.4178 20.4009 34.4039 19.9515 34.312C18.2463 34.0126 16.6185 33.3599 15.1674 32.3937C14.2932 31.8464 13.4568 31.2378 12.6644 30.5724C12.5046 30.469 12.3758 30.3223 12.2922 30.1486C12.2085 29.9749 12.1732 29.7809 12.1901 29.588C12.207 29.395 12.2755 29.2106 12.3881 29.055C12.5007 28.8994 12.6529 28.7787 12.8281 28.7063C13.0609 28.5943 13.0682 28.557 12.879 28.3704C12.4097 27.9038 11.9367 27.4373 11.4638 26.9783C11.2955 26.841 11.1754 26.6514 11.1216 26.4379C11.0678 26.2245 11.0832 25.9988 11.1654 25.7951C11.2445 25.5819 11.3893 25.4009 11.5777 25.2797C11.7662 25.1584 11.988 25.1036 12.2096 25.1233C12.246 25.101 12.2714 25.101 12.2642 25.0524ZM19.9042 28.9041C19.937 28.8108 19.9588 28.751 19.977 28.6913C20.2875 27.7234 20.5955 26.7556 20.9011 25.7877C20.9214 25.6967 20.9663 25.6134 21.0306 25.5473C21.095 25.4813 21.1762 25.4353 21.2649 25.4145C21.6469 25.3212 21.9161 25.6608 21.7852 26.0788C21.3898 27.3403 20.9908 28.5993 20.5882 29.8558C20.5574 29.9377 20.5444 30.0256 20.55 30.1133C20.5557 30.2009 20.5799 30.2863 20.6209 30.3634C21.0248 31.1583 21.4177 31.9607 21.8143 32.7594C21.9343 32.9983 21.9343 32.9983 22.0908 32.7594C22.633 31.9228 23.0259 30.994 23.2513 30.0163C23.6714 28.1568 23.8283 26.2449 23.717 24.3396C23.717 24.1082 23.6479 24.0821 23.4369 24.2015C23.2897 24.2975 23.121 24.3531 22.9469 24.363C22.7727 24.373 22.599 24.3369 22.4424 24.2582C22.2858 24.1796 22.1515 24.061 22.0523 23.9138C21.9531 23.7667 21.8925 23.5958 21.8761 23.4177C21.7815 22.7385 21.6942 22.0592 21.5996 21.38C21.5996 21.3016 21.5996 21.2045 21.5087 21.1784C21.4177 21.1523 21.3595 21.2493 21.3195 21.324C21.1667 21.5964 21.0175 21.8689 20.872 22.1488C20.7265 22.4287 20.6173 22.6601 20.2826 22.6041C19.9479 22.5481 19.9006 22.2309 19.846 21.9622C19.6823 21.0739 19.5113 20.1856 19.3403 19.2974C19.3403 19.2078 19.3403 19.0809 19.2166 19.0623C19.0929 19.0436 19.0711 19.1705 19.0202 19.2451C18.7437 19.6557 18.4744 20.0737 18.198 20.488C17.9215 20.9022 17.634 20.8985 17.3357 20.5402C16.6907 19.7454 15.9929 18.9972 15.2474 18.3009C14.851 17.9074 14.4072 17.5675 13.9268 17.2895C13.5994 17.1178 13.4975 17.185 13.4429 17.5582C13.3883 18.0797 13.3956 18.606 13.4647 19.1257C13.574 20.2029 13.7588 21.2706 14.0177 22.3205C14.1123 22.7198 13.9195 22.9624 13.512 22.9549C13.0245 22.9549 12.537 22.9549 12.0568 22.9102C11.9513 22.9102 11.8167 22.8579 11.7512 22.9811C11.6857 23.1042 11.8239 23.1789 11.8931 23.2572C12.5237 23.9564 13.1567 24.6531 13.7922 25.3473C13.876 25.4167 13.9335 25.5141 13.9547 25.6224C13.976 25.7308 13.9597 25.8434 13.9086 25.9407C13.8565 26.0372 13.7747 26.1134 13.676 26.1573C13.5773 26.2011 13.4672 26.2103 13.3629 26.1833C13.0209 26.1385 12.6789 26.0937 12.3333 26.0564C12.2423 26.0564 12.1114 25.9743 12.0604 26.1086C12.0095 26.243 12.1441 26.2878 12.2132 26.3587C12.6971 26.8402 13.1992 27.3104 13.6685 27.8068C13.7826 27.925 13.8672 28.0699 13.9149 28.2289C13.9625 28.388 13.9719 28.5566 13.9423 28.7202C13.9126 28.8838 13.8447 29.0376 13.7444 29.1684C13.6442 29.2992 13.5145 29.4032 13.3665 29.4714C13.0682 29.6169 13.0609 29.6505 13.3192 29.8446C14.6378 30.9533 16.0935 31.8783 17.6486 32.5952C18.6592 33.0746 19.7521 33.3447 20.8647 33.3902C21.1194 33.3902 21.1194 33.3902 21.0066 33.1588C20.6064 32.3526 20.2026 31.5502 19.8096 30.7403C19.7794 30.671 19.7348 30.6094 19.6789 30.5597C19.6229 30.5101 19.557 30.4736 19.4859 30.4529C18.3944 30.0984 17.3248 29.7363 16.2479 29.3781C16.0368 29.3133 15.8292 29.2373 15.6258 29.1504C15.527 29.1066 15.4481 29.026 15.4049 28.9249C15.3617 28.8238 15.3574 28.7097 15.393 28.6055C15.4266 28.4963 15.4982 28.4037 15.5942 28.3452C15.6901 28.2867 15.8036 28.2664 15.9132 28.2883C15.9909 28.3042 16.0675 28.3254 16.1424 28.3517L18.791 29.2362C18.8706 29.2784 18.9598 29.2977 19.0493 29.2922C19.0412 29.2038 19.0111 29.119 18.962 29.0459C18.5509 28.2173 18.1361 27.3925 17.7323 26.5602C17.696 26.4765 17.6419 26.4021 17.5739 26.3427C17.5059 26.2833 17.4257 26.2403 17.3394 26.2169C16.7257 26.0228 16.1121 25.8188 15.4985 25.6048C15.418 25.5828 15.3449 25.5387 15.287 25.4772C15.2291 25.4158 15.1886 25.3393 15.1699 25.256C15.1512 25.1727 15.155 25.0858 15.1808 25.0046C15.2066 24.9233 15.2536 24.8508 15.3165 24.7949C15.3844 24.7384 15.466 24.7019 15.5525 24.6894C15.6391 24.6769 15.7273 24.6889 15.8077 24.724L16.9464 25.0972C16.9755 24.989 16.9137 24.9367 16.8846 24.8733C16.5899 24.2687 16.2879 23.6641 15.9932 23.0557C15.9554 23.0007 15.9294 22.9382 15.9168 22.8722C15.9042 22.8062 15.9053 22.7382 15.92 22.6727C15.9348 22.6072 15.9629 22.5456 16.0025 22.492C16.042 22.4383 16.0922 22.3939 16.1497 22.3615C16.3971 22.2272 16.6445 22.3242 16.8009 22.6377C17.0992 23.2237 17.3903 23.8171 17.685 24.403C17.725 24.4777 17.7359 24.5747 17.8487 24.6195C17.8887 24.5038 17.9251 24.3918 17.9615 24.2799C18.0597 23.9813 18.147 23.679 18.2525 23.3841C18.2851 23.292 18.3454 23.2128 18.4248 23.1581C18.5041 23.1033 18.5983 23.0759 18.6938 23.0796C18.7893 23.0833 18.8812 23.1181 18.9562 23.1789C19.0312 23.2396 19.0854 23.3233 19.1111 23.4177C19.142 23.542 19.1318 23.6733 19.082 23.791C18.8892 24.4068 18.6964 25.0226 18.4963 25.6347C18.4682 25.714 18.4566 25.7985 18.4622 25.8827C18.4678 25.9669 18.4906 26.0489 18.529 26.1236C18.8383 26.7319 19.1366 27.3477 19.4386 27.9598C19.5841 28.2771 19.7442 28.5831 19.9152 28.919L19.9042 28.9041Z"
            fill="black"
          />
          <path
            d="M25.0309 18.9204C25.1437 18.3382 25.2529 17.756 25.3693 17.1737C25.3984 16.9975 25.4727 16.8323 25.5846 16.6952C25.6965 16.5582 25.8419 16.4541 26.006 16.3937C26.2165 16.3067 26.4497 16.2962 26.6669 16.3641C26.884 16.432 27.0719 16.5742 27.1993 16.7669C27.3775 17.0207 27.5631 17.2857 27.7195 17.547C27.876 17.8082 27.8687 17.7672 28.047 17.547C28.773 16.6615 29.5916 15.8605 30.4881 15.1583C30.8333 14.8745 31.2286 14.6616 31.6523 14.5313C31.7787 14.4813 31.9142 14.4599 32.0494 14.4687C32.1846 14.4775 32.3164 14.5162 32.4356 14.5821C32.5549 14.6481 32.6588 14.7397 32.7403 14.8508C32.8217 14.9619 32.8788 15.0897 32.9075 15.2255C33.0642 15.752 33.1222 16.3041 33.0785 16.8528C33.0148 17.8928 32.8651 18.9253 32.631 19.9393C32.5692 20.2117 32.591 20.2267 32.8638 20.2117C33.1367 20.1968 33.3805 20.1782 33.6388 20.1744C33.8566 20.1512 34.0761 20.1994 34.2656 20.312C34.4552 20.4247 34.6051 20.596 34.6938 20.8014C34.7847 21.0017 34.8104 21.2266 34.7672 21.443C34.7239 21.6594 34.614 21.8558 34.4537 22.0032L33.4496 23.1005L33.2859 23.2833C34.1154 23.2833 34.6538 23.9514 34.421 24.668C34.3587 24.8442 34.255 25.0019 34.119 25.1271C33.6424 25.5973 33.1658 26.0638 32.6892 26.5378C32.4891 26.7319 32.5 26.7655 32.7474 26.8849C32.9086 26.9487 33.0509 27.0546 33.16 27.1921C33.2691 27.3295 33.3414 27.4938 33.3697 27.6687C33.398 27.8436 33.3813 28.023 33.3213 28.1893C33.2613 28.3555 33.16 28.5028 33.0276 28.6167C32.221 29.3294 31.3555 29.9687 30.4408 30.5276C29.1865 31.3547 27.8089 31.9661 26.3625 32.3377C26.0054 32.4333 25.6397 32.4908 25.2711 32.5093C25.2105 32.5201 25.1485 32.518 25.0888 32.5033C25.029 32.4885 24.9729 32.4614 24.9237 32.4236C24.8746 32.3858 24.8335 32.3381 24.8029 32.2834C24.7724 32.2288 24.753 32.1683 24.7461 32.1056C24.7391 32.043 24.7447 31.9796 24.7625 31.9193C24.7803 31.859 24.8099 31.803 24.8495 31.7549C24.8891 31.7067 24.9379 31.6673 24.9929 31.6392C25.0479 31.6111 25.1079 31.5947 25.1692 31.5912C27.825 31.2479 29.9861 29.8371 32.0525 28.2322C32.1398 28.1613 32.2272 28.0942 32.3108 28.0195C32.4782 27.8665 32.4709 27.8105 32.2635 27.7172C32.1281 27.6579 32.0069 27.5691 31.9083 27.457C31.8096 27.3449 31.736 27.2121 31.6924 27.0678C31.6248 26.8849 31.6123 26.6854 31.6564 26.4951C31.7005 26.3049 31.7992 26.1325 31.9398 26.0004C32.4127 25.5264 32.8929 25.0599 33.3695 24.5896C33.4053 24.5567 33.4393 24.5218 33.4714 24.4851C33.5151 24.4329 33.5842 24.3843 33.5369 24.2985C33.4896 24.2127 33.4277 24.25 33.3623 24.2575C32.9984 24.3022 32.6128 24.3358 32.2381 24.3918C32.1346 24.4215 32.0244 24.4144 31.9253 24.3717C31.8263 24.329 31.7442 24.2532 31.6924 24.1567C31.639 24.0606 31.6207 23.9481 31.6407 23.8394C31.6607 23.7307 31.7177 23.6328 31.8015 23.5633C32.4394 22.8691 33.0724 22.1712 33.7006 21.4695C33.7734 21.3911 33.9043 21.3239 33.8498 21.1933C33.7952 21.0627 33.6497 21.1224 33.5478 21.1261C33.0603 21.1261 32.5728 21.1635 32.0926 21.1709C31.6669 21.1709 31.4813 20.9395 31.5796 20.5178C31.834 19.4849 32.0163 18.4347 32.1253 17.3753C32.1994 16.846 32.2079 16.3093 32.1508 15.7779C32.0926 15.4047 31.987 15.33 31.6523 15.5092C31.2118 15.7624 30.8036 16.0708 30.4372 16.4273C29.6987 17.1066 29.0092 17.84 28.3744 18.6218L28.2179 18.8047C28.1746 18.8716 28.115 18.9257 28.0451 18.9618C27.9751 18.9979 27.8973 19.0147 27.8191 19.0105C27.7409 19.0064 27.6651 18.9814 27.5992 18.9382C27.5333 18.8949 27.4794 18.8347 27.443 18.7637C27.1774 18.3904 26.9337 17.9874 26.6717 17.6029C26.5881 17.4835 26.5299 17.2633 26.3843 17.2857C26.2388 17.3081 26.2497 17.5507 26.2206 17.7C26.0496 18.5696 25.8823 19.4429 25.7222 20.3125C25.6749 20.5626 25.5839 20.7641 25.3184 20.8201C25.0528 20.8761 24.9291 20.7417 24.769 20.4469C24.6089 20.152 24.4416 19.8385 24.2742 19.5362C24.2342 19.4616 24.2087 19.3571 24.0923 19.3832C23.9759 19.4093 24.005 19.5064 23.9941 19.5847C23.9322 20.0475 23.8667 20.5103 23.8085 20.9731C23.7649 21.3128 23.5648 21.4956 23.2774 21.4583C23.2144 21.4452 23.1547 21.4191 23.1019 21.3815C23.0491 21.344 23.0044 21.2958 22.9703 21.24C22.9363 21.1841 22.9137 21.1217 22.9039 21.0565C22.8942 20.9914 22.8974 20.9249 22.9135 20.8612C22.9754 20.3648 23.0445 19.8684 23.11 19.3683C23.1242 19.152 23.2052 18.946 23.3413 18.7803C23.4774 18.6145 23.6614 18.4975 23.8667 18.4464C24.0675 18.385 24.2822 18.3917 24.4789 18.4657C24.6756 18.5397 24.8437 18.6769 24.9582 18.857C24.9724 18.8759 24.9896 18.8923 25.0091 18.9055L25.0309 18.9204Z"
            fill="black"
          />
          <path
            d="M27.777 22.8651C28.0717 22.2791 28.3518 21.7118 28.6356 21.1445C28.6902 21.0288 28.7484 20.9131 28.8102 20.8012C28.8372 20.747 28.8743 20.6988 28.9195 20.6594C28.9646 20.6199 29.0169 20.59 29.0733 20.5713C29.1297 20.5526 29.1892 20.5454 29.2483 20.5503C29.3074 20.5552 29.365 20.5719 29.4178 20.5996C29.4706 20.6273 29.5175 20.6654 29.556 20.7117C29.5944 20.758 29.6236 20.8116 29.6419 20.8695C29.6601 20.9274 29.667 20.9884 29.6623 21.049C29.6576 21.1096 29.6412 21.1687 29.6143 21.2229C29.3232 21.8312 29.0212 22.4321 28.7265 23.0405C28.6651 23.1195 28.6352 23.2196 28.6429 23.3204L29.5597 23.0255L29.8325 22.936C29.9464 22.8994 30.0697 22.9102 30.1759 22.9661C30.2821 23.0219 30.3626 23.1183 30.4001 23.2345C30.4194 23.2921 30.4274 23.353 30.4236 23.4138C30.4198 23.4746 30.4042 23.534 30.3778 23.5885C30.3514 23.643 30.3147 23.6916 30.2698 23.7314C30.2249 23.7713 30.1727 23.8015 30.1163 23.8205C29.7368 23.975 29.3464 24.0998 28.9485 24.1937C28.6221 24.2411 28.3153 24.3817 28.0631 24.5995C27.8109 24.8173 27.6235 25.1035 27.5223 25.4253C27.238 26.0908 26.9211 26.741 26.5728 27.3736C26.5508 27.4197 26.5313 27.467 26.5146 27.5154C26.6015 27.534 26.6921 27.5194 26.7692 27.4743C27.6897 27.1683 28.6101 26.8622 29.5306 26.5487C29.6204 26.5062 29.7207 26.4927 29.8182 26.51C29.9156 26.5274 30.0057 26.5747 30.0763 26.6458C30.1337 26.7047 30.1746 26.7784 30.1946 26.8592C30.2146 26.94 30.2129 27.0248 30.1898 27.1047C30.1667 27.1845 30.123 27.2566 30.0633 27.3131C30.0037 27.3696 29.9302 27.4085 29.8507 27.4258C29.2905 27.6236 28.7302 27.799 28.1663 27.9968C27.4714 28.2282 26.7765 28.4634 26.078 28.6873C26.0131 28.7046 25.9529 28.7367 25.9018 28.7814C25.8508 28.826 25.8103 28.8818 25.7833 28.9448C25.7346 29.0629 25.6761 29.1765 25.6087 29.2844C25.5479 29.3795 25.4551 29.4483 25.3481 29.4777C25.241 29.5071 25.1271 29.4951 25.0282 29.4439C24.9292 29.3926 24.8521 29.3059 24.8116 29.2C24.771 29.0942 24.7698 28.9768 24.8083 28.8702C24.8502 28.7662 24.8988 28.6652 24.9538 28.5679C25.6523 27.1571 26.3472 25.7426 27.053 24.3355C27.0925 24.2626 27.1157 24.1815 27.1207 24.0982C27.1257 24.0149 27.1126 23.9315 27.0821 23.8541C26.8893 23.2719 26.7183 22.6859 26.5255 22.1037C26.501 22.0356 26.4816 21.9657 26.4673 21.8947C26.452 21.8359 26.4483 21.7745 26.4563 21.7142C26.4644 21.6539 26.484 21.5958 26.5142 21.5434C26.5443 21.4909 26.5843 21.4451 26.6318 21.4087C26.6794 21.3723 26.7335 21.3459 26.7911 21.3311C26.903 21.2999 27.0223 21.3148 27.1236 21.3727C27.2249 21.4306 27.3001 21.5268 27.3331 21.6409C27.4496 21.9656 27.5478 22.2978 27.6569 22.6262C27.671 22.7169 27.7131 22.8007 27.777 22.8651V22.8651Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.97 -0.0214844C39.2391 -0.0214844 39.4973 0.0884503 39.6876 0.284135C39.8779 0.47982 39.9848 0.745225 39.9848 1.02196V11.4565H50.1331C50.4023 11.4565 50.6604 11.5664 50.8507 11.7621C51.0411 11.9578 51.148 12.2232 51.148 12.4999C51.148 12.7766 51.0411 13.042 50.8507 13.2377C50.6604 13.4334 50.4023 13.5433 50.1331 13.5433H39.9848V23.9778C39.9848 24.2546 39.8779 24.52 39.6876 24.7157C39.4973 24.9114 39.2391 25.0213 38.97 25.0213C38.7008 25.0213 38.4427 24.9114 38.2524 24.7157C38.0621 24.52 37.9551 24.2546 37.9551 23.9778V13.5433H27.8068C27.5377 13.5433 27.2795 13.4334 27.0892 13.2377C26.8989 13.042 26.792 12.7766 26.792 12.4999C26.792 12.2232 26.8989 11.9578 27.0892 11.7621C27.2795 11.5664 27.5377 11.4565 27.8068 11.4565H37.9551V1.02196C37.9551 0.745225 38.0621 0.47982 38.2524 0.284135C38.4427 0.0884503 38.7008 -0.0214844 38.97 -0.0214844Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.97 -0.0214844C39.2391 -0.0214844 39.4973 0.0884503 39.6876 0.284135C39.8779 0.47982 39.9848 0.745225 39.9848 1.02196V11.4565H50.1331C50.4023 11.4565 50.6604 11.5664 50.8507 11.7621C51.0411 11.9578 51.148 12.2232 51.148 12.4999C51.148 12.7766 51.0411 13.042 50.8507 13.2377C50.6604 13.4334 50.4023 13.5433 50.1331 13.5433H39.9848V23.9778C39.9848 24.2546 39.8779 24.52 39.6876 24.7157C39.4973 24.9114 39.2391 25.0213 38.97 25.0213C38.7008 25.0213 38.4427 24.9114 38.2524 24.7157C38.0621 24.52 37.9551 24.2546 37.9551 23.9778V13.5433H27.8068C27.5377 13.5433 27.2795 13.4334 27.0892 13.2377C26.8989 13.042 26.792 12.7766 26.792 12.4999C26.792 12.2232 26.8989 11.9578 27.0892 11.7621C27.2795 11.5664 27.5377 11.4565 27.8068 11.4565H37.9551V1.02196C37.9551 0.745225 38.0621 0.47982 38.2524 0.284135C38.4427 0.0884503 38.7008 -0.0214844 38.97 -0.0214844Z"
            fill="black"
            className="new-photo-plus"
          />
        </g>
        <defs>
          <clipPath id="clip0_503_402">
            <rect width="52" height="52" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default NewPostPhoto;
