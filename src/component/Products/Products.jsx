import React from 'react';

import styles from '../../styles/Products.module.css'
import {Link} from "react-router-dom";

const Products = (props) => {
    const {title,style={}, products = [],amount} = props
    const list=products.filter((_,i)=>i<amount)
    console.log(list.images)

    return (
      <section className={styles.products} style={style}>
          {title && <h2>{title}</h2>}
          <div className={styles.list}>
              {list.map(({id, images, title, category: {name: cat}, price}) => (
                <Link
                  draggable={'false'}
                  className={styles.product}
                  to={`/products/${id}`}
                  key={id}>
                    <div className={styles.image}
                         style={{backgroundImage:`url(${images[0]})`}}>
                    </div>

                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.cat}>{cat}</div>
                        <div className={styles.info}>
                            <div className={styles.price}>{price}</div>
                            {price>0? <div className={styles.oldPrice}>{Math.floor(price*1.3)}$</div>:null }
                        </div>

                        <div className={styles.purchases}>{Math.floor(Math.random()*20+1)} purchased</div>
                    </div>
                </Link>
              ))}
          </div>
      </section>
    );
};

export default Products;
