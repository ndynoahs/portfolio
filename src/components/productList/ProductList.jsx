import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Each project is a unique piece of development 🧩</h1>
                <p className="pl-desc">
                    Kingsley is a Creative developer that your project or company has been waiting for.
                    I build colorful and amazing websites with responsive designs.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.imgSrc} link={item.link} alt={item.alt}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList
