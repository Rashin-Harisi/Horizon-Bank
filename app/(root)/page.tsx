import BalanceBox from "@/components/BalanceBox"
import BoxTitle from "@/components/BoxTitle"
import RecentTransactions from "@/components/RecentTransactions"
import RightSidebar from "@/components/RightSidebar"
import { getAccount, getAccounts } from "@/lib/actions/bank.actions"
import { getLoggedInUser } from "@/lib/actions/user.action"


const Home = async({searchParams: {id,page}}:SearchParamProps) => {

  const currentPage = Number(page as string) || 1
  const loggedIn = await getLoggedInUser()
  //console.log("loggedIn",loggedIn);
  
  const accounts = await getAccounts({userId:loggedIn?.$id})
  if(!accounts) return;
  
  const accountData= accounts?.data
  const appwriteItemId =(id as string) || accountData[0]?.appwriteItemId
  const account = await getAccount({appwriteItemId});

  
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
            accounts={accountData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions  accounts={accountData} 
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
          />
      </div>
      <RightSidebar user={loggedIn} 
        banks={accountData?.slice(0,2)} 
        transactions={account?.transactions} />
    </section>
  )
}

export default Home