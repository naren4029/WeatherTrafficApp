import './LogoStyle.scss';
import labels from '../../Assets/i18n/en.json';

export default function LogoComponent(){
    return(
        <span className="logo-wrapper-cls">
            <span className="logo-icon-wrapper-cls">
                <span className="logo-left-cls"></span>
                <span className="logo-right-cls"></span>
            </span>
            <span className="logo-text-cls">{labels.logoTitle}</span>
        </span>
    );
}

