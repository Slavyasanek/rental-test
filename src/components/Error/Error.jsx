import { ErrorIcon, ErrorMessage, ErrorWrapper } from "./Error.styled";

export const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorIcon/>
            <ErrorMessage>Error occured while trying to access cars. Please, try later</ErrorMessage>
        </ErrorWrapper>
    )
};
