import BoxTitle from '@/components/BoxTitle'
import Category from '@/components/Category';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { countTransactionCategories } from '@/lib/utils';
import React from 'react'

const TopCategory = async ({ searchParams: { id } }: SearchParamProps) => {

    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({
        userId: loggedIn.$id
    })

    if (!accounts) return;

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    const account = await getAccount({ appwriteItemId })
    const categories: CategoryCount[] = countTransactionCategories(account?.transactions)

    return (
        <section className='topCategory'>
            <BoxTitle title='Top Category' subtext='Effortlessly monitor your activities.' />
            <div className='space-y-5 max-w-[500px]'>
                {categories.map((category) => (
                    <Category key={category.name} category={category} />
                ))}
            </div>

        </section>
    )
}

export default TopCategory