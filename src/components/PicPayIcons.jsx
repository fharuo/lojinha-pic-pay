/* Ícones do app PicPay, redesenhados a partir dos renders em .figma-ref/pix-flow. */

export const PicPayWordmark = ({ height = 56 }) => (
  <svg
    viewBox="0 0 210 69"
    height={height}
    width={height * (210 / 69)}
    fill="none"
    role="img"
    aria-label="PicPay"
  >
    <path
      d="M43.1855 55.7175H53.0081V26.565H43.1855V55.7175ZM56.3952 6.7275H49.7903V13.455H56.3952V6.7275ZM19.3064 10.005H9.82258V18.4575H18.629C24.2177 18.4575 27.4355 21.2175 27.4355 26.3925C27.4355 31.5675 24.2177 34.5 18.629 34.5H9.82258V18.63H0V55.7175H9.82258V42.9525H19.1371C30.4839 42.9525 37.0887 36.7425 37.0887 26.0475C37.0887 16.0425 30.6532 10.005 19.3064 10.005ZM63 0H43.1855V20.1825H63V0ZM59.7822 16.7325H46.5726V3.2775H59.7822V16.7325ZM117.363 10.005H108.387V18.4575H116.855C122.444 18.4575 125.661 21.2175 125.661 26.3925C125.661 31.5675 122.444 34.5 116.855 34.5H108.387V18.63H98.5645V55.7175H108.387V42.9525H117.363C128.71 42.9525 135.315 36.7425 135.315 26.0475C135.315 16.0425 128.71 10.005 117.363 10.005ZM199.839 20.7L191.371 42.435L182.903 20.7H172.742L186.29 55.7175L181.04 69H191.371L210 20.7H199.839ZM155.806 20.5275C149.879 20.5275 145.306 21.9075 140.226 24.495L143.274 31.395C146.831 29.325 150.387 28.29 153.605 28.29C158.347 28.29 160.718 30.36 160.718 34.155V34.845H151.234C142.766 34.845 138.194 38.8125 138.194 45.3675C138.194 51.75 142.597 56.235 150.048 56.235C154.79 56.235 158.177 54.51 160.887 51.5775V55.3725H170.54V32.6025C170.202 25.185 164.952 20.5275 155.806 20.5275ZM161.565 43.9875C160.548 46.92 157.669 49.335 153.605 49.335C150.218 49.335 148.185 47.61 148.185 44.85C148.185 42.09 150.048 40.8825 153.774 40.8825H161.565V43.9875ZM78.0726 48.1275C73.3306 48.1275 69.9435 44.3325 69.9435 38.64C69.9435 33.12 73.3306 29.325 78.0726 29.325C81.4597 29.325 84 30.705 85.8629 33.12L92.4677 28.29C89.4193 23.6325 84.1693 20.8725 77.5645 20.8725C67.2339 20.7 60.121 27.945 60.121 38.64C60.121 49.335 67.2339 56.4075 77.5645 56.4075C84.6774 56.4075 89.9274 53.475 92.8064 48.645L86.0323 43.9875C84.3387 46.7475 81.629 48.1275 78.0726 48.1275Z"
      fill="currentColor"
    />
  </svg>
)

export const PicPayGlyph = ({ size = 24, color = '#fff' }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M9 6h11.5a10 10 0 010 20H16v8H9V6zm7 6v8h4a4 4 0 000-8h-4z" fill={color} />
    <rect x="27" y="6" width="6" height="6" rx="1" fill={color} />
  </svg>
)

/* "P" oficial do PicPay, usado sozinho sobre selos coloridos (ex.: badge no QR Code). */
export const PicPaySymbol = ({ size = 24, color = '#fff' }) => (
  <svg viewBox="0 0 24 21" width={size} height={size * (21 / 24)} fill="none" aria-hidden="true">
    <path
      d="M7.70776 4.34473H4.48802V7.28669H7.57274C9.58484 7.28669 10.6575 8.23083 10.6575 9.9624C10.7056 10.767 10.3862 11.5503 9.78782 12.0949C9.18947 12.6396 8.37584 12.8877 7.57274 12.7703H4.48802V7.29424H1.00012V20.0006H4.48802V15.5801H7.70776C11.732 15.5801 14.0122 13.4406 14.0122 9.82833C13.8791 6.35009 11.5988 4.34473 7.70776 4.34473Z"
      fill={color}
    />
    <path
      d="M22.9998 1V7.9541H16.0242V1H22.9998ZM17.2283 2.2041V6.75098H21.7927V2.2041H17.2283Z"
      fill={color}
    />
    <rect x="18.3058" y="3.27344" width="2.28026" height="2.27351" fill={color} />
  </svg>
)

