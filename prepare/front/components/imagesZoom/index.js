import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import {Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper} from './styles';

const ImagesZoom = ({ images, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    //현재 슬라이드를 state로 저장해두기 처음은 0
    
    return(
        <Overlay>
            <Global/>
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
            <div>
                    <Slick
                        initialSlid={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite //무한반복
                        arrows={false}
                        slideToShow={1} //한번에 하나만 보여주고, 한번에 하나만 스크롤
                        slideToScroll={1}
                    >
                        {/*이미지 한장 한장 넣어주기, 슬릭이 div안에 있는 것을 자동으로 캐루세롤 만들어준다*/}
                        {images.map((v)=>(
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    )

}
ImagesZoom.propTypes={
    images : PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose : PropTypes.func.isRequired,
}
export default ImagesZoom;