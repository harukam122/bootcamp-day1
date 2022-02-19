import {FC, useEffect, useState} from "react";
import {Box, Container, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";
import axios from "axios";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
    postID: string;
}


const Post: FC<Props> = ({title, body, postedAt, postID}) => {
    const [comments, setComments] = useState<any[]>([])

    function handleSubmit(e: any) {
        e.preventDefault;
        console.log("POSTED")
        axios.post(`http://localhost:8080/posts/${postID}/comments`, {
            comment: e.target.comment.value,
            postedAt: new Date(),
          })
          .then(function (response) {
            console.log("succesfully commented!");
          })
          .catch(function (error) {
            console.log("failed to comment");
          });
        }

    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${postID}/comments`)
            .then(res => setComments(res.data))
    }, []) 
    
    // TODO: Implement a Post!
    return (
    <Box w='80%' bg='white' borderWidth='5px' borderColor={'black'} p='6' boxShadow='lg' m='6'>
        <Box fontSize='x-large' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {title}
        </Box>

        <Box fontSize='medium' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {body}
        </Box>

        <Box fontSize='sm' mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {postedAt.toString()}
        </Box>

        <form onSubmit={handleSubmit}>
            <input name="comment" placeholder="Leave a comment!" type="comment"/>
            <button type="submit">Submit Comment</button>
        </form>

        <Box>
                {/* {posts?.map(post => <Post key={post._id} title={post.title} body={post.body} postedAt={new Date()}/>)} */}
                {comments?.map(comment => <Comment key={comment._id} content={comment.content} postedAt={new Date(comment.postedAt)}/>)}
        </Box>
    </Box>
    );
}

export default Post;