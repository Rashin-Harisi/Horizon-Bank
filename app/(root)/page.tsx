import BalanceBox from "@/components/BalanceBox"
import BoxTitle from "@/components/BoxTitle"
import RightSidebar from "@/components/RightSidebar"


const Home = () => {
  const loggedIn = { firstName: "Rashin", lastName:"Harisi", email:"rashin@gmail.com"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <BoxTitle
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <BalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent transactions 
      </div>
      <RightSidebar user={loggedIn} 
        banks={[{currentBalance : 123.50},{currentBalance:500.50}]} 
        transactions={[]} />
    </section>
  )
}

export default Home