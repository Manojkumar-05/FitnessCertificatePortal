import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { questions } from "../data/questions";
import ThemeSwitch from "../ui/SwitchNew";

export default function ModalQ({ id, CategoryName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="flex items-center p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200 w-2/3"
      >
        <div className="flex flex-grow justify-between items-center ml-2">
          <div className="flex items-center gap-2">
            {id} {CategoryName}
          </div>
        </div>
      </div>

      <Modal
        className="dark:bg-black dark:text-white"
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"normal"}
        placement={"center"}
      >
        <ModalContent>
          <div className="flex justify-center items-center">
            <ModalHeader className="font-bold md:text-3xl sm:text-xl">
              {CategoryName}
            </ModalHeader>
          </div>
          <ModalBody>
            {questions.map(({ qno, qn }) => (
              <div key={qno} className="md:ml-32 text-xs md:text-base">
                {qno} {qn}
                <span className="float-end md:mr-28">
                   <ThemeSwitch color="success" defaultSelected="true" />
                </span>
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
