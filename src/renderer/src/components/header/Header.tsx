import { Toaster } from 'react-hot-toast';

import DarkModeSwitch from './darkModeSwitch/DarkModeSwitch';
import ImgForm from './imgForm/ImgForm';
import FolderForm from './folderForm/FolderForm';
import { HeaderProps } from './Header.props';

const Header = ({ setImages, setDestPath }: HeaderProps): JSX.Element => {
  return (
    <div className="relative">
      <div className="h-[196px] w-full flex justify-center pt-5 overflow-hidden">
        <Toaster gutter={8} position="bottom-left" />
        <DarkModeSwitch />
        <ImgForm setImages={setImages} />
        <span className="absolute left-0 bottom-0">
          <svg
            width="236"
            height="107"
            viewBox="0 0 236 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.622 11.3544L116.67 11.3376L145.502 3.20212C145.84 3.10679 146.127 3.467 145.961 3.77771L131.93 30.0204C131.767 30.3255 131.321 30.2902 131.205 29.963L127.122 18.4227L116.575 12.0658C116.29 11.8942 116.329 11.4769 116.622 11.3544ZM131.654 28.8458L144.368 5.06543L127.869 18.1519L131.654 28.8458ZM127.289 17.5922L143.766 4.52264L117.775 11.8569L127.289 17.5922ZM-39.9185 96.6164C-41.1527 95.9883 -42.3282 95.3328 -43.4435 94.6499C-43.8182 94.4205 -43.9373 93.9285 -43.7096 93.551C-43.482 93.1735 -42.9937 93.0534 -42.619 93.2828C-41.5397 93.9436 -40.4005 94.5789 -39.2027 95.1885C-38.8114 95.3876 -38.6544 95.8687 -38.852 96.263C-39.0497 96.6573 -39.5272 96.8155 -39.9185 96.6164ZM-28.7265 101.084C-30.0326 100.676 -31.3005 100.249 -32.5291 99.8007C-32.9414 99.6503 -33.1546 99.1917 -33.0054 98.7764C-32.8561 98.361 -32.401 98.1461 -31.9887 98.2965C-30.784 98.7359 -29.5397 99.1555 -28.2572 99.5554C-27.8384 99.686 -27.6039 100.134 -27.7335 100.556C-27.8631 100.978 -28.3077 101.214 -28.7265 101.084ZM-17.0915 103.981C-18.4204 103.722 -19.7235 103.446 -20.9997 103.155C-21.4273 103.057 -21.6952 102.628 -21.5982 102.198C-21.5012 101.767 -21.0759 101.497 -20.6484 101.595C-19.3889 101.883 -18.1023 102.154 -16.79 102.41C-16.3595 102.494 -16.0781 102.914 -16.1614 103.347C-16.2446 103.781 -16.6611 104.065 -17.0915 103.981ZM-5.2427 105.781C-6.58054 105.63 -7.9009 105.464 -9.20264 105.285C-9.63702 105.225 -9.94101 104.822 -9.88161 104.384C-9.82221 103.946 -9.42193 103.64 -8.98755 103.7C-7.69855 103.878 -6.39084 104.041 -5.06558 104.191C-4.6299 104.241 -4.31635 104.636 -4.36526 105.075C-4.41417 105.514 -4.80702 105.83 -5.2427 105.781ZM6.66349 106.736C5.32588 106.67 3.99951 106.591 2.68553 106.5C2.24814 106.47 1.91796 106.088 1.94806 105.647C1.97816 105.206 2.35712 104.874 2.79451 104.904C4.09807 104.994 5.41408 105.072 6.74137 105.138C7.17926 105.16 7.51682 105.535 7.49531 105.976C7.4738 106.417 7.10138 106.758 6.66349 106.736ZM18.6169 106.998C17.282 107.004 15.953 106.998 14.6312 106.981C14.1928 106.976 13.8419 106.613 13.8475 106.172C13.853 105.73 14.2129 105.376 14.6513 105.382C15.964 105.399 17.2839 105.404 18.6098 105.398C19.0482 105.396 19.4052 105.752 19.4072 106.194C19.4091 106.636 19.0553 106.996 18.6169 106.998ZM30.551 106.648C29.2239 106.719 27.8978 106.779 26.574 106.829C26.1359 106.846 25.7675 106.501 25.7512 106.06C25.7348 105.618 26.0767 105.247 26.5149 105.231C27.8302 105.181 29.1479 105.121 30.4666 105.05C30.9044 105.027 31.2782 105.365 31.3015 105.806C31.3249 106.248 30.9888 106.624 30.551 106.648ZM42.4657 105.723C41.1484 105.857 39.8271 105.981 38.5032 106.094C38.0664 106.131 37.6822 105.805 37.6451 105.365C37.6079 104.925 37.932 104.537 38.3689 104.5C39.6844 104.388 40.9974 104.265 42.3064 104.132C42.7426 104.087 43.1319 104.408 43.1759 104.847C43.2199 105.287 42.9019 105.679 42.4657 105.723ZM54.3194 104.225C53.0149 104.423 51.7006 104.611 50.3782 104.789C49.9436 104.848 49.5442 104.54 49.4862 104.103C49.4281 103.665 49.7333 103.262 50.1678 103.204C51.4815 103.027 52.7869 102.84 54.0827 102.643C54.5162 102.577 54.9206 102.878 54.986 103.315C55.0514 103.752 54.7529 104.159 54.3194 104.225ZM66.0842 102.11C64.7972 102.38 63.4935 102.639 62.1746 102.888C61.7437 102.97 61.3288 102.684 61.248 102.25C61.1672 101.816 61.451 101.398 61.8819 101.316C63.1907 101.069 64.4844 100.811 65.7612 100.544C66.1904 100.454 66.6107 100.732 66.6999 101.164C66.7891 101.597 66.5134 102.02 66.0842 102.11ZM77.7106 99.2746C76.4521 99.6299 75.1668 99.9751 73.8567 100.31C73.4317 100.418 72.9999 100.159 72.8921 99.731C72.7844 99.3028 73.0415 98.8677 73.4665 98.7591C74.764 98.4277 76.0365 98.0859 77.2822 97.7343C77.7044 97.6151 78.1425 97.8633 78.2608 98.2886C78.3791 98.714 78.1327 99.1555 77.7106 99.2746ZM89.0877 95.4986C87.8782 95.9715 86.6257 96.4336 85.3322 96.8843C84.9179 97.0287 84.4658 96.8073 84.3225 96.3898C84.1793 95.9723 84.399 95.5169 84.8133 95.3725C86.0884 94.9282 87.3225 94.4729 88.5132 94.0072C88.922 93.8474 89.3819 94.0517 89.5405 94.4635C89.6991 94.8753 89.4964 95.3387 89.0877 95.4986ZM99.9409 90.2666C98.8427 90.9339 97.6671 91.5884 96.417 92.2291C96.0263 92.4294 95.5483 92.2726 95.3496 91.8788C95.1508 91.4851 95.3064 91.0036 95.6972 90.8033C96.9141 90.1796 98.0563 89.5437 99.1209 88.8968C99.4964 88.6686 99.9843 88.7903 100.211 89.1686C100.437 89.5469 100.316 90.0385 99.9409 90.2666ZM109.622 83.0706C108.58 83.944 107.544 84.7844 106.508 85.5955C106.162 85.8666 105.663 85.8037 105.394 85.4549C105.125 85.1062 105.187 84.6036 105.534 84.3325C106.555 83.5323 107.578 82.7029 108.607 81.8405C108.944 81.5581 109.445 81.6045 109.725 81.9442C110.006 82.2839 109.959 82.7882 109.622 83.0706ZM118.523 75.0198C117.521 75.9829 116.558 76.8926 115.617 77.7664C115.294 78.0657 114.792 78.0449 114.495 77.7199C114.198 77.395 114.219 76.889 114.541 76.5897C115.476 75.7224 116.431 74.819 117.427 73.8621C117.745 73.5572 118.247 73.5693 118.55 73.889C118.852 74.2087 118.84 74.715 118.523 75.0198ZM127.039 66.614L124.217 69.4293C123.905 69.7399 123.402 69.737 123.094 69.4228C122.786 69.1086 122.789 68.6022 123.1 68.2917L125.922 65.4771C126.233 65.1663 126.736 65.1689 127.044 65.4829C127.353 65.7968 127.35 66.3033 127.039 66.614ZM133.444 60.3153L132.706 61.0269C132.39 61.3329 131.887 61.3226 131.583 61.004C131.28 60.6854 131.29 60.1791 131.606 59.8731C132.356 59.1473 133.082 58.4525 133.792 57.7801L134.499 57.115C134.819 56.814 135.322 56.8321 135.62 57.1554C135.919 57.4787 135.901 57.9848 135.58 58.2858C134.883 58.9397 134.174 59.6134 133.444 60.3153ZM144.52 50.4567C143.508 51.2719 142.495 52.1141 141.475 52.9871C141.141 53.2731 140.64 53.2319 140.356 52.8952C140.072 52.5585 140.113 52.0538 140.447 51.7678C141.479 50.8848 142.504 50.0327 143.528 49.2074C143.871 48.9315 144.37 48.9875 144.644 49.3324C144.918 49.6774 144.862 50.1808 144.52 50.4567ZM154.122 43.5154C153.019 44.221 151.926 44.9515 150.839 45.7082C150.478 45.9593 149.984 45.8683 149.735 45.505C149.485 45.1416 149.576 44.6434 149.936 44.3922C151.04 43.6238 152.15 42.8817 153.271 42.1649C153.641 41.9281 154.132 42.0385 154.367 42.4115C154.602 42.7845 154.492 43.2787 154.122 43.5154ZM164.463 37.7821C163.272 38.3456 162.098 38.9331 160.938 39.5446C160.549 39.7494 160.07 39.5981 159.867 39.2067C159.663 38.8153 159.813 38.332 160.202 38.1272C161.382 37.5051 162.577 36.9075 163.788 36.3342C164.185 36.1464 164.658 36.3182 164.844 36.7181C165.031 37.1179 164.86 37.5943 164.463 37.7821ZM175.446 33.4207C174.188 33.8312 172.948 34.2639 171.727 34.7189C171.316 34.872 170.859 34.6603 170.707 34.246C170.555 33.8316 170.765 33.3716 171.176 33.2184C172.418 32.7559 173.678 32.316 174.957 31.8987C175.375 31.7627 175.822 31.9931 175.957 32.4134C176.092 32.8337 175.864 33.2847 175.446 33.4207ZM183.978 31.0502C183.662 31.1237 183.347 31.1984 183.032 31.2744C182.606 31.3775 182.178 31.1129 182.075 30.6834C181.973 30.2538 182.236 29.822 182.662 29.7189C182.981 29.6418 183.301 29.5659 183.622 29.4914C184.609 29.2621 185.601 29.0613 186.598 28.8889C187.03 28.8142 187.44 29.1065 187.514 29.5419C187.589 29.9773 187.299 30.3908 186.866 30.4655C185.899 30.6329 184.936 30.8277 183.978 31.0502ZM198.556 29.7699C197.256 29.703 195.951 29.6836 194.645 29.7126C194.207 29.7223 193.844 29.3722 193.834 28.9306C193.824 28.4889 194.172 28.123 194.61 28.1133C195.955 28.0834 197.298 28.1034 198.637 28.1723C199.075 28.1948 199.412 28.5707 199.389 29.0119C199.367 29.4531 198.994 29.7924 198.556 29.7699ZM210.114 31.6604C208.868 31.3097 207.599 31.0039 206.314 30.7448C205.884 30.6581 205.605 30.2367 205.691 29.8035C205.777 29.3704 206.195 29.0895 206.625 29.1761C207.95 29.4431 209.257 29.7582 210.541 30.1197C210.963 30.2385 211.21 30.6797 211.092 31.1052C210.974 31.5307 210.536 31.7792 210.114 31.6604ZM220.926 36.1727C219.819 35.5311 218.661 34.929 217.461 34.3702C217.063 34.185 216.889 33.7098 217.073 33.3087C217.257 32.9077 217.728 32.7327 218.126 32.9179C219.37 33.4965 220.569 34.1205 221.717 34.786C222.097 35.0063 222.228 35.4953 222.01 35.8782C221.791 36.2611 221.306 36.393 220.926 36.1727ZM229.885 43.5394C229.091 42.5765 228.197 41.6398 227.212 40.7372C226.888 40.4401 226.864 39.9342 227.159 39.6073C227.454 39.2805 227.956 39.2564 228.28 39.5535C229.319 40.5054 230.264 41.4958 231.106 42.5171C231.386 42.8569 231.34 43.3612 231.003 43.6435C230.666 43.9258 230.165 43.8792 229.885 43.5394ZM234.238 53.9632C234.199 52.7208 233.989 51.4732 233.61 50.2303C233.482 49.8079 233.718 49.3606 234.137 49.2311C234.556 49.1016 235 49.3391 235.128 49.7614C235.547 51.1383 235.781 52.5266 235.824 53.9133C235.838 54.3548 235.494 54.7239 235.056 54.7377C234.618 54.7515 234.251 54.4047 234.238 53.9632ZM230.235 64.3297C231.109 63.3063 231.839 62.2592 232.426 61.1929C232.639 60.8066 233.122 60.6673 233.506 60.8816C233.889 61.0959 234.027 61.5828 233.815 61.9691C233.174 63.1324 232.382 64.2686 231.439 65.3731C231.153 65.7079 230.652 65.7458 230.319 65.4577C229.987 65.1696 229.949 64.6646 230.235 64.3297ZM221.035 71.4485C222.228 70.7933 223.341 70.1173 224.375 69.4218C224.739 69.1765 225.232 69.2754 225.476 69.6427C225.719 70.01 225.621 70.5067 225.257 70.7521C224.183 71.4747 223.029 72.1754 221.795 72.8531C221.41 73.0645 220.928 72.9215 220.718 72.5336C220.508 72.1458 220.65 71.6599 221.035 71.4485ZM210.208 76.0832C211.491 75.6519 212.724 75.2048 213.907 74.7424C214.316 74.5827 214.776 74.7871 214.934 75.1989C215.093 75.6108 214.89 76.0742 214.481 76.2339C213.274 76.7056 212.017 77.1614 210.71 77.6006C210.294 77.7404 209.845 77.5141 209.706 77.095C209.567 76.676 209.792 76.223 210.208 76.0832ZM199.833 78.973C200.793 78.7527 201.733 78.5256 202.655 78.2918C203.08 78.1839 203.511 78.4437 203.618 78.8721C203.725 79.3005 203.468 79.7352 203.042 79.8431C201.876 80.139 200.68 80.4242 199.454 80.6986L199.148 80.7668C198.72 80.8618 198.296 80.5891 198.202 80.1577C198.108 79.7263 198.378 79.2995 198.807 79.2045L199.833 78.973ZM187.156 81.3602C188.446 81.171 189.746 80.9631 191.056 80.7366C191.489 80.6619 191.899 80.9543 191.973 81.3897C192.047 81.8251 191.757 82.2386 191.325 82.3133C190.001 82.5421 188.688 82.752 187.385 82.9432C186.951 83.0069 186.548 82.7041 186.485 82.267C186.421 81.8299 186.722 81.4239 187.156 81.3602ZM175.385 82.5941C176.683 82.5149 177.993 82.4153 179.315 82.295C179.752 82.2553 180.138 82.5798 180.177 83.0197C180.217 83.4597 179.895 83.8485 179.458 83.8883C178.12 84.0099 176.794 84.1107 175.481 84.1909C175.044 84.2176 174.667 83.8818 174.641 83.4409C174.614 83 174.947 82.6209 175.385 82.5941ZM163.557 82.7442C164.856 82.7939 166.169 82.8212 167.498 82.8257C167.936 82.8272 168.29 83.1865 168.289 83.6283C168.287 84.07 167.931 84.4269 167.492 84.4254C166.146 84.4208 164.814 84.3931 163.497 84.3427C163.059 84.326 162.717 83.9545 162.734 83.5131C162.75 83.0717 163.119 82.7274 163.557 82.7442ZM151.795 81.6246C153.077 81.8244 154.378 81.9999 155.696 82.1506C156.132 82.2004 156.445 82.5966 156.395 83.0356C156.346 83.4745 155.953 83.7899 155.517 83.7401C154.177 83.587 152.856 83.4086 151.552 83.2055C151.119 83.1379 150.822 82.7293 150.889 82.2927C150.956 81.8562 151.362 81.557 151.795 81.6246ZM140.287 79.0392C141.529 79.4109 142.793 79.7566 144.08 80.0758C144.506 80.1814 144.766 80.6147 144.661 81.0436C144.556 81.4726 144.126 81.7347 143.701 81.6291C142.389 81.3039 141.101 80.9515 139.835 80.5727C139.415 80.4468 139.175 80.0016 139.3 79.5781C139.425 79.1547 139.867 78.9134 140.287 79.0392ZM129.288 74.7925C130.454 75.3559 131.649 75.893 132.875 76.4028C133.28 76.5714 133.473 77.0391 133.305 77.4474C133.138 77.8557 132.674 78.05 132.268 77.8814C131.016 77.3603 129.794 76.8111 128.601 76.2348C128.206 76.0438 128.039 75.5661 128.229 75.1678C128.418 74.7695 128.893 74.6014 129.288 74.7925ZM110.603 60.7367C111.422 61.7104 112.306 62.6741 113.253 63.6216C113.564 63.9329 113.566 64.4394 113.257 64.7528C112.948 65.0662 112.445 65.0679 112.134 64.7566C111.155 63.777 110.24 62.7796 109.392 61.7708C109.108 61.4338 109.15 60.9291 109.484 60.6435C109.819 60.3579 110.32 60.3997 110.603 60.7367ZM104.733 50.739C105.09 51.8681 105.592 53.0629 106.229 54.2944C106.432 54.686 106.281 55.1692 105.892 55.3735C105.504 55.5778 105.024 55.4259 104.821 55.0343C104.143 53.7237 103.606 52.4445 103.22 51.225C103.087 50.8042 103.318 50.3542 103.735 50.22C104.153 50.0857 104.6 50.3181 104.733 50.739ZM105.683 39.5781C105.162 40.7945 104.769 42.0134 104.504 43.2354C104.41 43.667 103.987 43.9403 103.558 43.8458C103.13 43.7514 102.859 43.325 102.953 42.8935C103.24 41.57 103.664 40.2534 104.225 38.9443C104.399 38.5387 104.866 38.3518 105.269 38.5268C105.671 38.7019 105.857 39.1725 105.683 39.5781ZM112.388 30.1056C111.432 31.0702 110.558 32.0369 109.767 33.0055C109.489 33.3466 108.989 33.3956 108.65 33.115C108.311 32.8343 108.263 32.3303 108.541 31.9891C109.365 30.98 110.273 29.9753 111.265 28.9749C111.575 28.6624 112.078 28.6622 112.388 28.9744C112.698 29.2866 112.698 29.7931 112.388 30.1056ZM121.497 22.6488C120.379 23.4171 119.315 24.1871 118.305 24.9587C117.956 25.2255 117.458 25.1565 117.193 24.8045C116.928 24.4525 116.997 23.9508 117.346 23.6839C118.378 22.896 119.463 22.1105 120.602 21.3274C120.964 21.0784 121.458 21.1724 121.705 21.5373C121.952 21.9022 121.859 22.3999 121.497 22.6488Z"
              className="fill-blue-100 dark:fill-white"
            />
          </svg>
        </span>
        <span className="absolute right-[56px] bottom-0">
          <svg
            width="56"
            height="97"
            viewBox="0 0 56 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.7119 65.097L27.3491 64.7341C36.53 55.6885 38.0861 40.6198 37.775 29.5718C37.5416 22.138 36.5653 14.7457 34.8605 7.50372L35.359 7.37646C37.0729 14.6554 38.0546 22.0855 38.2896 29.5572C38.6037 40.7065 37.0232 55.9226 27.7119 65.097ZM24.2861 96.7658L24.7426 97C30.7545 85.4491 27.5623 70.5114 23.8254 60.0142C21.2979 52.987 18.0742 46.2266 14.2018 39.8327L13.7677 40.1054C17.62 46.467 20.827 53.1931 23.3413 60.1847C27.0441 70.5866 30.214 85.3769 24.2861 96.7658ZM29.135 39.8452L25.7898 57.9857L26.2969 58.0775L29.6421 39.937L29.135 39.8452ZM6.51367 55.6491L6.8913 55.3009L24.1657 73.6958L23.7881 74.044L6.51367 55.6491ZM37.9465 75.5071L29.1844 87.5178L29.6024 87.8172L38.3645 75.8065L37.9465 75.5071ZM49.646 12.0254L40.8419 28.2722L41.2961 28.5138L50.1002 12.267L49.646 12.0254ZM23.2208 20.1853L23.6881 19.9688L34.4288 42.7306L33.9615 42.9471L23.2208 20.1853ZM46.9828 48.6469L34.9226 57.4118L35.2276 57.8239L47.2878 49.059L46.9828 48.6469Z"
              className="fill-blue-100 dark:fill-white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.6512 2.58175C36.6512 4.00761 35.485 5.1635 34.0465 5.1635C32.608 5.1635 31.4419 4.00761 31.4419 2.58175C31.4419 1.15589 32.608 0 34.0465 0C35.485 0 36.6512 1.15589 36.6512 2.58175ZM56 5.53232C56 6.95818 54.8339 8.11407 53.3954 8.11407C51.9568 8.11407 50.7907 6.95818 50.7907 5.53232C50.7907 4.10646 51.9568 2.95057 53.3954 2.95057C54.8339 2.95057 56 4.10646 56 5.53232ZM47.4419 35.5913C48.8804 35.5913 50.0465 34.4354 50.0465 33.0095C50.0465 31.5836 48.8804 30.4278 47.4419 30.4278C46.0033 30.4278 44.8372 31.5836 44.8372 33.0095C44.8372 34.4354 46.0033 35.5913 47.4419 35.5913ZM11.3488 38.173C12.7873 38.173 13.9535 37.0171 13.9535 35.5913C13.9535 34.1654 12.7873 33.0095 11.3488 33.0095C9.91033 33.0095 8.74419 34.1654 8.74419 35.5913C8.74419 37.0171 9.91033 38.173 11.3488 38.173ZM5.2093 52.1882C5.2093 53.6141 4.04316 54.77 2.60465 54.77C1.16614 54.77 0 53.6141 0 52.1882C0 50.7624 1.16614 49.6065 2.60465 49.6065C4.04316 49.6065 5.2093 50.7624 5.2093 52.1882ZM11.3488 64.7281C11.3488 66.154 10.1827 67.3099 8.74419 67.3099C7.30568 67.3099 6.13953 66.154 6.13953 64.7281C6.13953 63.3023 7.30568 62.1464 8.74419 62.1464C10.1827 62.1464 11.3488 63.3023 11.3488 64.7281ZM42.7907 73.5798C44.2292 73.5798 45.3953 72.424 45.3953 70.9981C45.3953 69.5722 44.2292 68.4164 42.7907 68.4164C41.3522 68.4164 40.186 69.5722 40.186 70.9981C40.186 72.424 41.3522 73.5798 42.7907 73.5798ZM34.7907 69.8916C34.7907 71.3175 33.6246 72.4734 32.186 72.4734C30.7475 72.4734 29.5814 71.3175 29.5814 69.8916C29.5814 68.4658 30.7475 67.3099 32.186 67.3099C33.6246 67.3099 34.7907 68.4658 34.7907 69.8916ZM26.0465 37.2509C26.0465 38.6768 24.8804 39.8327 23.4419 39.8327C22.0034 39.8327 20.8372 38.6768 20.8372 37.2509C20.8372 35.8251 22.0034 34.6692 23.4419 34.6692C24.8804 34.6692 26.0465 35.8251 26.0465 37.2509ZM20.6512 18.2567C22.0897 18.2567 23.2558 17.1008 23.2558 15.6749C23.2558 14.249 22.0897 13.0932 20.6512 13.0932C19.2127 13.0932 18.0465 14.249 18.0465 15.6749C18.0465 17.1008 19.2127 18.2567 20.6512 18.2567ZM53.9535 45.365C53.9535 46.7909 52.7873 47.9468 51.3488 47.9468C49.9103 47.9468 48.7442 46.7909 48.7442 45.365C48.7442 43.9392 49.9103 42.7833 51.3488 42.7833C52.7873 42.7833 53.9535 43.9392 53.9535 45.365ZM47.2558 60.4867C48.6943 60.4867 49.8605 59.3308 49.8605 57.9049C49.8605 56.4791 48.6943 55.3232 47.2558 55.3232C45.8173 55.3232 44.6512 56.4791 44.6512 57.9049C44.6512 59.3308 45.8173 60.4867 47.2558 60.4867Z"
              className="fill-blue-100 dark:fill-white"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col">
        <FolderForm setImages={setImages} setDestPath={setDestPath} />
      </div>
    </div>
  );
};
export default Header;
