import styled from "styled-components";
import brand1 from 'assets/img/brand1.svg';
import brand2 from 'assets/img/brand2.svg';
import brand3 from 'assets/img/brand3.svg';
import brand4 from 'assets/img/brand4.svg';
import brand5 from 'assets/img/brand5.svg';

const StyleBrand = styled.div`
    div.brand {
        margin-bottom: 100px;
        display: flex;
        justify-content: space-between;
    }
`
export const Brand = () => {
    return (
        <StyleBrand>
            <div className="brand">
                <img src={brand1} alt="brandImg" />
                <img src={brand2} alt="brandImg" />
                <img src={brand3} alt="brandImg" />
                <img src={brand4} alt="brandImg" />
                <img src={brand5} alt="brandImg" />
            </div>
        </StyleBrand>
    )
}