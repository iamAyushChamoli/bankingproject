import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find A Better Card Deal<br className='sm:block hidden'/>
        in a few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio est alias ab dolore dignissimos vel ea nihil minus quos!
      </p>
      <Button styles='mt-10 radius-[10px]'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]  ' />
    </div>
  </section>
)
export default CardDeal