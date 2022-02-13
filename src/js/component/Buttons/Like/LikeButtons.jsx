import propTypes from "prop-types";
import React, { useState, useEffect } from "react";

import "./LikeButtonsStyle.scss";

/**
 * ! Like & Dislike buttons with a "score" counter
 * * AslanSN & OvidioSantoro
 * * 2022-02-13
 * @params props {props}
 * @returns React Component
 */
const LikeButtons = () => {
  const [liked, setLiked] = useState([""]);
  const [disliked, setDisliked] = useState([""]);

  // TODO: On component load, send a Fetch request to get the actual value. Remove the hard-coded values.
  useEffect(() => {
    setLiked("unliked");
    setDisliked("undisliked");
  }, []);

  // TODO: When liked state changes, send a Fetch request to update the value on the database.
  // TODO: Update the "score" too and change the code returned to accept the value as props.
  //useEffect(() => {}, [liked]);

  const switchLike = () => {
    liked === "unliked"
      ? (setLiked("liked"), setDisliked("undisliked"))
      : setLiked("unliked");
  };

  const switchDislike = () => {
    disliked === "undisliked"
      ? (setDisliked("disliked"), setLiked("unliked"))
      : setDisliked("undisliked");
  };

  return (
    <div className="likes-container">
      <div className="button-like" onClick={switchLike}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 538 530"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M379.3 399.794C370.427 396.981 362.07 392.695 354.567 387.111C325.707 366.656 301.249 340.415 282.692 309.993C271.436 292.288 261.397 273.81 252.648 254.691C249.695 250.044 248.667 244.395 249.786 238.977C250.906 233.56 254.082 228.813 258.624 225.772C262.398 223.203 266.868 221.902 271.405 222.052C276.551 222.052 277.049 222.052 275.223 216.471L260.782 178.588C258.84 174.582 258.227 170.042 259.035 165.65C259.843 161.259 262.029 157.253 265.263 154.236C268.533 151.055 272.726 149.039 277.215 148.49C281.704 147.941 286.246 148.889 290.162 151.191C290.162 151.191 290.162 151.191 291.158 151.191C287.506 139.184 283.356 127.346 280.036 115.169C279.22 112.35 279.015 109.383 279.435 106.474C279.854 103.566 280.889 100.785 282.468 98.3243C284.047 95.8635 286.131 93.7815 288.577 92.2224C291.024 90.6632 293.773 89.6642 296.636 89.2944C301.533 88.1844 306.658 88.9047 311.077 91.3238L327.676 99.9488C330.498 101.471 331.826 101.133 332.656 97.5811C336.213 75.5896 341.884 54.0078 349.587 33.1473C353.226 23.0561 358.878 13.8427 366.186 6.08849C367.968 4.19574 370.107 2.68964 372.475 1.66078C374.842 0.631923 377.39 0.101562 379.964 0.101563C382.538 0.101562 385.085 0.631923 387.453 1.66078C389.82 2.68964 391.959 4.19574 393.741 6.08849C402.912 15.0035 410.15 25.7764 414.988 37.7135C423.291 55.3428 430.067 73.6771 435.239 92.5076C436.899 98.2576 436.899 98.2576 441.879 95.2135L456.984 85.912C460.49 83.6893 464.578 82.6115 468.702 82.8231C472.826 83.0347 476.788 84.5255 480.057 87.0958C483.39 89.4489 485.938 92.7823 487.362 96.6504C488.786 100.519 489.017 104.737 488.024 108.743C485.7 118.552 483.211 128.361 480.887 138.169C480.887 140.03 480.057 142.059 479.559 144.258C481.717 144.258 482.879 143.412 484.373 142.736C487.855 141.226 491.687 140.759 495.42 141.388C499.153 142.017 502.634 143.716 505.453 146.287C508.496 148.627 510.773 151.85 511.988 155.531C513.202 159.213 513.297 163.182 512.259 166.919C509.271 177.912 505.62 188.736 502.466 199.559C501.47 202.941 500.308 206.155 499.478 209.368C498.648 212.581 499.478 214.611 503.628 214.272C506.573 213.881 509.567 214.144 512.403 215.042C515.239 215.941 517.851 217.455 520.059 219.479C522.267 221.504 524.019 223.991 525.194 226.771C526.369 229.55 526.939 232.556 526.867 235.581C526.797 238.729 526.12 241.832 524.875 244.713C509.403 285.716 487.297 323.787 459.474 357.346C445.892 373.421 429.587 386.882 411.336 397.088C411.336 397.088 410.174 397.088 409.51 397.088C399.919 400.992 389.412 401.933 379.3 399.794Z"
            fill="#033F59"
          />
          <path
            d="M398.721 288.515L401.875 285.302C415.818 270.42 429.595 255.368 443.373 240.317C444.473 238.831 445.953 237.683 447.651 236.996C449.349 236.31 451.2 236.113 453 236.427C454.789 236.743 456.447 237.586 457.771 238.851C459.095 240.117 460.027 241.749 460.45 243.548C460.874 245.347 460.772 247.232 460.156 248.972C459.54 250.712 458.437 252.23 456.984 253.339C439.057 272.787 421.296 292.405 403.203 311.853C401.931 313.049 400.942 314.521 400.31 316.162C399.678 317.802 399.418 319.567 399.551 321.324C400.381 339.42 400.879 357.515 401.377 375.611C401.377 381.022 401.376 381.022 406.356 378.147C423.454 367.445 438.522 353.697 450.842 337.559C474.204 307.286 493.157 273.737 507.113 237.949C508.939 233.721 507.113 232.537 503.129 232.875C499.613 233.384 496.027 232.956 492.721 231.634C489.415 230.313 486.501 228.142 484.262 225.333C482.023 222.524 480.535 219.172 479.944 215.604C479.352 212.036 479.677 208.373 480.887 204.971C484.87 191.611 489.02 178.42 493.004 165.228C493.004 163.706 494.664 162.015 493.004 160.662C491.344 159.309 489.684 160.662 488.356 161.677L473.085 172.839C468.603 176.221 464.121 179.942 458.478 176.052C452.834 172.162 454.494 166.074 455.822 160.493C460.304 143.581 464.619 124.978 468.935 107.39C468.935 105.53 470.595 103.331 468.935 101.978C467.275 100.625 465.449 101.978 463.789 103.5L438.227 119.059C430.093 123.964 424.449 121.596 421.627 112.464C416.329 92.4431 409.787 72.7858 402.04 53.6107C397.784 42.8993 392.206 32.7836 385.441 23.5078C380.959 17.5887 378.47 17.9269 374.32 23.5078C368.923 32.5833 364.631 42.2944 361.538 52.4269C354.515 73.0746 348.967 94.2131 344.939 115.677C344.879 117.375 344.364 119.025 343.449 120.446C342.533 121.867 341.253 123.005 339.748 123.738C338.242 124.47 336.569 124.767 334.909 124.599C333.249 124.43 331.666 123.801 330.332 122.78C321.368 118.383 312.239 114.324 303.607 109.25C301.781 108.067 299.623 106.037 297.465 107.728C295.308 109.42 297.465 111.956 297.465 113.986C303.109 132.42 308.919 150.684 314.895 168.949C315.76 170.968 315.933 173.226 315.385 175.358C314.837 177.49 313.601 179.371 311.875 180.7C310.15 182.028 308.035 182.726 305.873 182.68C303.71 182.635 301.626 181.849 299.956 180.449L282.028 169.118C280.368 168.103 278.542 165.736 276.551 167.596C274.559 169.456 276.551 171.655 276.551 173.515C281.53 186.706 286.676 199.559 291.324 212.92C292.423 216.085 292.753 219.474 292.287 222.797C291.821 226.121 290.573 229.28 288.648 232.005C286.724 234.73 284.181 236.94 281.236 238.447C278.291 239.953 275.031 240.711 271.737 240.655C265.097 240.655 264.599 240.655 267.587 247.419C282.619 279.169 301.647 308.789 324.19 335.53C338.687 353.226 356.524 367.776 376.644 378.317C381.291 380.684 381.457 380.515 381.291 375.442C381.291 357.177 379.964 338.912 379.466 320.647C379.525 319.114 379.242 317.587 378.638 316.18C378.035 314.774 377.125 313.526 375.98 312.53C359.38 296.633 342.781 280.567 326.182 264.5C322.862 261.287 319.543 258.243 316.555 254.861C315.023 253.252 314.167 251.098 314.167 248.857C314.167 246.616 315.023 244.463 316.555 242.853C318.086 241.126 320.196 240.047 322.47 239.827C324.744 239.608 327.016 240.266 328.838 241.67C330.127 242.591 331.348 243.608 332.49 244.714L373.822 284.287C374.891 285.797 376.401 286.922 378.138 287.5C378.553 285.778 378.553 283.98 378.138 282.258C378.138 263.486 376.81 244.714 376.478 226.111C376.519 224.252 376.153 222.407 375.406 220.71C374.66 219.013 373.551 217.508 372.162 216.302C362.368 207.339 352.907 198.206 343.445 188.905C341.996 187.843 340.877 186.377 340.224 184.685C339.57 182.992 339.408 181.143 339.759 179.359C340.109 177.576 340.956 175.932 342.198 174.626C343.441 173.32 345.026 172.406 346.765 171.993C348.489 171.544 350.302 171.591 352.001 172.129C353.701 172.666 355.221 173.673 356.393 175.037L374.32 191.949C375.648 190.258 374.32 188.736 374.32 187.383C374.32 173.684 373.49 159.986 373.158 146.287C373.158 139.522 376.312 135.295 381.955 134.956C387.599 134.618 391.251 138.677 391.583 145.611L393.077 185.692C393.077 187.383 393.077 189.412 394.239 191.103L399.219 185.861C403.368 181.295 407.518 176.559 412 171.993C413.428 170.514 415.306 169.575 417.328 169.329C419.349 169.083 421.392 169.545 423.121 170.64C424.772 171.551 426.086 172.984 426.864 174.723C427.643 176.463 427.844 178.413 427.437 180.28C426.985 182.7 425.76 184.901 423.952 186.537L397.725 215.118C396.51 216.277 395.566 217.7 394.963 219.28C394.359 220.861 394.112 222.559 394.239 224.25C394.239 238.118 395.069 251.986 395.567 265.853C398.057 273.971 398.555 280.905 398.721 288.515Z"
            fill="#CEBCB5"
            className={liked + "-leaf"}
          />
          <path
            d="M64.0809 517.331C53.3623 513.391 44.013 506.335 37.1901 497.037C27.572 486.981 20.3088 474.84 15.9432 461.522C14.9473 458.478 13.9514 455.434 12.7894 452.221C10.8823 447.231 10.0256 441.888 10.2752 436.538C10.5248 431.189 11.875 425.953 14.2382 421.169C16.6014 416.386 19.925 412.162 23.9933 408.771C28.0616 405.38 32.7839 402.898 37.8541 401.486L75.0364 396.243C84 393.706 104.915 394.214 111.72 387.787C127.143 371.469 145.157 357.919 165.004 347.706C225.923 313.883 249.162 336.714 297.797 327.919C346.433 319.125 352.907 300.353 363.032 315.912C379.631 341.956 321.866 366.647 307.259 366.647C292.652 366.647 287.506 390.662 287.506 390.662C306.556 400.362 326.38 408.396 346.765 414.677C413.162 437 478.563 407.236 487.858 387.449C497.154 367.662 513.089 353.625 525.206 367.155C537.324 380.684 492.008 447.993 428.101 474.375C364.194 500.758 314.563 501.772 263.437 480.802C220.611 463.89 160.688 481.816 147.243 485.03C132.278 489.044 118.602 496.972 107.571 508.03C103.303 512.203 98.203 515.391 92.6173 517.376C87.0316 519.36 81.0918 520.095 75.2023 519.53C71.4142 519.316 67.6725 518.577 64.0809 517.331Z"
            fill="#CEBCB5"
            className={liked + "-hand"}
            stroke="#033F59"
            strokeWidth="20"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div className="like-score">513</div>
      {/* TODO: The line above is kept for testing reasons. Remove it and uncomment the line below for production */}
      {/* <div className="like-score">{propTypes.score}</div> */}
      <div className="button-dislike" onClick={switchDislike}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 543 535"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M159.7 135.206C168.573 138.019 176.93 142.305 184.433 147.889C213.293 168.344 237.751 194.585 256.308 225.007C267.564 242.712 277.603 261.19 286.352 280.309C289.305 284.956 290.333 290.605 289.214 296.023C288.094 301.44 284.918 306.187 280.376 309.228C276.602 311.797 272.132 313.098 267.595 312.948C262.449 312.948 261.951 312.948 263.777 318.529L278.218 356.412C280.16 360.418 280.773 364.958 279.965 369.35C279.157 373.741 276.971 377.747 273.737 380.764C270.467 383.945 266.274 385.961 261.785 386.51C257.296 387.059 252.754 386.111 248.838 383.809C248.838 383.809 248.838 383.809 247.842 383.809C251.494 395.816 255.644 407.654 258.964 419.831C259.78 422.65 259.985 425.617 259.565 428.526C259.146 431.434 258.111 434.215 256.532 436.676C254.953 439.136 252.869 441.219 250.423 442.778C247.976 444.337 245.227 445.336 242.364 445.706C237.467 446.816 232.342 446.095 227.923 443.676L211.324 435.051C208.502 433.529 207.174 433.867 206.344 437.419C202.787 459.41 197.116 480.992 189.413 501.853C185.774 511.944 180.122 521.157 172.814 528.912C171.032 530.804 168.893 532.31 166.525 533.339C164.158 534.368 161.61 534.898 159.036 534.898C156.462 534.898 153.915 534.368 151.547 533.339C149.18 532.31 147.041 530.804 145.259 528.912C136.088 519.996 128.85 509.224 124.012 497.287C115.709 479.657 108.933 461.323 103.761 442.492C102.101 436.742 102.101 436.742 97.1214 439.787L82.0161 449.088C78.5104 451.311 74.4216 452.389 70.2977 452.177C66.1738 451.965 62.212 450.474 58.9433 447.904C55.6105 445.551 53.0618 442.218 51.638 438.35C50.2143 434.481 49.9833 430.263 50.9757 426.257C53.2996 416.448 55.7894 406.639 58.1132 396.831C58.1132 394.97 58.9432 392.941 59.4412 390.742C57.2833 390.742 56.1212 391.588 54.6273 392.264C51.1452 393.774 47.3135 394.241 43.5801 393.612C39.8467 392.983 36.3664 391.284 33.5465 388.713C30.5043 386.373 28.2267 383.15 27.0123 379.469C25.7979 375.787 25.7034 371.818 26.7408 368.081C29.7286 357.088 33.3804 346.264 36.5342 335.441C37.5302 332.059 38.6923 328.845 39.5222 325.632C40.3522 322.419 39.5222 320.389 35.3724 320.728C32.427 321.119 29.4332 320.856 26.5969 319.958C23.7606 319.059 21.1488 317.545 18.9409 315.521C16.7331 313.496 14.9814 311.009 13.8064 308.229C12.6313 305.45 12.0605 302.444 12.1334 299.419C12.2034 296.271 12.8803 293.168 14.1255 290.287C29.5973 249.284 51.7035 211.213 79.5261 177.654C93.1085 161.579 109.413 148.118 127.664 137.912C127.664 137.912 128.826 137.912 129.49 137.912C139.081 134.008 149.588 133.067 159.7 135.206Z"
            fill="#033F59"
          />
          <path
            d="M140.279 246.485L137.125 249.698C123.182 264.58 109.405 279.632 95.6275 294.683C94.5271 296.169 93.047 297.317 91.349 298.004C89.651 298.69 87.8005 298.887 85.9999 298.573C84.2112 298.257 82.5526 297.414 81.2285 296.149C79.9045 294.883 78.9733 293.251 78.5496 291.452C78.1259 289.653 78.2283 287.768 78.8444 286.028C79.4605 284.288 80.5631 282.77 82.0163 281.661C99.9434 262.213 117.704 242.595 135.797 223.147C137.069 221.951 138.058 220.479 138.69 218.838C139.322 217.198 139.582 215.433 139.449 213.676C138.619 195.58 138.121 177.485 137.623 159.389C137.623 153.978 137.624 153.978 132.644 156.853C115.546 167.555 100.478 181.303 88.1579 197.441C64.7957 227.714 45.8433 261.263 31.8866 297.051C30.0607 301.279 31.8867 302.463 35.8705 302.125C39.387 301.616 42.9727 302.044 46.279 303.366C49.5852 304.687 52.4994 306.858 54.7384 309.667C56.9774 312.476 58.465 315.828 59.0564 319.396C59.6478 322.964 59.3229 326.627 58.1134 330.029C54.1296 343.389 49.9798 356.58 45.996 369.772C45.996 371.294 44.3361 372.985 45.996 374.338C47.656 375.691 49.3159 374.338 50.6438 373.323L65.915 362.161C70.3968 358.779 74.8787 355.058 80.5224 358.948C86.1661 362.838 84.506 368.926 83.1781 374.507C78.6963 391.419 74.3806 410.022 70.0648 427.61C70.0648 429.47 68.4049 431.669 70.0648 433.022C71.7247 434.375 73.5506 433.022 75.2105 431.5L100.773 415.941C108.907 411.036 114.551 413.404 117.373 422.536C122.671 442.557 129.213 462.214 136.96 481.389C141.216 492.101 146.794 502.216 153.559 511.492C158.041 517.411 160.53 517.073 164.68 511.492C170.077 502.417 174.369 492.706 177.462 482.573C184.485 461.925 190.033 440.787 194.061 419.323C194.121 417.625 194.636 415.975 195.551 414.554C196.467 413.133 197.747 411.995 199.252 411.262C200.758 410.53 202.431 410.233 204.091 410.401C205.751 410.57 207.334 411.199 208.668 412.22C217.632 416.617 226.761 420.676 235.393 425.75C237.219 426.933 239.377 428.963 241.535 427.272C243.692 425.58 241.535 423.044 241.535 421.014C235.891 402.58 230.081 384.316 224.105 366.051C223.24 364.032 223.067 361.774 223.615 359.642C224.163 357.51 225.399 355.629 227.125 354.3C228.85 352.972 230.965 352.274 233.127 352.32C235.29 352.365 237.374 353.151 239.044 354.551L256.972 365.882C258.632 366.897 260.458 369.264 262.449 367.404C264.441 365.544 262.449 363.345 262.449 361.485C257.47 348.294 252.324 335.441 247.676 322.08C246.577 318.915 246.247 315.526 246.713 312.203C247.179 308.879 248.427 305.72 250.352 302.995C252.276 300.27 254.819 298.06 257.764 296.553C260.709 295.047 263.969 294.289 267.263 294.345C273.903 294.345 274.401 294.345 271.413 287.581C256.381 255.831 237.353 226.211 214.81 199.47C200.313 181.774 182.476 167.224 162.356 156.683C157.709 154.316 157.543 154.485 157.709 159.558C157.709 177.823 159.036 196.088 159.534 214.353C159.475 215.886 159.758 217.413 160.362 218.82C160.965 220.226 161.875 221.474 163.02 222.47C179.62 238.367 196.219 254.433 212.818 270.5C216.138 273.713 219.457 276.757 222.445 280.139C223.977 281.748 224.833 283.902 224.833 286.143C224.833 288.384 223.977 290.537 222.445 292.147C220.914 293.874 218.804 294.953 216.53 295.173C214.256 295.392 211.984 294.734 210.162 293.33C208.873 292.409 207.652 291.392 206.51 290.286L165.178 250.713C164.109 249.203 162.599 248.078 160.862 247.5C160.447 249.222 160.447 251.02 160.862 252.742C160.862 271.514 162.19 290.286 162.522 308.889C162.481 310.748 162.847 312.593 163.594 314.29C164.34 315.987 165.449 317.492 166.838 318.698C176.632 327.661 186.093 336.794 195.555 346.095C197.004 347.157 198.123 348.623 198.776 350.315C199.43 352.008 199.592 353.857 199.241 355.641C198.891 357.424 198.044 359.068 196.802 360.374C195.559 361.68 193.974 362.594 192.235 363.007C190.511 363.456 188.698 363.409 186.999 362.871C185.299 362.334 183.779 361.327 182.607 359.963L164.68 343.051C163.352 344.742 164.68 346.264 164.68 347.617C164.68 361.316 165.51 375.014 165.842 388.713C165.842 395.478 162.688 399.705 157.045 400.044C151.401 400.382 147.749 396.323 147.417 389.389L145.923 349.308C145.923 347.617 145.923 345.588 144.761 343.897L139.781 349.139C135.632 353.705 131.482 358.441 127 363.007C125.572 364.486 123.694 365.425 121.672 365.671C119.651 365.917 117.608 365.455 115.879 364.36C114.228 363.449 112.914 362.016 112.136 360.277C111.357 358.537 111.156 356.587 111.563 354.72C112.015 352.3 113.24 350.099 115.048 348.463L141.275 319.882C142.49 318.723 143.434 317.3 144.037 315.72C144.641 314.139 144.888 312.441 144.761 310.75C144.761 296.882 143.931 283.014 143.433 269.147C140.943 261.029 140.445 254.095 140.279 246.485Z"
            fill="#CEBCB5"
            className={disliked + "-leaf"}
          />
          <path
            d="M474.919 17.6688C485.638 21.6089 494.987 28.6647 501.81 37.9629C511.428 48.0191 518.691 60.1597 523.057 73.4776C524.053 76.5217 525.049 79.5659 526.211 82.7791C528.118 87.7695 528.974 93.1124 528.725 98.4617C528.475 103.811 527.125 109.047 524.762 113.831C522.399 118.614 519.075 122.838 515.007 126.229C510.938 129.62 506.216 132.102 501.146 133.514L463.964 138.757C455 141.294 434.085 140.786 427.28 147.213C411.857 163.531 393.843 177.081 373.996 187.294C313.077 221.117 289.838 198.286 241.203 207.081C192.567 215.875 186.093 234.647 175.968 219.088C159.369 193.044 217.134 168.353 231.741 168.353C246.348 168.353 251.494 144.338 251.494 144.338C232.444 134.638 212.62 126.604 192.235 120.323C125.838 97.9997 60.4374 127.764 51.1419 147.551C41.8463 167.338 25.9111 181.375 13.7937 167.845C1.67627 154.316 46.9919 87.0071 110.899 60.6247C174.806 34.2424 224.437 33.2276 275.563 54.1982C318.389 71.11 378.312 53.1835 391.757 49.9703C406.722 45.9562 420.398 38.0276 431.429 26.9703C435.697 22.7965 440.797 19.6089 446.383 17.6244C451.968 15.6399 457.908 14.9052 463.798 15.4703C467.586 15.6839 471.328 16.4235 474.919 17.6688Z"
            fill="#CEBCB5"
            className={disliked + "-hand"}
            stroke="#033F59"
            strokeWidth="20"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

// TODO: Add the rest of the necessary props.
// LikeButtons.propTypes = {
//   score: PropTypes.number,
// };

export default LikeButtons;
