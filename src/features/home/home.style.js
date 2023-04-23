import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.jpeg';
import ListIcon from '../../assets/svg/list-icon.svg';
import hoverBox1 from '../../assets/images/hover-box1.png';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export const Fragments = {OuterDiv: styled.div``,
    HomeBanner:styled.section`
        background-image: url(${BannerBGimage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 626px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        font-family: 'Poppins', sans-serif !important;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgb(37 37 37 / 70%);
        }
        @media (max-width: 767px) {
            height: 540px;
        }
    `,
    HomeBannerHeading:styled.h1`
        width: 100%;
        color: #ffffff;
        font-size: 42px;
        font-weight: 700;
        z-index: 9;
        position: relative;
        margin: 0px;
        padding: 15px;
        margin-bottom: 30px;
        font-family: Poppins, sans-serif !important;
    `,
    HomeBannerButton:styled.a`
        display: block;
        text-decoration: none;
        color: #ffffff;
        z-index: 9;
        font-size: 18px;
        font-weight: 500;
        background: none;
        border: 1px solid #ffffff;
        color: #ffffff;
        padding: 8px 20px;
        font-family: 'Poppins', sans-serif;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background-color: #2B2D94 !important;
            border-color: #2B2D94 !important;
            color: #ffffff !important;
        }
    `,
    HomeAboutSec:styled.section`
        width: 100%;
        padding: 60px 0 10px;
        text-align: left;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 10px;
        }
        h4 {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 30px;
            color: #828282;

            span {
                color: #2B2D94;
            }

            @media (max-width: 767px) {
                margin: 0 0 20px;
            }
        }
        p {
            font-size: 16px;
            font-weight: 400;
            margin: 0 0 50px;
            color: #828282;
            line-height: 28px;

            @media (max-width: 767px) {
                margin: 0 0 30px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0 10px;
        }
    `,
    HomeCardSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: left;
        
        p.card-text {
            min-height: 180px;
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    HomeRequirementSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: left;
        background-color: #F5F6FF;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 30px;

            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0 0 20px;
            }
        }
        p {
            font-size: 18px;
            line-height: 32px;
            font-weight: 400;
            margin: 0 0 50px;
            color: #828282;

            @media (max-width: 767px) {
                font-size: 16px;
                line-height: normal;
                margin: 0 0 30px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    HomeConsiderSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: left;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 20px;

            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        ul {
            padding: 0;
        }
        li {
            font-size: 16px;
            font-weight: 300;
            color: rgb(130, 130, 130);
            list-style-type: none;
            display: block;
            position: relative;
            padding: 0 0 0 25px;
            margin: 0 0 12px;

            &:before {
                content: "";
                position: absolute;
                width: 12px;
                height: 12px;
                left: 0px;
                top: 50%;
                transform: translateY(-50%);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url(${ListIcon});
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    HomeStorageSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: center !important;
        background-color: #F5F6FF;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 20px;
            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0px 0px 15px;
            }
        }
        p {
            font-size: 18px;
            font-weight: 400;
            margin: 0 0 50px;
            color: #828282;
            @media (max-width: 767px) {
                font-size: 16px;
                margin: 0 0 30px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,
    HomeImageWrap:styled.div`
        width: 100%;
        max-width: 450px;
        margin: auto;
    `,
    CoolHoverBox:styled.div`
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${props => props.BackgroundImg ? props.BackgroundImg : hoverBox1});
        height: 100%;
        min-height: 320px;
        border-radius: 30px;
        overflow: hidden;
        padding: 10px;
        position: relative;
        cursor: pointer;

        p {
            background-color: #ffffff;
            padding: 15px;
            text-align: center;
            color: #828282;
            font-size: 12px;
            font-weight: 400;
            height: auto;
            line-height: 20px;
            border-radius: 30px;
            margin: 0;
            width: calc(100% - 20px);
            position: absolute;
            left: unset;
            bottom: 150%;
            transition-duration: 1s;

            b {
                display: block;
                color: #000000;
                font-size: 18px;
                font-weight: 600;
                margin: 0 0 10px;
            }
        }
        &:hover p {
            bottom: 10px;
        }
    `,
    HomeNewsSec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: center !important;
        background-color: #F5F6FF;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 20px;

            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0 0 15px;
            }
        }
        p {
            font-size: 18px;
            font-weight: 400;
            margin: 0 0 40px;
            color: #828282;
            @media (max-width: 767px) {
                font-size: 14px;
                margin: 0px 0px 20px;
            }
        }
        .card-title span {
            font-size: 16px;
            font-weight: 400;
            margin: 0 0 10px;
            color: #828282;
            display: block;
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
    HomeJourneySec:styled.section`
        width: 100%;
        padding: 60px 0;
        text-align: center !important;
        background-color: #ffffff;
        font-family: 'Poppins', sans-serif !important;

        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0 0 30px;

            @media (max-width: 767px) {
                font-size: 28px;
                margin: 0 0 20px;
            }
        }
        @media (max-width: 767px) {
            padding: 30px 0;
        }
    `,

}