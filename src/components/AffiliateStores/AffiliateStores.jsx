import { useState } from 'react';
import { brands } from '../../helpers/brands';
import './AffiliateStores.css';

const AffiliateStores = () => {
  const [stores] = useState(brands);
  return (
    <div id='affiliate-stores' className='d-flex flex-column mx-4'>
      <h2 className='text-center'>Lojas parceiras</h2>
      <span className='text-center'>Explore as marcas que recomendamos para você</span>
      <div className='brands-container'>
        {stores.map((store, index) => {
          return (
            <a
              key={index}
              href={store.link}
              target='_blank'
              className={`store-link ${store.name}`} rel="noreferrer"
            >
              <img
                loading='lazy'
                src={store.logo} 
                alt={store.name}
              />
            </a>
          )
          })}
      </div>
    </div>
  )
}

export default AffiliateStores
