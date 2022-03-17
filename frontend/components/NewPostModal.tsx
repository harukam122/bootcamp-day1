import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Button, Input, Textarea, VStack} from "@chakra-ui/react";
import axios from "axios";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const NewPostModal: FC<Props> = ({isOpen, onClose}) => {
    // TODO: Fill out this handleSubmit function!
    function handleSubmit(e: any) {
        e.preventDefault;
        console.log("POSTED")
        axios.post('http://localhost:8080/posts', {
            title: e.target.title.value,
            body: e.target.body.value,
            postedAt: new Date(),
          })
          .then(function (response) {
            console.log("succesfully posted!");
          })
          .catch(function (error) {
            console.log("failed to post");
          });
    }

    // TODO: Implemnt a NewPostModal!
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>SPILL THE TEA</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        <input name="title" placeholder="Title" type="title" required/>
                        {/* <input name="body" placeholder="Body" type="body" required/> */}
                    </ModalBody>

                    <ModalBody>
                        <input name="body" placeholder="Body" type="body" required/>
                    </ModalBody>

                    <ModalFooter>
                        <button type="submit">Submit Post</button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default NewPostModal;
