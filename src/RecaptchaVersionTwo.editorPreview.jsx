import { Component, createElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export class preview extends Component {
    render() {
        return (
            <div class="RecaptchaVersionTwo-preview">
                <div class="RecaptchaVersionTwo-preview-box"></div>
                <div class="RecaptchaVersionTwo-preview-text">I'm not a robot</div>
                <div class="RecaptchaVersionTwo-preview-logo"></div>
                <div class="RecaptchaVersionTwo-preview-credits">
                    <p>reCAPTCHA</p>
                    <p class="RecaptchaVersionTwo-preview-credits-sub">Privacy - Terms</p>
                </div>
            </div>
        );
    }
}

export function getPreviewCSS() {
    return require('./ui/RecaptchaVersionTwo.css');
}