/* Selo oficial: badge verde com o "P" + wordmark "PicPay" abaixo. */
export const PicPayLockup = ({ width = 82, className }) => (
  <svg width={width} height={width * (93 / 82)} viewBox="0 0 82 93" fill="none" className={className} aria-hidden="true">
    <rect x="16.9697" width="48" height="48" rx="10" fill="#11C76F" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.2044 17.2051H32.5593V20.4419H36.0057C38.1916 20.4419 39.4336 21.5031 39.4336 23.4393C39.4336 25.4251 38.1916 26.5111 36.0057 26.5111H32.5593V20.4419H28.7127V34.6033H32.5593V29.748H36.2044C40.626 29.748 43.1596 27.3488 43.1596 23.3027C43.1596 19.4553 40.626 17.2051 36.2044 17.2051"
      fill="white"
    />
    <path
      d="M53.2267 21.1172H45.5011V13.3975H53.2267V21.1172ZM46.7901 19.8311H51.9405V14.6846H46.7901V19.8311ZM50.6505 15.9717V18.5449H48.0753V15.9717H50.6505Z"
      fill="white"
    />
    <g clipPath="url(#picpay-lockup-clip)">
      <path
        d="M17.4391 84.995H21.1782V74.01H17.4391V84.995ZM22.4676 66.535H19.9534V69.07H22.4676V66.535ZM8.34926 67.77H4.7391V70.955H8.09139C10.2188 70.955 11.4437 71.995 11.4437 73.945C11.4437 75.895 10.2188 77 8.09139 77H4.7391V71.02H1V84.995H4.7391V80.185H8.28479C12.6041 80.185 15.1183 77.845 15.1183 73.815C15.1183 70.045 12.6686 67.77 8.34926 67.77ZM24.9818 64H17.4391V71.605H24.9818V64ZM23.7569 70.305H18.7285V65.235H23.7569V70.305ZM45.6758 67.77H42.259V70.955H45.4824C47.6098 70.955 48.8347 71.995 48.8347 73.945C48.8347 75.895 47.6098 77 45.4824 77H42.259V71.02H38.5199V84.995H42.259V80.185H45.6758C49.9951 80.185 52.5093 77.845 52.5093 73.815C52.5093 70.045 49.9951 67.77 45.6758 67.77ZM77.0713 71.8L73.8479 79.99L70.6246 71.8H66.7565L71.9139 84.995L69.9154 90H73.8479L80.9393 71.8H77.0713ZM60.3098 71.735C58.0535 71.735 56.3128 72.255 54.3788 73.23L55.5392 75.83C56.8931 75.05 58.2469 74.66 59.4717 74.66C61.2768 74.66 62.1794 75.44 62.1794 76.87V77.13H58.5692C55.3458 77.13 53.6052 78.625 53.6052 81.095C53.6052 83.5 55.2814 85.19 58.1179 85.19C59.923 85.19 61.2124 84.54 62.2438 83.435V84.865H65.9185V76.285C65.7895 73.49 63.791 71.735 60.3098 71.735ZM62.5017 80.575C62.1149 81.68 61.0189 82.59 59.4717 82.59C58.1824 82.59 57.4088 81.94 57.4088 80.9C57.4088 79.86 58.1179 79.405 59.5362 79.405H62.5017V80.575ZM30.7194 82.135C28.9143 82.135 27.6249 80.705 27.6249 78.56C27.6249 76.48 28.9143 75.05 30.7194 75.05C32.0087 75.05 32.9757 75.57 33.6849 76.48L36.1991 74.66C35.0387 72.905 33.0402 71.865 30.526 71.865C26.5935 71.8 23.8859 74.53 23.8859 78.56C23.8859 82.59 26.5935 85.255 30.526 85.255C33.2336 85.255 35.2321 84.15 36.328 82.33L33.7493 80.575C33.1047 81.615 32.0732 82.135 30.7194 82.135Z"
        fill="#11C76F"
      />
    </g>
    <defs>
      <clipPath id="picpay-lockup-clip">
        <rect width="81.9393" height="29" fill="white" transform="translate(0 64)" />
      </clipPath>
    </defs>
  </svg>
)

