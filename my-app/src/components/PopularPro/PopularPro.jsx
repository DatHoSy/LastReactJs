import styled from "styled-components";
import { Brand } from "components/Brand";
import { CardPro } from "components/CardPro/CardPro";

const StylePopular = styled.div`
    width: ${props => props.width};
    .category {
        position: relative;
        display: flex;
        gap: 24px;
    }
    .category > div:first-child {
        position: absolute;
        font-size: 34px;
        line-height: 40px;
        /* width: 648px; */
        height: 52px;
        bottom: 0;
        left: -50px;
        background: none;
        transform-origin: 0 0;
        transform: rotate(270deg);
    }
    .categoryRight {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .categoryRight div:first-child {
        display: flex;
        gap: 24px;
    }
    .categoryRight div:last-child {
        display: flex;
        gap: 24px;
    }
    .addToCart {
        bottom: 0;
    }
`
export const PopularPro = ({ width }) => {
    return (
        <StylePopular width={width}>
            <Brand></Brand>
            <div className="category">
                <div>Explore new and popular styles</div>
                <div className="bigImgPupolar">
                    <CardPro imgNumber={8} pupolar={'Manto'}></CardPro>
                </div>
                <div className="categoryRight">
                    <div>
                        <CardPro imgNumber={9} pupolar={'Pants'}></CardPro>
                        <CardPro imgNumber={10} pupolar={'Coats'}></CardPro>
                    </div>
                    <div>
                        <CardPro imgNumber={11} pupolar={'Shirt'}></CardPro>
                        <CardPro imgNumber={12} pupolar={'Jacket'}></CardPro>
                    </div>
                </div>
            </div>
        </StylePopular>
    )
}