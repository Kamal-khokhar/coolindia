import styled from 'styled-components';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export const TestSliderMain = {OuterDiv: styled.div``,
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
        .coolIndiaCards:hover {
            box-shadow: none;
        }
        .owl-dots {
            display: none;
        }
        .owl-nav {
            margin-top: 25px !important;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .owl-nav button {
            background-size: 18px !important;
            font-size: 0px !important !important;
            background-repeat: no-repeat !important;
            background-position: center center !important;
            background-color: #9D9FE2 !important;
            background-image: url(${props => props.BackgroundImg ? props.BackgroundImg : RightArrow}) !important;
            height: 45px !important;
            width: 45px !important;
            border-radius: 25px !important;
            padding: 10px !important;
            cursor: pointer !important;
            display: block !important;
            margin: 6px !important;
        }
        .owl-nav button:first-child {
            background-image: url(${props => props.BackgroundImg ? props.BackgroundImg : LeftArrow}) !important;
        }
        .owl-nav button span {
            display: none !important;
        }
        .owl-nav button:hover {
            background-color: #2B2D94 !important;
            box-shadow: 0px 5px 10px 2px #2B2D9433 !important;
        }
        @media (max-width: 767px) {
            padding: 30px 0 !important;
        }
`,}