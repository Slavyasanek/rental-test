import { SkeletonWrapper, StyledSkeleton } from "./SkeletonList.styled";
import PropTypes from "prop-types";

export const SkeletonList = ({count}) => {
    return (
        <SkeletonWrapper>
        <StyledSkeleton count={count} inline={true}/>
        </SkeletonWrapper>
    )
};

SkeletonList.propTypes = {
    count: PropTypes.number.isRequired
}