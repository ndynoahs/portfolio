import "./product.css"
const Product = ({img, link, alt}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div> 
            </div>
            <div className="p-content">
                <a href={link} target="_blank" rel="noreferrer" >
                    <img src={img} alt={alt} className="p-img" /> 
                </a>
                <div className="p-content-text">
                    <p>Xtreme character is an amazing site</p>
                </div>
            </div>
        </div>
    )
}

export default Product
