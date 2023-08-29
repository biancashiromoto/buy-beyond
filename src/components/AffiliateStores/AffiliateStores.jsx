import React, { useState } from 'react';
import { brands } from '../../helpers/brands';

const AffiliateStores = () => {
  const [stores, setStores] = useState(brands);
  return (
    <div id='affiliate-stores'>
      <h3 className='text-center'>AffiliateStores</h3>
      {stores.map((store, index) => {
       return (
        <a
          key={index}
          href={store.link}
          target='_blank'
          className={`store-link ${store}`} rel="noreferrer"
        >
          <img
            className='w-25'
            src={store.logo} 
            alt={store.name}
          />
        </a>
      )
      })}
    </div>
  )
}

export default AffiliateStores
