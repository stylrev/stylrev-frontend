import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white text-center">
      <div className="container">
        <div className="mx-auto w-max">
          <svg
            width="142"
            height="49"
            viewBox="0 0 142 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_82_987)">
              <path
                d="M0.109375 23.2292L2.08807 22.0922C2.9675 23.5579 4.28663 24.6572 6.48518 24.6572C8.53717 24.6572 9.70973 23.7778 9.70973 22.3853C9.70973 20.7375 8.3906 20.3711 5.75233 19.6005C3.37168 18.9054 1.17312 17.9527 1.17312 15.0946C1.17312 12.4563 3.37168 10.9551 6.15651 10.9551C8.46388 10.9551 10.1494 11.9078 11.2132 13.409L9.45434 14.7637C8.68596 13.7022 7.62221 13.0426 6.15651 13.0426C4.50871 13.0426 3.51825 13.811 3.51825 14.9835C3.51825 16.4115 4.4332 16.8157 7.10922 17.5841C9.6742 18.2792 12.1281 19.3051 12.1281 22.2366C12.1281 24.8015 10.4071 26.7425 6.59622 26.7425C3.26286 26.7425 1.09984 25.1302 0.111596 23.2248L0.109375 23.2292Z"
                fill="white"
              />
              <path
                d="M24.3627 21.8723V13.4467H22.0176V11.2859H24.3627V3.37109H26.8899V11.2837H31.1405V13.4445H26.8899V21.9078C26.8899 23.922 27.585 24.5461 28.6843 24.5461C29.7103 24.5461 30.2588 24.1064 30.7363 23.6666L32.1287 25.2789C31.4691 25.974 30.2966 26.7801 28.4289 26.7801C26.1215 26.7801 24.3627 25.461 24.3627 21.87V21.8723Z"
                fill="white"
              />
              <path
                d="M47.7342 25.1706L41.2852 11.2842H44.1055L48.3916 20.7002C48.7958 21.6529 49.0867 23.2652 49.0867 23.2652C49.0867 23.2652 49.3443 21.6529 49.7818 20.7002L53.7392 11.2842H56.3775L46.4862 34.2202H43.8479L47.732 25.1706H47.7342Z"
                fill="white"
              />
              <path d="M70.0474 0H67.4824V26.4515H70.0474V0Z" fill="white" />
              <path
                d="M82.9785 11.2834H85.5435L85.4702 14.2503C86.4229 11.9429 88.1085 10.9902 89.9029 10.9902C91.0377 10.9902 91.8438 11.2456 92.5411 11.7231L91.5529 13.9572C91.0776 13.6285 90.4181 13.3709 89.4654 13.3709C87.3046 13.3709 85.5457 14.9099 85.5457 18.4631V26.449H82.9807V11.2834H82.9785Z"
                fill="white"
              />
              <path
                d="M110.275 24.5839C112.546 24.5839 114.085 23.6689 115.074 22.5697L116.648 24.1087C115.256 25.6832 113.242 26.7469 110.272 26.7469C105.289 26.7469 102.064 23.3025 102.064 18.8699C102.064 14.4372 105.471 10.9551 109.906 10.9551C114.778 10.9551 117.71 14.6926 117.528 19.7115H104.632C104.96 22.6052 106.939 24.5839 110.275 24.5839ZM114.965 17.7684C114.745 15.1679 113.097 13.1159 109.908 13.1159C107.015 13.1159 105.071 14.9835 104.669 17.7684H114.965Z"
                fill="white"
              />
              <path
                d="M126.906 11.2842H129.727L133.757 20.0406C134.233 21.0666 134.599 22.6412 134.599 22.6412C134.599 22.6412 134.93 21.0666 135.405 20.0406L139.362 11.2842H142.001L134.746 26.7451H134.27L126.906 11.2842Z"
                fill="white"
              />
              <path
                d="M3.06687 40.7559H3.19346L6.33361 47.9955H5.17438L4.76354 46.9829H1.48569L1.07485 47.9955H0L3.06687 40.7559ZM4.3638 46.0457L3.46883 43.8116C3.28895 43.3897 3.11129 42.7479 3.11129 42.7479C3.11129 42.7479 2.94251 43.3919 2.76263 43.8116L1.86766 46.0457H4.36602H4.3638Z"
                fill="white"
              />
              <path
                d="M13.4788 46.6045L14.396 46.0981C14.7335 46.6578 15.1643 47.0997 16.0393 47.0997C16.7655 47.0997 17.283 46.7088 17.283 46.1203C17.283 45.4985 16.861 45.2254 16.0815 44.8767L15.6063 44.6657C14.5625 44.2016 13.9318 43.6753 13.9318 42.5693C13.9318 41.4634 14.7535 40.7461 15.9438 40.7461C16.8921 40.7461 17.5361 41.1036 17.9669 41.8742L17.092 42.4117C16.8188 41.9386 16.5012 41.7166 15.9438 41.7166C15.3864 41.7166 15.0156 42.0652 15.0156 42.5494C15.0156 43.0868 15.322 43.3288 16.0482 43.6464L16.5123 43.8574C17.7338 44.3948 18.3889 44.9633 18.3889 46.1137C18.3889 47.3684 17.4095 48.0946 16.0593 48.0946C14.7091 48.0946 13.8785 47.4195 13.4766 46.6089L13.4788 46.6045Z"
                fill="white"
              />
              <path
                d="M23.2408 41.8085H21.1133V40.8291H26.4764V41.8085H24.3467V47.9955H23.2408V41.8085Z"
                fill="white"
              />
              <path
                d="M32.0424 45.7303L29.3242 40.8291H30.5567L32.1801 43.7805C32.4022 44.1802 32.6132 44.8131 32.6132 44.8131C32.6132 44.8131 32.8352 44.1802 33.0462 43.7805L34.6163 40.8291H35.7644L33.1617 45.6659V47.9955H32.0447V45.7303H32.0424Z"
                fill="white"
              />
              <path
                d="M39.0195 40.8291H40.1366V47.0161H43.4455V47.9955H39.0195V40.8291Z"
                fill="white"
              />
              <path
                d="M46.8633 40.8291H51.4158V41.8085H47.9803V44.5911H51.025V45.5504H47.9803V47.0161H51.5624V47.9955H46.8633V40.8291Z"
                fill="white"
              />
              <path
                d="M64.6314 47.9955H63.3456L62.0597 46.1101C61.8599 46.1301 61.66 46.1523 61.4601 46.1523H60.785V47.9955H59.668V40.8291H61.4601C63.441 40.8291 64.547 41.8618 64.547 43.5051C64.547 44.6111 64.0518 45.3706 63.1146 45.7814L64.6314 47.9955ZM61.4179 45.1929C62.8414 45.1929 63.41 44.5711 63.41 43.5073C63.41 42.4436 62.8192 41.8107 61.4179 41.8107H60.785V45.1929H61.4179Z"
                fill="white"
              />
              <path
                d="M68.1523 40.8291H72.7049V41.8085H69.2694V44.5911H72.3141V45.5504H69.2694V47.0161H72.8515V47.9955H68.1523V40.8291Z"
                fill="white"
              />
              <path
                d="M75.7832 40.8291H76.9735L78.5858 44.6755C78.7968 45.1507 79.0189 45.9502 79.0189 45.9502C79.0189 45.9502 79.2187 45.1596 79.4408 44.6755L81.0331 40.8291H82.119L79.0633 48.0688H78.9256L75.7854 40.8291H75.7832Z"
                fill="white"
              />
              <path
                d="M84.4883 44.411C84.4883 42.2724 86.1316 40.7334 88.1881 40.7334C90.2445 40.7334 91.8768 42.2724 91.8768 44.411C91.8768 46.5496 90.2334 48.0886 88.1881 48.0886C86.1427 48.0886 84.4883 46.5496 84.4883 44.411ZM90.7375 44.411C90.7375 42.8831 89.6826 41.735 88.1881 41.735C86.6935 41.735 85.6275 42.8831 85.6275 44.411C85.6275 45.9389 86.6913 47.087 88.1881 47.087C89.6849 47.087 90.7375 45.9389 90.7375 44.411Z"
                fill="white"
              />
              <path
                d="M95.3887 40.8291H96.5057V47.0161H99.8147V47.9955H95.3887V40.8291Z"
                fill="white"
              />
              <path
                d="M102.924 45.4772V40.8291H104.041V45.4128C104.041 46.572 104.609 47.0872 105.653 47.0872C106.697 47.0872 107.277 46.5698 107.277 45.4128V40.8291H108.382V45.4772C108.382 47.216 107.201 48.091 105.653 48.091C104.105 48.091 102.924 47.216 102.924 45.4772Z"
                fill="white"
              />
              <path
                d="M113.782 41.8085H111.652V40.8291H117.018V41.8085H114.888V47.9955H113.782V41.8085Z"
                fill="white"
              />
              <path
                d="M121.473 40.8291H120.367V47.9955H121.473V40.8291Z"
                fill="white"
              />
              <path
                d="M125.006 44.411C125.006 42.2724 126.649 40.7334 128.706 40.7334C130.762 40.7334 132.394 42.2724 132.394 44.411C132.394 46.5496 130.751 48.0886 128.706 48.0886C126.66 48.0886 125.006 46.5496 125.006 44.411ZM131.255 44.411C131.255 42.8831 130.2 41.735 128.706 41.735C127.211 41.735 126.145 42.8831 126.145 44.411C126.145 45.9389 127.209 47.087 128.706 47.087C130.202 47.087 131.255 45.9389 131.255 44.411Z"
                fill="white"
              />
              <path
                d="M137.539 43.8116C137.255 43.5052 136.864 43.0099 136.864 43.0099C136.864 43.0099 136.937 43.6007 136.937 44.0426V47.9955H135.904V40.7559H136.051L140.004 45.002C140.277 45.2973 140.668 45.8037 140.668 45.8037C140.668 45.8037 140.595 45.1707 140.595 44.771V40.8291H141.627V48.0688H141.49L137.539 43.8116Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_82_987">
                <rect width="142" height="48.0906" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="mt-4">
          Elevate Your Style with Personalized Fashion Services
        </p>
        <ul className="flex gap-4 justify-center mt-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100081644726340"
              target="_blank"
            >
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0299 12.7542C25.0299 6.11359 19.6404 0.724121 12.9998 0.724121C6.3592 0.724121 0.969727 6.11359 0.969727 12.7542C0.969727 18.5768 5.10807 23.4249 10.5938 24.5437V16.3632H8.18777V12.7542H10.5938V9.74668C10.5938 7.42487 12.4825 5.53615 14.8043 5.53615H17.8118V9.14517H15.4058C14.7442 9.14517 14.2028 9.68653 14.2028 10.3482V12.7542H17.8118V16.3632H14.2028V24.7241C20.278 24.1226 25.0299 18.9978 25.0299 12.7542Z"
                  fill="#36B2F8"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/stylrev/" target="_blank">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.47827 24.1721C9.63027 24.5201 10.7943 24.7241 12.0303 24.7241C15.2129 24.7241 18.2651 23.4598 20.5156 21.2094C22.766 18.959 24.0303 15.9067 24.0303 12.7241C24.0303 11.1483 23.7199 9.58783 23.1168 8.13192C22.5138 6.67601 21.6299 5.35314 20.5156 4.23884C19.4013 3.12454 18.0784 2.24062 16.6225 1.63757C15.1666 1.03451 13.6061 0.724121 12.0303 0.724121C10.4544 0.724121 8.89398 1.03451 7.43807 1.63757C5.98216 2.24062 4.6593 3.12454 3.54499 4.23884C1.29456 6.48928 0.0302734 9.54152 0.0302734 12.7241C0.0302734 17.8241 3.23427 22.2041 7.75827 23.9321C7.65027 22.9961 7.54227 21.4481 7.75827 20.3801L9.13827 14.4521C9.13827 14.4521 8.79027 13.7561 8.79027 12.6521C8.79027 10.9961 9.82227 9.76012 10.9983 9.76012C12.0303 9.76012 12.5103 10.5161 12.5103 11.4881C12.5103 12.5201 11.8263 13.9961 11.4783 15.4121C11.2743 16.5881 12.1023 17.6201 13.3023 17.6201C15.4383 17.6201 17.0943 15.3401 17.0943 12.1241C17.0943 9.24412 15.0303 7.27612 12.0663 7.27612C8.68227 7.27612 6.69027 9.79612 6.69027 12.4481C6.69027 13.4801 7.02627 14.5241 7.57827 15.2081C7.68627 15.2801 7.68627 15.3761 7.65027 15.5561L7.30227 16.8641C7.30227 17.0681 7.17027 17.1401 6.96627 16.9961C5.43027 16.3241 4.54227 14.1401 4.54227 12.3761C4.54227 8.58412 7.23027 5.14012 12.4143 5.14012C16.5423 5.14012 19.7583 8.10412 19.7583 12.0401C19.7583 16.1681 17.2023 19.4801 13.5423 19.4801C12.3783 19.4801 11.2383 18.8561 10.8303 18.1241L10.0263 20.9681C9.75027 22.0001 8.99427 23.3801 8.47827 24.2081V24.1721Z"
                  fill="#36B2F8"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/stylrev/" target="_blank">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.0302734"
                  y="0.724121"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#36B2F8"
                />
                <path
                  d="M12.6473 6.72412C13.3222 6.72592 13.6648 6.72952 13.9606 6.73792L14.077 6.74212C14.2114 6.74692 14.344 6.75292 14.5042 6.76012C15.1426 6.79012 15.5782 6.89092 15.9604 7.03911C16.3564 7.19151 16.69 7.3979 17.0235 7.7309C17.3288 8.03073 17.5648 8.39356 17.7153 8.79407C17.8635 9.17626 17.9643 9.61185 17.9943 10.2508C18.0015 10.4104 18.0075 10.543 18.0123 10.678L18.0159 10.7944C18.0249 11.0896 18.0285 11.4322 18.0297 12.1072L18.0303 12.5548V13.3408C18.0318 13.7784 18.0272 14.216 18.0165 14.6535L18.0129 14.7699C18.0081 14.9049 18.0021 15.0375 17.9949 15.1971C17.9649 15.8361 17.8629 16.2711 17.7153 16.6539C17.5648 17.0544 17.3288 17.4172 17.0235 17.7171C16.7237 18.0223 16.3609 18.2584 15.9604 18.4088C15.5782 18.557 15.1426 18.6578 14.5042 18.6878L14.077 18.7058L13.9606 18.7094C13.6648 18.7178 13.3222 18.722 12.6473 18.7232L12.1997 18.7238H11.4143C10.9765 18.7254 10.5386 18.7208 10.1009 18.71L9.98452 18.7064C9.84209 18.701 9.69969 18.6948 9.55733 18.6878C8.91894 18.6578 8.48336 18.557 8.10056 18.4088C7.70027 18.2583 7.33765 18.0222 7.03799 17.7171C6.73256 17.4173 6.49627 17.0544 6.34561 16.6539C6.19741 16.2717 6.09661 15.8361 6.06661 15.1971L6.04861 14.7699L6.04561 14.6535C6.03455 14.216 6.02955 13.7784 6.03061 13.3408V12.1072C6.02895 11.6696 6.03335 11.2319 6.04381 10.7944L6.04801 10.678C6.05281 10.543 6.05881 10.4104 6.06601 10.2508C6.09601 9.61185 6.19681 9.17686 6.34501 8.79407C6.49602 8.3934 6.73273 8.03055 7.03859 7.7309C7.33808 7.42583 7.70049 7.18975 8.10056 7.03911C8.48336 6.89092 8.91834 6.79012 9.55733 6.76012C9.71693 6.75292 9.85012 6.74692 9.98452 6.74212L10.1009 6.73852C10.5384 6.72786 10.9761 6.72326 11.4137 6.72472L12.6473 6.72412ZM12.0305 9.72405C11.2348 9.72405 10.4718 10.0401 9.9092 10.6027C9.34661 11.1653 9.03054 11.9283 9.03054 12.724C9.03054 13.5196 9.34661 14.2826 9.9092 14.8452C10.4718 15.4078 11.2348 15.7239 12.0305 15.7239C12.8261 15.7239 13.5891 15.4078 14.1517 14.8452C14.7143 14.2826 15.0304 13.5196 15.0304 12.724C15.0304 11.9283 14.7143 11.1653 14.1517 10.6027C13.5891 10.0401 12.8261 9.72405 12.0305 9.72405ZM12.0305 10.924C12.2668 10.924 12.5009 10.9705 12.7193 11.0609C12.9377 11.1513 13.1361 11.2839 13.3033 11.451C13.4705 11.6181 13.6031 11.8165 13.6936 12.0349C13.7841 12.2533 13.8307 12.4873 13.8307 12.7237C13.8308 12.96 13.7842 13.1941 13.6938 13.4125C13.6034 13.6309 13.4709 13.8294 13.3037 13.9965C13.1366 14.1637 12.9382 14.2963 12.7199 14.3868C12.5015 14.4773 12.2674 14.5239 12.0311 14.5239C11.5537 14.5239 11.0959 14.3343 10.7583 13.9967C10.4208 13.6592 10.2311 13.2014 10.2311 12.724C10.2311 12.2466 10.4208 11.7888 10.7583 11.4512C11.0959 11.1137 11.5537 10.924 12.0311 10.924M15.181 8.82407C14.9821 8.82407 14.7913 8.90309 14.6507 9.04373C14.51 9.18438 14.431 9.37514 14.431 9.57405C14.431 9.77296 14.51 9.96372 14.6507 10.1044C14.7913 10.245 14.9821 10.324 15.181 10.324C15.3799 10.324 15.5707 10.245 15.7113 10.1044C15.852 9.96372 15.931 9.77296 15.931 9.57405C15.931 9.37514 15.852 9.18438 15.7113 9.04373C15.5707 8.90309 15.3799 8.82407 15.181 8.82407Z"
                  fill="#0D0D0D"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@stylrev3936/community"
              target="_blank"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.0302734"
                  y="0.724121"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#36B2F8"
                />
                <path
                  d="M18.8903 9.97089C18.8903 9.97089 18.7503 8.99089 18.3303 8.57089C17.8169 8.01089 17.2103 8.01089 16.9303 7.96422C14.9703 7.82422 12.0303 7.82422 12.0303 7.82422C12.0303 7.82422 9.09027 7.82422 7.13027 7.96422C6.85027 8.01089 6.24361 8.01089 5.73027 8.57089C5.31027 8.99089 5.17027 9.97089 5.17027 9.97089C5.17027 9.97089 5.03027 11.0909 5.03027 12.2109V13.2376C5.03027 14.3576 5.17027 15.5242 5.17027 15.5242C5.17027 15.5242 5.31027 16.5042 5.73027 16.9242C6.24361 17.4842 6.94361 17.4842 7.27027 17.5309C8.39027 17.5776 12.0303 17.6242 12.0303 17.6242C12.0303 17.6242 14.9703 17.6242 16.9303 17.4842C17.2103 17.4376 17.8169 17.4376 18.3303 16.8776C18.7503 16.4576 18.8903 15.4776 18.8903 15.4776C18.8903 15.4776 19.0303 14.3576 19.0303 13.2376V12.2109C19.0303 11.0909 18.8903 9.97089 18.8903 9.97089ZM10.5836 14.5442V10.6242L14.3636 12.5842L10.5836 14.5442Z"
                  fill="#0D0D0D"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-12 py-6">
        Copyright ⓒ {new Date().getFullYear()}. All rights reserved by Stylrev.
      </p>
    </footer>
  );
}
