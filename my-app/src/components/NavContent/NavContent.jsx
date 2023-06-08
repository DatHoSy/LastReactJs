import { Button } from "components/Button/Button";
import styled from "styled-components";

const StyleNavContent = styled.div`
    div.navContent {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    div.navContent ul {
        margin: 0;
        padding: 0;
    }
    div.navContent ul li {
        text-decoration: none;
        display: inline;
        margin-right: 40px;
    }
`

export const NavContent = () => {
    return (
        <StyleNavContent>
            <div className="navContent">
                <ul>
                    <li>All Product</li>
                    <li>T-Shirt</li>
                    <li>Hoodies</li>
                    <li>Jacket</li>
                </ul>
                <Button text={'Filter'} width={'92px'} height={'32px'} bgColor={'black'} textColor={'white'}></Button>
            </div>
        </StyleNavContent>
    )
}