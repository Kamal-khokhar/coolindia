import styled from 'styled-components';
import RightArrow from '../../assets/svg/right-arrow.svg';

export const testimonialSection = {OuterDiv: styled.div``,
    testimonialSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: center !important;
        background-color: #F5F6FF;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 10px;

            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0 0 10px;
            }
        }
        p {
            font-size: 20px;
            font-weight: 400;
            margin: 0 0 40px;
            color: #828282;
            @media (max-width: 767px) {
                font-size: 16px;
                margin: 0px 0px 30px;
            }
        }
        .card {
            border-radius: 20px !important;
        }
        .card-body {
            text-align: left;
        }
        .card-title {
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            margin: 0 0 10px;
            color: rgb(82 82 82);
            display: block;
            min-height: 210px !important;
        }
        .card-text {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            color: rgb(43 44 44);

            i {
                padding: 4px;
                border: 1px solid #000000;
                border-radius: 40px;
                width: 45px;
                display:inline-block;
                margin-right: 10px;
            }
            img {
                width: 100%;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    SliderArrowBtnWrap:styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `,
    SliderArrowBtn:styled.a`
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: #9D9FE2;
        background-image: url(${props => props.BackgroundImg ? props.BackgroundImg : RightArrow});
        height: 45px;
        width: 45px;
        border-radius: 25px;
        padding: 10px;
        cursor: pointer;
        display: block;
        margin: 6px;
        &:hover {
            background-color: #2B2D94;
            box-shadow: 0px 5px 10px 2px #2B2D9433;
        }
    `,
}