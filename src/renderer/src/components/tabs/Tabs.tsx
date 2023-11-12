import { TabsProps } from './Tabs.props';

const Tabs = ({ tabStatus, setTabStatus }: TabsProps): JSX.Element => {
  return (
    <div
      className="w-full bg-gray-150 dark:bg-gray-350 h-[40px] 
      rounded-lg flex flex-row justify-between items-center pl-1 pr-1 mt-[25px]"
    >
      <div
        className={`flex w-[48%] height-[34px] 
          flex-shrink-0 rounded-lg py-[5px] pl-[16px] ${
            tabStatus === 'files'
              ? 'bg-white dark:bg-black'
              : 'bg-gray-200 dark:bg-gray-450 cursor-pointer'
          } `}
        onClick={(): void => {
          if (tabStatus === 'files') {
            return;
          }
          setTabStatus('files');
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.99991H21M14 10.9999H21M3 15.9999H21M3 20.9999H21M5.89443 11.5527L9.42229 9.78877C10.8964 9.05172 10.8964 6.9481 9.42229 6.21106L5.89443 4.44712C4.56463 3.78222 3 4.74921 3 6.23598V9.76384C3 11.2506 4.56462 12.2176 5.89443 11.5527Z"
            className="stroke-black dark:stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-serif text-lg pl-2 text-black dark:text-white">Files</span>
      </div>
      <div
        className={`flex w-[48%] height-[34px] 
         flex-shrink-0 rounded-lg py-[5px] pl-[16px] ${
           tabStatus === 'options'
             ? 'bg-white dark:bg-black'
             : 'bg-gray-200 dark:bg-gray-450 cursor-pointer'
         } `}
        onClick={(): void => {
          if (tabStatus === 'options') {
            return;
          }
          setTabStatus('options');
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9469 24H11.0441C10.616 23.9998 10.2055 23.8299 9.90251 23.5274C9.59953 23.2249 9.42881 22.8146 9.42779 22.3864V20.2964C8.84904 20.1161 8.29052 19.8764 7.76117 19.581L6.43344 20.9007C5.81314 21.5096 4.7623 21.5038 4.15104 20.8936L2.80587 19.5396C2.50498 19.2357 2.33688 18.8247 2.33846 18.397C2.34003 17.9692 2.51114 17.5595 2.81427 17.2578L4.21817 15.8631C4.01168 15.4463 3.83837 15.0139 3.69985 14.5698H1.61368C1.18556 14.5678 0.775613 14.3964 0.473301 14.0932C0.170989 13.7899 0.000847294 13.3794 0 12.9511V11.047C0.000341299 10.6188 0.170422 10.2083 0.472936 9.90548C0.775449 9.60263 1.18569 9.43216 1.61368 9.43148H3.70308C3.88298 8.85347 4.12267 8.29581 4.41827 7.76755L2.86268 6.19596C2.71268 6.04545 2.59408 5.86663 2.51374 5.66989C2.43341 5.47314 2.39295 5.2624 2.39471 5.04988C2.3954 4.83793 2.43815 4.62823 2.52047 4.43294C2.6028 4.23764 2.72306 4.06064 2.87429 3.91219L4.22398 2.56852C4.84234 1.96158 5.90027 1.96804 6.50702 2.57627L8.1362 4.22082C8.5493 4.01421 8.9837 3.83987 9.43295 3.70234V1.61421C9.43295 0.72381 10.1572 0 11.0466 0H12.9521C13.3798 0.000683425 13.7898 0.170991 14.0921 0.473584C14.3945 0.776176 14.5646 1.18636 14.5651 1.61421V3.70492C15.0313 3.84939 15.4843 4.03321 15.9193 4.2544L17.564 2.6247C18.1843 2.01517 19.2377 2.02421 19.8464 2.63245L21.189 3.9858C21.4904 4.28733 21.6569 4.69346 21.6569 5.12865C21.6569 5.34085 21.6147 5.55093 21.5329 5.74669C21.451 5.94244 21.331 6.11996 21.1799 6.26893L19.6147 7.82502C19.8954 8.33769 20.1239 8.87748 20.2956 9.43535H22.387C22.8147 9.43603 23.2247 9.60634 23.527 9.90894C23.8294 10.2115 23.9995 10.6217 24 11.0496V12.9504C23.9998 13.3786 23.8299 13.7892 23.5275 14.0921C23.2251 14.3951 22.815 14.5657 22.387 14.5666H20.2956C20.1519 15.0337 19.9677 15.4874 19.745 15.9225L21.1386 17.3262C21.4394 17.6239 21.6059 18.0307 21.6059 18.4691C21.6059 18.8991 21.4362 19.3033 21.1289 19.6081L19.7792 20.9524C19.1589 21.5613 18.0991 21.5496 17.4975 20.9433L16.1801 19.6152C15.6656 19.898 15.128 20.1272 14.5748 20.2983V22.3897C14.5676 22.8176 14.3932 23.2257 14.0889 23.5267C13.7847 23.8276 13.3748 23.9975 12.9469 24ZM7.66371 18.8126L7.86832 18.9333C8.47872 19.2963 9.13409 19.5777 9.81765 19.7701L10.0416 19.8328V22.3851C10.0416 22.9366 10.4915 23.3853 11.0441 23.3853H12.9469C13.2128 23.3839 13.4677 23.2785 13.6571 23.0918C13.8465 22.9051 13.9556 22.6518 13.9609 22.3858V19.8366L14.1849 19.774C14.8478 19.5882 15.4837 19.3172 16.0768 18.9676L16.2814 18.8468L17.9319 20.5101C18.3043 20.8859 18.9621 20.8923 19.3474 20.5146L20.6958 19.1709C20.8862 18.9824 20.9914 18.7325 20.9914 18.4678C20.9914 18.1947 20.8895 17.9435 20.7042 17.7601L18.9892 16.0316L19.0983 15.8315C19.3887 15.2969 19.614 14.7396 19.7689 14.1766L19.8315 13.9513H22.387C22.9382 13.9513 23.3868 13.5019 23.3868 12.9492V11.0483C23.3868 10.4969 22.9382 10.0475 22.387 10.0475H19.8322L19.7696 9.82276C19.5849 9.15849 19.3153 8.52087 18.9672 7.92575L18.8472 7.72042L20.7468 5.8318C20.9379 5.64197 21.0431 5.39144 21.0431 5.12672C21.0431 4.85553 20.9405 4.60371 20.7539 4.41776L19.4113 3.06441C19.2214 2.8805 18.9677 2.77735 18.7034 2.77663C18.4391 2.7759 18.1848 2.87766 17.9939 3.06053L16.0297 5.00726L15.8296 4.89944C15.3049 4.61467 14.75 4.38964 14.1752 4.22857L13.9506 4.16594V1.61421C13.9506 1.06279 13.502 0.613398 12.9508 0.613398H11.0453C10.4941 0.613398 10.0455 1.06215 10.0455 1.61421V4.16529L9.82088 4.22793C9.25932 4.38354 8.72164 4.59919 8.2214 4.8678L8.01936 4.97627L6.07068 3.00952C5.69566 2.63503 5.03663 2.62922 4.65387 3.00565L3.30547 4.34802C3.21157 4.43991 3.1369 4.54958 3.08581 4.67063C3.03472 4.79169 3.00824 4.92171 3.00791 5.05311C3.00679 5.18495 3.03189 5.31569 3.08176 5.43774C3.13163 5.55978 3.20526 5.67069 3.29837 5.764L5.18509 7.6707L5.06439 7.87409C4.7016 8.48382 4.42035 9.13854 4.22785 9.82147L4.16524 10.0455H1.61368C1.06245 10.0455 0.613845 10.4949 0.613845 11.047V12.9511C0.613845 13.5031 1.06245 13.9538 1.61498 13.9558H4.16395L4.22656 14.1805C4.37631 14.7203 4.59125 15.2575 4.86687 15.7785L4.97337 15.9793L3.24738 17.6923C3.05958 17.8792 2.9535 18.1329 2.95241 18.3978C2.95132 18.6628 3.05531 18.9174 3.24157 19.1057L4.58609 20.4591C4.96563 20.8368 5.6182 20.8407 6.0029 20.463L7.66371 18.8126Z"
            fill="white"
            className="stroke-black dark:stroke-white"
          />
        </svg>

        <span className="font-serif text-lg pl-2 text-black dark:text-white">Options</span>
      </div>
    </div>
  );
};
export default Tabs;