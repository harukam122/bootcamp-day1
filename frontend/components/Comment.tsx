import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";

interface Props {
    content: string;
    postedAt: Date;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implement a Comment!
    return (
        <Box fontSize={'sm' }lineHeight='tight' isTruncated>
            {content}
            {postedAt.toString}
        </Box>
    );
}

export default Comment;