import * as IcIcons from "react-icons/hi2";
const DynamicIcons = ({ IconName, classeName }) => {
    const IconComponent = IcIcons[IconName];
    return (
        <span className={classeName}>
            <IconComponent />
        </span>
    );
};

export default DynamicIcons;
