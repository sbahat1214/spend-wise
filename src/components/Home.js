import React, {useState} from 'react'
import TopBanner from './TopBanner'
import img1 from '../assets/images/HeroImage_Spendwise.png'
import Title from './Title'
import img2 from '../assets/images/ExpenseByCategory_Transparent.png'
import SecBanner from './SecBanner'
import img3 from '../assets/images/UpcomingTransactionsRounded.png'
import img4 from '../assets/images/Debts2.png'
import img5 from '../assets/images/Budgets_White_Rounded.png'
import ThirdBanner from './ThirdBanner'
import img6 from '../assets/images/iphonex_cropped.png'
import img7 from '../assets/images/iMac_Spendwise.png'
import Cards from './Cards'

import FAQs from './FAQs'
import Footer from './Footer'


const Home = () => {
    const [listItems] = useState([
        "Try it out for 60 days for free",
        'No credit card information required',
        "Cancel your account any time if you didn't like Spendwise",
        "Access to all features and to the mobile app (when it is released)"
    ])
    return (
        <div>
            <TopBanner src={img1} alt={img1} title="Spending Wisely!"
            subTitle="Spendwise helps you manage your finances, the better way."
            btnName="Start yout 60 days free trial"
            height={{height:'80vh'}} />
            <Title
            title="Meet Spendwise"
            subTitle="Spendwise is a complete 
            finance management tool that helps you 
            track your incomes, expenses, debts, budgets and more!" />
            <TopBanner title="Track your expenses"
            subTitle="Managing your daily transactions is 
            now easier with Spendwise. Organising them into 
            categories shows you where your money goes."
            btnName={false}
            src={img2} alt={img2} />
            <SecBanner title="Schedule Transactions"
            subTitle="You can now schedule your transactions 
            and avoid entering payments that repeat periodically. 
            Spendwise also makes it easier to track all your upcoming bills."
            src={img3}
            alt={img3}
             />
             <TopBanner
             title="Manage Debts"
             subTitle="Knock down your debts 
             by taking a deep look into how much 
             you owe. Spendwise helps you do just that!"
             src={img4}
             alt={img4} />
             <SecBanner title="Smart Budgets" 
             subTitle="Budgets are a great way 
             to make sure you are spending only what 
             you can afford. Spend less using Spendwise's budgets."
             src={img5}
             alt={img5} />

             <Title title="Clean and easy to use"
             subTitle="Spendwise is easy to use with 
             its clean and intuitive UI which works well in all devices." />

             <ThirdBanner
             src={img6} alt={img6}
             src1={img7} alt1={img7}
              />

             <Title title="Pricing" />

             <Cards title="Free Trial"
             price="0"
             days="for 60 days"
             list={listItems} 
             background={{background:'#0181f6', color:'white'}}
             btnName="Start your 60 days trial now!"
             />
             <Title title="FAQs" /> 
             <FAQs title="Title Here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget."
            // width={{width:'90vh'}}
            btnName="Start your 60 days trial now!" />

            <Footer />
        </div>
    )
}

export default Home
