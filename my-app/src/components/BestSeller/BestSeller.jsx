import { CardPro } from "components/CardPro/CardPro";
import { NavContent } from "components/NavContent/NavContent";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as SliderArrow } from 'assets/img/slider_arrow.svg';
import styled from "styled-components";

const StyleBestSeller = styled.div`
    width: ${props => props.width};
    h2 {
        text-align: center;
        font-size: 50px;
        line-height: 59px;
    }
    .carousel {
        position: relative;
        overflow: hidden;
    }

    div.carousel > div:first-child + a {
        transform: rotateY(180deg);
    }

    .productSale {
        display: flex;
        justify-content: space-between;
        gap: 24px;
    }
   

    /* Next & previous buttons */
    .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 37%;
    width: auto;
    /* padding: 16px; */
    margin-top: -22px;
    color: black;
    font-weight: bold;
    font-size: 45px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    }
    .prev {
        margin-left: 10px;
    }
    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
        margin-right: 10px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
    background-color: #F0F0F0;
    }
`
export const BestSeller = ({ width }) => {
    const TOTAL_SLIDES = 5;
    const [current, setCurrent] = useState(3);
    const ref = useRef(null);
    const isPhone = useMediaQuery({ query: '(max-width: 425px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });
    
    const next = () => {
        if (current >= TOTAL_SLIDES) return
        else setCurrent(current + 1)
    }

    const prev = () => {
        if (current === 3) return
        else setCurrent(current - 1)
    }

    useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out';
        let percent = 0;
        
        switch (true) {
            case isPhone:
                percent = 215;
                break;
            case isTablet:
                percent = 195;
                //257
                break;
            case isLaptop:
                percent = 255;
                break;
            default:
                percent = 336;
                break;
        }
        let traslate = (current - 3) * percent;
        ref.current.style.transform = `translateX(-${traslate}px)`;
    }, [current]);
    return (
        <StyleBestSeller width={width}>
            <h2>Best sellers</h2>
            <NavContent></NavContent>
            <div className="carousel">
                <div ref={ref} className="productSale">
                    <div id="0">
                        <CardPro imgNumber={4} title={'Basic Dress Green'} category={'Dress'} price={63.85} isHot={true}></CardPro>
                    </div>
                    <div id="1">
                        <CardPro imgNumber={1} title={'Nike Sportswear Futura Luxe'} category={'Bag'} price={130.00}></CardPro>
                    </div>
                    <div id="2">
                        <CardPro imgNumber={3} title={'Yellow Reserved Hoodie'} category={'Dress'} price={63.85} priceSale={52.77}></CardPro>
                    </div>
                    <div id="3">
                        <CardPro imgNumber={5} title={'Nike Air Zoom Pegasus'} category={'Dress'} price={120.50} priceSale={98.77}></CardPro>
                    </div>
                    <div id="4">
                        <CardPro imgNumber={3} title={'Nike Air Zoom Pegasus'} category={'Dress'} price={120.50} priceSale={98.77}></CardPro>
                    </div>
                    <div id="5">
                        <CardPro imgNumber={1} title={'Nike Air Zoom Pegasus'} category={'Dress'} price={120.50} priceSale={98.77}></CardPro>
                    </div>
                </div>
                <a className="prev" onClick={() => prev()}><SliderArrow /></a>
                <a className="next" onClick={() => next()}><SliderArrow /></a>
            </div>
        </StyleBestSeller>
    )
}