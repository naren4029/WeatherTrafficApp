import './ScreenshotStyle.scss';

export default function ScreenshotComponent(props:any){
    const imageUrl = props.selectedLocationImage.image;
    const backgroundImageStyle =  (imageUrl)?{backgroundImage:'url('+imageUrl+')'}:{};
    return(
        <div className="screenshot-pnl-cls">
            <div className="image-pnl-cls" style={backgroundImageStyle}>
            </div>
            <div className="area-cls">{props.selectedArea.name}</div>
        </div>
    );
}
