const placeholderImage = require('../assets/images/empty_image.png');


const Color = {
    White: "#FFF",
    Black: "#000",
    Yellow: "#CEAB5C",
    YellowDark: "#BD9028",
    GrayLight: "#EBEBEB",
    GrayLightTwo: "#D9D9D9",
    GrayLightThree: "#DEDEDE",
    Gray: "#666666",
    GrayMiddle: "#828282",
    GrayMiddleTwo: "#B1B1B1",
    GreenLight: "#48CFAD",
    GrayExtremLight: "#D6D6D6",
}

const Font = {
    SansArabicBold: "BahijTheSansArabicBold",
    SansArabic: "BahijTheSansArabic",
}

const Placeholder = {
    source: placeholderImage,
}


const SelectedCategory = {
    YouTube: 0,
    SoundCloud: 1,
}

const convertMSToTime = (ms) => {
    let seconds = (ms / 1000) % 60;
    let minutes = (ms / (1000 * 60)) % 60;
    let hours = (ms / (1000 * 60 * 60)) % 24;

    seconds = parseInt(seconds.toString());
    minutes = parseInt(minutes.toString());
    hours = parseInt(hours.toString());

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
};


const AppConstant = { Color, Font, SelectedCategory, Placeholder, convertMSToTime };
export default AppConstant