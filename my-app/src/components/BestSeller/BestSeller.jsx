import { CardPro } from "components/CardPro/CardPro";
import { NavContent } from "components/NavContent/NavContent";
import styled from "styled-components";

const StyleBestSeller = styled.div`
    width: ${props => props.width};
    h2 {
        text-align: center;
        font-size: 50px;
        line-height: 59px;
    }
    .productSale {
        display: flex;
        justify-content: space-between;
        gap: 24px;
    }
`
export const BestSeller = ({width}) => {
    return (
        <StyleBestSeller width={width}>
            <h2>Best sellers</h2>
            <NavContent></NavContent>
            <div className="productSale">
                <CardPro imgNumber={4} title={'Basic Dress Green'} category={'Dress'} price={63.85} isHot={true}></CardPro>
                <CardPro imgNumber={1} title={'Nike Sportswear Futura Luxe'} category={'Bag'} price={130.00}></CardPro>
                <CardPro imgNumber={3} title={'Yellow Reserved Hoodie'} category={'Dress'} price={63.85} priceSale={52.77}></CardPro>
                <CardPro imgNumber={5} title={'Nike Air Zoom Pegasus'} category={'Dress'} price={120.50} priceSale={98.77}></CardPro>
            </div>
        </StyleBestSeller>
    )
}