import styled ,{createGlobalStyle} from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay=styled.div   `
position : fixed;
z-index:5000;
top:0;
left:0;
right :0;
bottom:0;
`;
//함수 호출, () 와 `` 가 같다. func`` (javascript 문법)


export const Header = styled.header`
height:44px;
backgroudn:white;
position:relative;
padding:0;
text-align:center;
& h1{
    margin:0;
    font-size:17px;
    color:#333;
    line-height:44px;
}

`;

export const SlickWrapper=styled.div`
height:calc(100% - 44px);
background:#090909;
`;

export const ImgWrapper = styled.div`
padding:32px;
text-align:center;
& img{
    margin:0 auto;
    max-height:750px;
}
`;

export const Indicator = styled.div`
text-align: center;

& > div {
width: 75px;
height: 30px;
line-height: 30px;
border-radius: 15px;
background: #313131;
display: inline-block;
text-align: center;
color: white;
font-size: 15px;
}
`;

export const CloseBtn = styled(CloseOutlined)`
position: absolute;
right: 0;
top: 0;
padding: 15px;
line-height: 14px;
cursor: pointer;
`;

export const Global = createGlobalStyle`
.slick-slide{
  display:inline-block;

}
`
// Slick 각 클래스명이 다 있는데 그걸 다 적어줄 수 없기떄문에 덮어씌어 주는 것

