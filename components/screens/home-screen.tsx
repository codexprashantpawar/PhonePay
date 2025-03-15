// "use client"

// import { useState, useEffect } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMobileAlt, faUniversity, faWallet } from "@fortawesome/free-solid-svg-icons";
// import {
//   Smartphone,
//   Tv,
//   Zap,
//   Droplet,
//   CreditCard,
//   ArrowUpRight,
//   ArrowDownLeft,
//   QrCode,
//   Bell,
//   Repeat,
//   Home,
//   Landmark,
//   Train,
//   Plane,
//   Car,
//   Wifi,
//   Gamepad2,
//   Ticket,
// } from "lucide-react"
// import type { PaymentType } from "../phonepe-app"
// import styles from "./home-screen.module.css"

// interface HomeScreenProps {
//   onPaymentSelect: (type: PaymentType) => void
// }

// export default function HomeScreen({ onPaymentSelect }: HomeScreenProps) {
//   const [animateBalance, setAnimateBalance] = useState(false)
//   const [animateServices, setAnimateServices] = useState(false)

//   useEffect(() => {
  
//     setTimeout(() => setAnimateBalance(true), 300)
//     setTimeout(() => setAnimateServices(true), 600)
//   }, [])

//   return (
//     <div className={styles.homeScreen}>
//       <div className={styles.header}>
//         <div className={styles.userInfo}>
//           <div className={styles.avatar}>PP</div>
//           <div className={styles.userName}>Prashant Pawar</div>
//         </div>
//         <div className={styles.headerIcons}>
//           <div className={styles.iconBadge}>
//             <Bell size={22} />
//             <span className={styles.badge}>2</span>
//           </div>
//           <QrCode size={22} />
//         </div>
//       </div>

//       {/* <div className={`${styles.balanceCard} ${animateBalance ? styles.animateIn : ""}`}>
//         <div className={styles.balanceInfo}>
//           <div className={styles.balanceLabel}>PhonePe Balance</div>
//           <div className={styles.balanceAmount}>₹1,005,556.50</div>
//         </div>
//         <div className={styles.balanceActions}>
//           <div className={styles.actionButton}>
//             <div className={styles.actionIcon}>
//               <ArrowUpRight size={18} />
//             </div>
//             <span>Add Money</span>
//           </div>
//           <div className={styles.actionButton}>
//             <div className={styles.actionIcon}>
//               <ArrowDownLeft size={18} />
//             </div>
//             <span>Send Money</span>
//           </div>
//         </div>
//       </div> */}



// <div className={`${styles.balanceCard} ${animateBalance ? styles.animateIn : ""}`}>
//   <div className={styles.balanceInfo}>
//     <div className={styles.balanceLabel}>PhonePe Balance</div>
//     <div className={styles.balanceAmount}>₹1,005,556.50</div>
//   </div>

//   <div className={styles.balanceActions}>
//     <div className={styles.actionButton}>
//       <div className={styles.actionIcon}>
//         <FontAwesomeIcon icon={faMobileAlt} size="lg" />
//       </div>
//       <span>To Mobile Number</span>
//     </div>
//     <div className={styles.actionButton}>
//       <div className={styles.actionIcon}>
//         <FontAwesomeIcon icon={faUniversity} size="lg" />
//       </div>
//       <span>To Bank Account</span>
//     </div>
//     <div className={styles.actionButton}>
//       <div className={styles.actionIcon}>
//         <FontAwesomeIcon icon={faWallet} size="lg" />
//       </div>
//       <span>Check Balance</span>
//     </div>
//   </div>
// </div>;

//       <div className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}>
//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Recharge & Pay Bills</h3>
//           <span className={styles.seeAll}>See All</span>
//         </div>

//         <div className={styles.servicesGrid}>
//           <div className={styles.serviceItem} onClick={() => onPaymentSelect("mobile")}>
//             <div className={styles.serviceIcon}>
//               <Smartphone size={24} />
//             </div>
//             <span>
//               Mobile
//               <br />
//               Recharge
//             </span>
//           </div>
//           <div className={styles.serviceItem} onClick={() => onPaymentSelect("dth")}>
//             <div className={styles.serviceIcon}>
//               <Tv size={24} />
//             </div>
//             <span>DTH</span>
//           </div>
//           <div className={styles.serviceItem} onClick={() => onPaymentSelect("electricity")}>
//             <div className={styles.serviceIcon}>
//               <Zap size={24} />
//             </div>
//             <span>Electricity</span>
//           </div>
//           <div className={styles.serviceItem} onClick={() => onPaymentSelect("water")}>
//             <div className={styles.serviceIcon}>
//               <Droplet size={24} />
//             </div>
//             <span>Water</span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <CreditCard size={24} />
//             </div>
//             <span>
//               Credit
//               <br />
//               Card
//             </span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Repeat size={24} />
//             </div>
//             <span>
//               Rent
//               <br />
//               Payment
//             </span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Home size={24} />
//             </div>
//             <span>
//               Loan
//               <br />
//               Repayment
//             </span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Landmark size={24} />
//             </div>
//             <span>Insurance</span>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
//         style={{ animationDelay: "0.1s" }}
//       >
//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Travel Bookings</h3>
//           <span className={styles.seeAll}>See All</span>
//         </div>

