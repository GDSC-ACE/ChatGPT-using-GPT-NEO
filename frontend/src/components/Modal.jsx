import React from 'react';
import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';

function Modal({ isOpen, onClose, onDelete }) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete this chat room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex items-center">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <MdDeleteForever className="text-red-600 text-xl" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this chat room? This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter bg="dark-slate-gray" px={4} py={3}>
          <Button
            colorScheme="red"
            mr={3}
            onClick={onDelete}
          >
            Yes
          </Button>
          <Button variant="ghost" onClick={onClose}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;