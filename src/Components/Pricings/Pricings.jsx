import React, { use } from 'react';
import PricingCard from '../PricingCards/PricingCard';


const Pricings = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData)

    return (
        <div>
            <h1 className='text-4xl'>Subscriptions</h1>
            <div className='flex justify-center md:p-10 gap-2 items-stretch'>
                {pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)}
            </div>
        </div>
    );
};

export default Pricings;