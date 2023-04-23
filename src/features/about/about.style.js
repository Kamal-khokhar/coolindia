import styled from 'styled-components';
import BannerBGimage from '../../assets/images/banner_1.png';
import howWeWork from '../../assets/images/how-we-work.jpg';

export const aboutUsMain = {OuterDiv: styled.div``,
    aboutUsSec:styled.section`
        padding: 100px 0 60px;
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #252525;
            margin: 0 0 20px;
            @media (max-width: 767px) {
                font-size: 32px;
            }
        }
        p {
            font-size: 16px;
            color: #252525;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 40px 0 20px;
        }
    `,
    howWeWork:styled.section`
        padding: 70px 0 60px;
        background-image: url(${howWeWork});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;

        &:before {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 0;
        }
        .row {
            position: relative;
            z-index: 9;
        }
        h2 {
            font-size: 38px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 30px;
            @media (max-width: 767px) {
                font-size: 28px;
            }
        }
        p {
            font-size: 16px;
            color: #ffffff;
            margin: 0 0 15px;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        @media (max-width: 767px) {
            padding: 40px 0 20px;
        }
    `,
    OurGoalSec:styled.div`
        h2 {
            font-size: 38px;
            font-weight: 700;
            margin: 0px 0px 20px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            margin: 0px 0px 30px;
        }
        li {
            color: #000000;
        }
    `,
    OurMissionSec:styled.div``,
}