export const FaceIdIcon = ({ size = 92 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} fill="none" aria-hidden="true">
    <g stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30V14a6 6 0 016-6h16" />
      <path d="M70 8h16a6 6 0 016 6v16" />
      <path d="M92 70v16a6 6 0 01-6 6H70" />
      <path d="M30 92H14a6 6 0 01-6-6V70" />
      <path d="M35 38v8M65 38v8" />
      <path d="M50 38v14a4 4 0 01-4 4" />
      <path d="M36 66a18 18 0 0028 0" />
    </g>
  </svg>
)

export const SearchIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const HelpIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.4 9.2a2.7 2.7 0 015.2 1c0 1.8-2.6 2.2-2.6 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17.2" r="1.05" fill="currentColor" />
  </svg>
)

export const ChatIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7a2.5 2.5 0 01-2.5 2.5H9l-5 4V6.5z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
  </svg>
)

export const BellIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M6 10a6 6 0 0112 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    <path d="M10 19a2 2 0 004 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

export const ChevronUp = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronRight = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronDown = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowLeft = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M19 12H5m0 0l6-6m-6 6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowRight = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const EyeOff = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M3 10c2.5 3.3 5.5 5 9 5s6.5-1.7 9-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M5 14.5L3.5 17M12 15.2V18M19 14.5l1.5 2.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

export const PixIcon = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" aria-hidden="true">
    <path
      d="M16 3.6l5 5-5 5-5-5 5-5zm-7.4 7.4l5 5-5 5-5-5 5-5zm14.8 0l5 5-5 5-5-5 5-5zM16 18.4l5 5-5 5-5-5 5-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

export const BarcodeIcon = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
    {[6, 9, 11, 15, 18, 21, 25].map((x, i) => (
      <rect key={x} x={x} y="9" width={i % 3 === 0 ? 2.4 : 1.3} height="14" fill="currentColor" />
    ))}
  </svg>
)

export const AddMoneyIcon = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="3.5" y="9.5" width="25" height="15" rx="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="17" r="3.4" stroke="currentColor" strokeWidth="2" />
    <path d="M24 4v7m0 0l-2.6-2.6M24 11l2.6-2.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const PiggyIcon = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" aria-hidden="true">
    <path
      d="M5 17.5c0-5 4.6-8 10.3-8 2.8 0 5.3.8 7.1 2.1l3.4-1.3-.6 3.7c1 1 1.6 2.2 1.8 3.5h1.5v4.5H27c-.7 1.4-1.9 2.6-3.4 3.4V27h-4v-1.2c-1.3.3-2.6.3-4 .3V27h-4v-1.4C7.2 24.3 5 21.2 5 17.5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="20.5" cy="16.5" r="1.1" fill="currentColor" />
  </svg>
)

export const WalletIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 32 24" width={size} height={size * 0.75} fill="none" aria-hidden="true">
    <rect x="1.1" y="1.1" width="29.8" height="21.8" rx="4" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="16" cy="12" r="3.4" stroke="currentColor" strokeWidth="2.2" />
  </svg>
)

export const CardIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="2.6" stroke="currentColor" strokeWidth="2" />
    <path d="M2.6 10h18.8" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const HandCoinIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="15.5" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.9" />
    <path d="M2.5 17.5l3-2.4a3 3 0 011.9-.6h3.4a1.7 1.7 0 010 3.4H8.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 17.9h3.2c.7 0 1.3-.2 1.8-.6l4-3.1" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BagIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M4.5 8h15l-1.2 11.2a1.6 1.6 0 01-1.6 1.4H7.3a1.6 1.6 0 01-1.6-1.4L4.5 8z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    <path d="M8.7 8V6.2a3.3 3.3 0 016.6 0V8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

