import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = (props) => {
    console.log(props);
    return (
        <article className="product-card">
            <div className="product-card__image" aria-hidden="true">
                <img src={props.image} alt="" />
            </div>

            <div className="product-card__content">
                <p className="product-card__tag">New Arrival</p>
                <h2 className="product-card__title">{props.title}</h2>
                <p className="product-card__description">
                    {props.description}
                </p>

                <div className="product-card__footer">
                    <span className="product-card__price">{props.price}</span>
                    <button className="product-card__button" type="button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard