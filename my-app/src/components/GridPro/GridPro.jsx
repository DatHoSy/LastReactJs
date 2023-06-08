import { CardPro } from "components/CardPro/CardPro";
import { NavContent } from "components/NavContent/NavContent";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const StyleGridPro = styled.div`
    width: ${props => props.width};
    h2 {
        text-align: center;
        font-size: 50px;
        line-height: 59px;
    }
    .listProduct {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 24px;
    }
`
export const GridPro = ({width}) => {
    const isPhone = useMediaQuery({ query: '(max-width: 425px)' });
    return (
        <StyleGridPro width={width}>
            <h2>Or subscribe to the newsletter</h2>
            <NavContent></NavContent>
            <div className="listProduct">
                <CardPro imgNumber={0} title={'Adicolor Classics Joggers'} category={'Dress'} price={63.85}></CardPro>
                <CardPro imgNumber={1} title={'Nike Sportswear Futura Luxe'} category={'Bag'} price={130.00}></CardPro>
                <CardPro imgNumber={2} title={'Geometric print Scarf'} category={'scarf'} price={53.00}></CardPro>
                <CardPro imgNumber={3} title={'Yellow Reserved Hoodie'} category={'Dress'} price={63.85} priceSale={52.77}></CardPro>
                <CardPro imgNumber={4} title={'Basic Dress Green'} category={'Dress'} price={63.85} isHot={true}></CardPro>
                <CardPro imgNumber={5} title={'Nike Air Zoom Pegasus'} category={'Dress'} price={120.50} priceSale={98.77}></CardPro>
                <CardPro imgNumber={6} title={'Nike Repel Miler'} category={'Dress'} price={63.85}></CardPro>
                <CardPro imgNumber={7} title={'Nike Sportswear Futura Luxe'} category={'Dress'} price={63.85}></CardPro>
                {isPhone && <CardPro imgNumber={2} title={'Nike Sportswear'} category={'Dress'} price={63.85}></CardPro>}
            </div>
        </StyleGridPro>
    )
}