//         <div className={styles.servicesGrid}>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Train size={24} />
//             </div>
//             <span>Trains</span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Plane size={24} />
//             </div>
//             <span>Flights</span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Car size={24} />
//             </div>
//             <span>Bus</span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Wifi size={24} />
//             </div>
//             <span>Hotels</span>
//           </div>
//         </div>
//       </div>

//       {/* <div
//         className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
//         style={{ animationDelay: "0.2s" }}
//       >
//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Sponsored Links</h3>
//         </div>

//         <div className={styles.sponsoredBanner}>
//           <img src="/placeholder.svg?height=120&width=400" alt="Sponsored Banner" className={styles.bannerImage} />
//         </div>
//       </div> */}

//       <div
//         className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
//         style={{ animationDelay: "0.3s" }}
//       >
//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Entertainment</h3>
//           <span className={styles.seeAll}>See All</span>
//         </div>

//         <div className={styles.servicesGrid}>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Gamepad2 size={24} />
//             </div>
//             <span>Games</span>
//           </div>
//           <div className={styles.serviceItem}>
//             <div className={styles.serviceIcon}>
//               <Ticket size={24} />
//             </div>
//             <span>Movies</span>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
//         style={{ animationDelay: "0.4s" }}
//       >
//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Recent Transactions</h3>
//           <span className={styles.seeAll}>See All</span>
//         </div>

//         <div className={styles.transactions}>
//           <div className={styles.transaction}>
//             <div className={styles.transactionIcon}>
//               <Zap size={20} />
//             </div>
//             <div className={styles.transactionInfo}>
//               <div className={styles.transactionName}>Electricity Bill</div>
//               <div className={styles.transactionDate}>22 Mar 2024</div>
//             </div>
//             <div className={styles.transactionAmount}>-₹1,450</div>
//           </div>
//           <div className={styles.transaction}>
//             <div className={styles.transactionIcon}>
//               <Smartphone size={20} />
//             </div>
//             <div className={styles.transactionInfo}>
//               <div className={styles.transactionName}>Mobile Recharge</div>
//               <div className={styles.transactionDate}>18 Mar 2024</div>
//             </div>
//             <div className={styles.transactionAmount}>-₹499</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




//new code



"use client"

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faUniversity, faWallet } from "@fortawesome/free-solid-svg-icons";
import {
  Smartphone, Tv, Zap, Droplet, CreditCard, ArrowUpRight, ArrowDownLeft,
  QrCode, Bell, Repeat, Home, Landmark, Train, Plane, Car, Wifi,
  Gamepad2, Ticket
} from "lucide-react"
import type { PaymentType } from "../phonepe-app"
import styles from "./home-screen.module.css"

interface HomeScreenProps {
  onPaymentSelect: (type: PaymentType) => void
}

