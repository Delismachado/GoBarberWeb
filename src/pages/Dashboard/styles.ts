import styled from "styled-components";

export const Container = styled.div`
    background-color: #f7e1e2;
    height: 100vh;
`;

export const Header = styled.header`
    padding: 32px 0;
    background: #db8393;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > img {
        height: 80px;
    }

    button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #ffffff;
            width: 20px;
            height: 20px;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            color: #ffffff;
        }

        a {
            color: #f7e1e2;
            text-decoration: none;
            font-size: 1.2em;

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

export const Content = styled.main`
    max-width: 1120px;
    margin: 65px auto;
    display: flex;
`;

export const Schedule = styled.div`
    flex: 1;
    margin-right: 120px;

    h1 {
        font-size: 36px;
        color: #db8393;
    }

    p {
        margin-top: 8px;
        color: #8e515d;
        display: flex;
        align-items: center;
        font-weight: 500;

        span {
            display: flex;
            align-items: center;
        }

        span + span::before {
            content: "";
            width: 1px;
            height: 12px;
            background: #8e515d;
            margin: 0 8px;
        }
    }
`;

export const NextAppointment = styled.div`
    margin-top: 64px;

    > strong {
        color: #999591;
        font-size: 20px;
        font-weight: 400;
    }

    div {
        background: #3e3b47;
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;
        margin-top: 24px;
        position: relative;

        &::before {
            position: absolute;
            height: 80%;
            width: 1px;
            left: 0;
            top: 10%;
            content: "";
            background: #ff9000;
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        strong {
            margin-left: 24px;
            color: #fff;
        }

        span {
            margin-left: auto;
            display: flex;
            align-items: center;
            color: #999591;

            svg {
                color: #ff9000;
                margin-right: 8px;
            }
        }
    }
`;

export const Appointment = styled.div`
    display: flex;
    align-items: center;

    & + div {
        margin-top: 16px;
    }

    span {
        margin-left: auto;
        display: flex;
        align-items: center;
        color: #f4ede8;

        svg {
            color: #ff9000;
            margin-right: 8px;
        }
    }

    div {
        flex: 1;
        background: #3e3b47;
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;
        margin-left: 24px;

        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
        }

        strong {
            margin-left: 24px;
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const Section = styled.section`
    margin-top: 48px;
    > strong {
        color: #de9eae;
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid #3e3b47;
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
`;

export const Calendar = styled.aside`
    width: 380px;

    .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #DB8393;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-Weekday {
      color: #DB8393;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
    background-image: url(https://maniclub.nailtime.com.br/public/images/calendar-prev-white.png);
  }

  .DayPicker-NavButton--next {
    background-image: url(https://maniclub.nailtime.com.br/public/images/calendar-next-white.png);

  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #EBC0C8;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #ffffff;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #DE9EAE;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: #F7E1E2; color: #DB8393};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    background: #DB8393 !important;

  }

  .DayPicker-Day--disabled {
    color: #F7E1E2;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #F7E1E2 !important;
    border: 2px solid #DB8393;
    border-radius: 10px;
    color: #DB8393 !important;
  }
`;
