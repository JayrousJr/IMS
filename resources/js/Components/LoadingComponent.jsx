import { ThreeDots } from "react-loader-spinner";

const LoadingComponent = () => {
    return (
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};

export default LoadingComponent;
