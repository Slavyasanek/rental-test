import { SkeletonWrapper, StyledSkeleton } from "./SkeletonList.styled";

export const SkeletonList = ({count}) => {
    return (
        <SkeletonWrapper>
        <StyledSkeleton count={count} inline={true}/>
        </SkeletonWrapper>
    )
};
