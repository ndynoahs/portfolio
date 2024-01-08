import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & inspire. It's Kings</h1>
                <p className="pl-desc">
                    Kingsley is a Creative developer that your project or company has been waiting for.
                    I build colorful and amazing websites with responsive designs.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
               
            </div>
        </div>
    )
}

export default ProductList