export default function HomeScreen({ onPaymentSelect }: HomeScreenProps) {
  const [animateBalance, setAnimateBalance] = useState(false);
  const [animateServices, setAnimateServices] = useState(false);
  const [showBankBalance, setShowBankBalance] = useState(false); 

  useEffect(() => {
    setTimeout(() => setAnimateBalance(true), 300);
    setTimeout(() => setAnimateServices(true), 600);
  }, []);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>PP</div>
          <div className={styles.userName}>Prashant Pawar</div>
        </div>
        <div className={styles.headerIcons}>
          <div className={styles.iconBadge}>
            <Bell size={22} />
            <span className={styles.badge}>2</span>
          </div>
          <QrCode size={22} />
        </div>
      </div>

      {/* Balance Section */}
      <div className={`${styles.balanceCard} ${animateBalance ? styles.animateIn : ""}`}>
        {/* <div className={styles.balanceInfo}>
          <div className={styles.balanceLabel}>PhonePe Balance</div>
          <div className={styles.balanceAmount}>₹1,005,556.50</div>
        </div> */}

        {/* Show Bank Account Balance on Check Balance Click */}
        {showBankBalance && (
          <div className={styles.bankBalance}>
            <div className={styles.balanceLabel}>Cosmos Bank Account</div>
            <div className={styles.balanceAmount}>XXXX XXXX 7819</div>
            <div className={styles.balanceAmount}>₹1,005,556.50</div>
          </div>
        )}

        <div className={styles.balanceActions}>
          <div className={styles.actionButton}>
            <div className={styles.actionIcon}>
              <FontAwesomeIcon icon={faMobileAlt} size="lg" />
            </div>
            <span>To Mobile Number</span>
          </div>
          <div className={styles.actionButton}>
            <div className={styles.actionIcon}>
              <FontAwesomeIcon icon={faUniversity} size="lg" />
            </div>
            <span>To Bank Account</span>
          </div>
          <div className={styles.actionButton} onClick={() => setShowBankBalance(true)}>
            <div className={styles.actionIcon}>
              <FontAwesomeIcon icon={faWallet} size="lg" />
            </div>
            <span>Check Balance</span>
          </div>
        </div>
      </div>

      {/* Recharge & Pay Bills */}
      <div className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Recharge & Pay Bills</h3>
          <span className={styles.seeAll}>See All</span>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem} onClick={() => onPaymentSelect("mobile")}>
            <div className={styles.serviceIcon}>
              <Smartphone size={24} />
            </div>
            <span>
              Mobile
              <br />
              Recharge
            </span>
          </div>
          <div className={styles.serviceItem} onClick={() => onPaymentSelect("dth")}>
            <div className={styles.serviceIcon}>
              <Tv size={24} />
            </div>
            <span>DTH</span>
          </div>
          <div className={styles.serviceItem} onClick={() => onPaymentSelect("electricity")}>
            <div className={styles.serviceIcon}>
              <Zap size={24} />
            </div>
            <span>Electricity</span>
          </div>
          <div className={styles.serviceItem} onClick={() => onPaymentSelect("water")}>
            <div className={styles.serviceIcon}>
              <Droplet size={24} />
            </div>
            <span>Water</span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <CreditCard size={24} />
            </div>
            <span>
              Credit
              <br />
              Card
            </span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Repeat size={24} />
            </div>
            <span>
              Rent
              <br />
              Payment
            </span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Home size={24} />
            </div>
            <span>
              Loan
              <br />
              Repayment
            </span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Landmark size={24} />
            </div>
            <span>Insurance</span>
          </div>
        </div>
      </div>

      <div
        className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
        style={{ animationDelay: "0.1s" }}
      >
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Travel Bookings</h3>
          <span className={styles.seeAll}>See All</span>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Train size={24} />
            </div>
            <span>Trains</span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Plane size={24} />
            </div>
            <span>Flights</span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Car size={24} />
            </div>
            <span>Bus</span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Wifi size={24} />
            </div>
            <span>Hotels</span>
          </div>
        </div>
      </div>

      {/* <div
        className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Sponsored Links</h3>
        </div>

        <div className={styles.sponsoredBanner}>
          <img src="/placeholder.svg?height=120&width=400" alt="Sponsored Banner" className={styles.bannerImage} />
        </div>
      </div> */}

      <div
        className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Entertainment</h3>
          <span className={styles.seeAll}>See All</span>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Gamepad2 size={24} />
            </div>
            <span>Games</span>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <Ticket size={24} />
            </div>
            <span>Movies</span>
          </div>
        </div>
      </div>

      <div
  className={`${styles.section} ${animateServices ? styles.animateIn : ""}`}
  style={{ animationDelay: "0.4s" }}
>
  <div className={styles.sectionHeader}>
    <h3 className={styles.sectionTitle}>Recent Transactions</h3>
    <span className={styles.seeAll}>See All</span>
  </div>

  <div className={styles.transactions}>
    <div className={styles.transaction}>
      <div className={styles.transactionIcon}>
        <Zap size={20} />
      </div>
      <div className={styles.transactionInfo}>
        <div className={styles.transactionName}>Electricity Bill</div>
        <div className={styles.transactionDate}>22 Mar 2024</div>
      </div>
      <div className={styles.transactionAmount}>-₹1,450</div>
    </div>
    <div className={styles.transaction}>
      <div className={styles.transactionIcon}>
        <Smartphone size={20} />
      </div>
      <div className={styles.transactionInfo}>
        <div className={styles.transactionName}>Mobile Recharge</div>
        <div className={styles.transactionDate}>18 Mar 2024</div>
      </div>
      <div className={styles.transactionAmount}>-₹499</div>
    </div>
  </div>
</div>

    </div>
  );
}
