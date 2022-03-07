import React from "react";

/**
 * !Plus Button
 * * AslanSN - 2022-03-07
 * @returns {svg} Icon - Plus Button - React Component
 */
const PlusButton = () => {
  return (
    <buton className="plus-buton">
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4999 0C18.0929 0 17.6905 0.0138751 17.2904 0.0393127L17.4384 2.3472C18.1453 2.30152 18.8544 2.30152 19.5613 2.3472L19.7093 0.0393127C19.3067 0.0132073 18.9033 9.62283e-05 18.4999 0V0ZM14.8923 0.351502C14.0922 0.511066 13.3106 0.721504 12.5521 0.975881L13.2944 3.16814C13.9581 2.94152 14.6403 2.75883 15.3386 2.62008L14.8923 0.353815V0.351502ZM24.4477 0.978194C23.6829 0.718922 22.9019 0.510344 22.1097 0.353815L21.6611 2.62008C22.3594 2.75883 23.0416 2.94383 23.7053 3.16814L24.4477 0.978194ZM28.779 3.11727C28.1078 2.66805 27.4079 2.26327 26.6839 1.90551L25.6594 3.97752C26.2954 4.29203 26.9082 4.64815 27.4932 5.03897L28.779 3.11727ZM10.3135 1.90551C9.58741 2.26395 8.88903 2.66864 8.22071 3.11727L9.50647 5.03666C10.0942 4.64435 10.7068 4.29057 11.3403 3.97752L10.3135 1.90551ZM6.30132 4.59034C5.69544 5.12222 5.12194 5.69572 4.59006 6.3016L6.32907 7.82786C6.7962 7.29598 7.29571 6.79648 7.82758 6.32935L6.30132 4.59034ZM32.4097 6.3016C31.8769 5.6947 31.3053 5.12308 30.6984 4.59034L29.1721 6.32935C29.704 6.79648 30.2058 7.29598 30.6706 7.82786L32.4097 6.3016ZM35.0945 10.3138C34.7368 9.59046 34.332 8.89135 33.8827 8.22099L31.9633 9.50675C32.3542 10.0918 32.708 10.7046 33.0225 11.3406L35.0945 10.3161V10.3138ZM3.11699 8.22099C2.66836 8.88931 2.26135 9.58768 1.90523 10.3161L3.97724 11.3406C4.29174 10.7046 4.64787 10.0918 5.03869 9.50675L3.11699 8.22099ZM0.977906 12.5523C0.718628 13.3171 0.510049 14.0981 0.353526 14.8903L2.61979 15.3389C2.75854 14.6405 2.94355 13.9583 3.16786 13.2946L0.977906 12.5523ZM36.6485 14.8926C36.4921 14.0996 36.2835 13.3178 36.0241 12.5523L33.8319 13.2946C34.0585 13.9583 34.2412 14.6405 34.3799 15.3389L36.6462 14.8903L36.6485 14.8926ZM0.0390237 17.2907C-0.0130079 18.0961 -0.0130079 18.9041 0.0390237 19.7096L2.34692 19.5616C2.30123 18.8547 2.30123 18.1456 2.34692 17.4387L0.0390237 17.2907ZM37 18.5001C36.9999 18.0966 36.9868 17.6933 36.9607 17.2907L34.6528 17.4387C34.6985 18.1456 34.6985 18.8547 34.6528 19.5616L36.9607 19.7096C36.9868 19.3069 36.9999 18.9036 37 18.5001ZM0.351214 22.1076C0.510777 22.9078 0.721217 23.6894 0.975594 24.4479L3.16786 23.7056C2.94042 23.037 2.75733 22.3541 2.61979 21.6613L0.353526 22.1099L0.351214 22.1076ZM36.0218 24.4479C36.2808 23.6894 36.4889 22.9078 36.6462 22.1099L34.3799 21.6613C34.2412 22.3597 34.0562 23.0419 33.8319 23.7056L36.0218 24.4479ZM1.90523 26.6864C2.26307 27.4097 2.66785 28.1088 3.11699 28.7792L5.03638 27.4935C4.64368 26.906 4.28988 26.2934 3.97724 25.6597L1.90523 26.6841V26.6864ZM33.8827 28.7792C34.3314 28.1109 34.7384 27.4125 35.0945 26.6841L33.0225 25.6597C32.708 26.2956 32.3518 26.9084 31.961 27.4935L33.8827 28.7792ZM4.59006 30.6986C5.12194 31.3045 5.69544 31.878 6.30132 32.4099L7.82758 30.6709C7.2961 30.2044 6.79554 29.7039 6.32907 29.1724L4.59006 30.6986ZM30.6984 32.4099C31.3043 31.878 31.8778 31.3045 32.4097 30.6986L30.6706 29.1724C30.2058 29.7042 29.704 30.2061 29.1721 30.6709L30.6984 32.4099ZM26.6862 35.0947C27.4123 34.7363 28.1107 34.3316 28.779 33.883L27.4932 31.9636C26.9055 32.3559 26.2929 32.7097 25.6594 33.0227L26.6839 35.0947H26.6862ZM8.22071 33.883C8.88903 34.3316 9.58741 34.7386 10.3159 35.0947L11.3403 33.0227C10.7065 32.7093 10.0939 32.3548 9.50647 31.9613L8.22071 33.883ZM12.5521 36.022C13.3106 36.281 14.0922 36.4892 14.89 36.6464L15.3386 34.3801C14.6459 34.2426 13.963 34.0595 13.2944 33.8321L12.5521 36.022ZM22.1074 36.6487C22.9004 36.4923 23.6821 36.2837 24.4477 36.0243L23.7053 33.8321C23.0367 34.0595 22.3538 34.2425 21.6611 34.3801L22.1097 36.6464L22.1074 36.6487ZM17.2904 36.9609C18.0959 37.013 18.9038 37.013 19.7093 36.9609L19.5613 34.653C18.8544 34.6988 18.1453 34.6988 17.4384 34.653L17.2904 36.9609ZM19.6561 10.4063C19.6561 10.0997 19.5343 9.80556 19.3175 9.58872C19.1006 9.37188 18.8065 9.25006 18.4999 9.25006C18.1932 9.25006 17.8991 9.37188 17.6823 9.58872C17.4654 9.80556 17.3436 10.0997 17.3436 10.4063V17.3439H10.406C10.0994 17.3439 9.80528 17.4657 9.58844 17.6825C9.3716 17.8994 9.24978 18.1935 9.24978 18.5001C9.24978 18.8068 9.3716 19.1009 9.58844 19.3177C9.80528 19.5346 10.0994 19.6564 10.406 19.6564H17.3436V26.5939C17.3436 26.9006 17.4654 27.1947 17.6823 27.4115C17.8991 27.6284 18.1932 27.7502 18.4999 27.7502C18.8065 27.7502 19.1006 27.6284 19.3175 27.4115C19.5343 27.1947 19.6561 26.9006 19.6561 26.5939V19.6564H26.5937C26.9003 19.6564 27.1944 19.5346 27.4113 19.3177C27.6281 19.1009 27.7499 18.8068 27.7499 18.5001C27.7499 18.1935 27.6281 17.8994 27.4113 17.6825C27.1944 17.4657 26.9003 17.3439 26.5937 17.3439H19.6561V10.4063Z"
          fill="#3E3F3F"
        />
      </svg>
    </buton>
  );
}

export default PlusButton;