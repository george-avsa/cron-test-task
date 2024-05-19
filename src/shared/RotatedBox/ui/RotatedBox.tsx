type RotatedBoxProps = {
    side: number,
    rotationDegree: number,
    margin?: number,
    additionalClass?: string,
}

function RotatedBox({side, rotationDegree, margin, additionalClass}: RotatedBoxProps) {

    const styleObject = {
        width: `${side}px`,
        height: `${side}px`,
        rotate: `${rotationDegree}deg`,
        ...(margin && {marginLeft: `${margin}%`}),
    };

    return (
        <div className={`rotated-box ${additionalClass ? additionalClass : ''}`}>
            <div className="rotated-box__box" style={styleObject}></div>
        </div>
    );
}

export default RotatedBox;