export const HomeIcon = ({ size = 26 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M3.5 10.4L12 3.6l8.5 6.8V20a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9.6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

export const MenuIcon = ({ size = 26 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const QrIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="2" />
    <path d="M14 14h3v3h-3zM19 19h2v2h-2z" fill="currentColor" />
  </svg>
)

export const KeyboardIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="2.4" y="6.4" width="19.2" height="11.2" rx="2.4" stroke="currentColor" strokeWidth="1.9" />
    <path d="M6 10h.01M9.5 10h.01M13 10h.01M16.5 10h.01M8 13.6h8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

export const FlashOffIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M13 2.5L5.5 13H11l-1 8.5L18.5 11H13l0-8.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M3.5 3.5l17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const FileIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M6 3h7.5L19 8.5V21H6V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M13.2 3.2V9H19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

export const RotatePhoneIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="5" y="3.5" width="10" height="17" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M17.5 6.5a6 6 0 011.8 4.3m0 0l1.7-1.7m-1.7 1.7l-1.7-1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const DownloadIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ShareIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="18" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15.8 6.8l-7.6 3.9m0 2.6l7.6 3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const CheckBadge = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M7.5 12.4l3 3 6-6.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const AddCardIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="2.4" y="6" width="15" height="11" rx="2.4" stroke="currentColor" strokeWidth="1.9" />
    <path d="M2.4 10h15" stroke="currentColor" strokeWidth="1.9" />
    <path d="M19 14v6m-3-3h6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

/* Miniatura do PicPay Card: retângulo escuro com o "P" verde e os dois discos. */
export const CardThumb = ({ width = 40 }) => (
  <span
    className="pk__card-thumb"
    style={{ width, height: width * 0.75 }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 40 30" width={width} height={width * 0.75}>
      <path d="M6 5h6.5a4.5 4.5 0 010 9H10v6H6V5zm4 3.5v3h2.2a1.5 1.5 0 000-3H10z" fill="#11C76F" />
      <rect x="15.5" y="5" width="4" height="4" rx="0.8" fill="#11C76F" />
      <circle cx="13" cy="21.5" r="3.6" fill="#F2B90C" />
      <circle cx="18.4" cy="21.5" r="3.6" fill="#F05C22" />
    </svg>
  </span>
)

export const MastercardMark = ({ size = 34, className }) => (
  <svg
    viewBox="0 0 24 16"
    width={size}
    height={size * (16 / 24)}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <rect width="24" height="16" rx="1.66667" fill="black" />
    <path d="M14.2708 3.91455H9.72815V12.0784H14.2708V3.91455Z" fill="#FF5F00" />
    <path
      d="M10.0167 7.99706C10.0158 7.21071 10.1939 6.43448 10.5375 5.72714C10.881 5.01981 11.381 4.39991 11.9996 3.91441C11.2337 3.31249 10.3139 2.9382 9.34536 2.8343C8.3768 2.73041 7.39856 2.9011 6.52242 3.32687C5.64629 3.75265 4.90761 4.41632 4.39082 5.24204C3.87403 6.06777 3.59998 7.02223 3.59998 7.99634C3.59998 8.97045 3.87403 9.92492 4.39082 10.7506C4.90761 11.5764 5.64629 12.24 6.52242 12.6658C7.39856 13.0916 8.3768 13.2623 9.34536 13.1584C10.3139 13.0545 11.2337 12.6802 11.9996 12.0783C11.3812 11.5929 10.8813 10.9733 10.5378 10.2662C10.1943 9.55912 10.0161 8.78317 10.0167 7.99706Z"
      fill="#EB001B"
    />
    <path
      d="M20.4 7.99718C20.4 8.97136 20.1259 9.92588 19.609 10.7516C19.0921 11.5774 18.3533 12.2411 17.4771 12.6668C16.6008 13.0925 15.6225 13.2631 14.6539 13.159C13.6853 13.055 12.7655 12.6805 11.9996 12.0784C12.6178 11.5926 13.1175 10.9728 13.4611 10.2657C13.8048 9.55855 13.9833 8.78264 13.9833 7.99645C13.9833 7.21027 13.8048 6.43435 13.4611 5.72725C13.1175 5.02014 12.6178 4.40031 11.9996 3.91452C12.7655 3.31242 13.6853 2.93794 14.6539 2.8339C15.6225 2.72985 16.6008 2.90043 17.4771 3.32615C18.3533 3.75186 19.0921 4.41552 19.609 5.24127C20.1259 6.06703 20.4 7.02155 20.4 7.99573V7.99718Z"
      fill="#F79E1B"
    />
  </svg>
)
