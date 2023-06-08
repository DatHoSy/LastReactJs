import styled from "styled-components";
import { ReactComponent as SearchIcon } from 'assets/img/searchIcon.svg';
import { ReactComponent as Favorite } from 'assets/img/favorite.svg';
import product1 from 'assets/img/product1.svg';
import product2 from 'assets/img/product2.svg';
import product3 from 'assets/img/product3.svg';
import product4 from 'assets/img/product4.svg';
import product5 from 'assets/img/product5.svg';
import product6 from 'assets/img/product6.svg';
import product7 from 'assets/img/product7.svg';
import product8 from 'assets/img/product8.svg';
import category1 from 'assets/img/category1.svg';
import category2 from 'assets/img/category2.svg';
import category3 from 'assets/img/category3.svg';
import category4 from 'assets/img/category4.svg';
import category5 from 'assets/img/category5.svg';
import { Button } from "components/Button/Button";

const StyleCardPro = styled.div`
    div.card {
        display: flex;
        flex-direction: column;
    }
    > div:hover .addToCart {
        visibility: visible;
    }
    .imgProd {
        position: relative;
    }
    .title {
        margin: 10px 10px;
        font-size: 16px;
        line-height: 22px;
    }
    .price {
        margin: 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .price >span:first-child {
        font-size: 16px;
        line-height: 22px;
        opacity: 0.5;
    }
    span.discount {
        position: absolute;
        background-color: ${props => (props.priceSale ? 'black' : 'red')};
        color: white;
        width: 52px;
        height: 24px;
        text-align: center;
        top: 25px;
    }
    .priceSale {
        margin-left: ${props => (props.priceSale ? '15px' : '0px')};
        color: red;
    }
    .priceCurrent {
        text-decoration-line: ${props => (props.priceSale ? 'line-through' : 'none')};
    }

    .addToCart {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: -webkit-fill-available;
        bottom: 4px;
        background-color: black;
        height: 45px;
        color: white;
        padding: 0 10px;
        visibility: hidden;
    }
    .addToCart div:last-child {
        display: flex;
        align-items: center;
    }
    svg {
        margin-right: 10px;
        width: 20px;
        height: 20px;
        path {
            fill: white;
        }
    }
    .addToCart:hover {
        button {
            color: #ff5100;
        }
        button svg {
            path {
                fill: #ff5100;
            }
        }
    }
`

export const CardPro = ({ imgNumber, title, category, price, priceSale, isHot, pupolar}) => {
    const proImgList = [product1, product2, product3, product4, product5, product6, product7, product8, category1, category2, category3, category4, category5];
    return (
        <StyleCardPro priceSale={priceSale}>
            <div className="card">
                <div className="imgProd">
                    {priceSale && <span className="discount">SALE</span>}
                    {isHot && <span className="discount">HOT</span>}
                    <img src={proImgList[imgNumber]} alt="productImg" />
                    {pupolar ? <div className="addToCart">
                        <div>
                            {pupolar}
                        </div>
                        <div>
                            <Button text={'124 Product'} bgColor={'transparent'} height={'30px'} width={'130px'} textColor={'white'} lHeight={'10px'} fSize={'15px'}></Button>
                        </div>
                    </div>
                    :
                    <div className="addToCart">
                        <div>
                            <Favorite />
                            <SearchIcon />
                        </div>
                        <div>
                            <Button isIcon={true} text={'Shop Now'} bgColor={'transparent'} height={'30px'} width={'130px'} textColor={'white'} lHeight={'10px'} fSize={'12px'}></Button>
                        </div>
                    </div>
                    }
                </div>
                {title && <h6 className="title">{title}</h6>}
                {price && <div className="price">
                    <span>{category}</span>
                    <span>
                        <span className="priceCurrent">${price}</span>
                        <span className="priceSale">{priceSale && ('$' + priceSale)}</span>
                    </span>
                </div>}
            </div>
        </StyleCardPro>
    )
}