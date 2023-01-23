import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";
import Todo from "./Todo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import TodoList from "./Todo";


const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("Select Project");
  const [isLoading, setIsLoading] = React.useState(false);

  const toast = useToast();

  const { isLoggedIn, user } = useAuth();

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a todo",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    const todo = {
      title,
      description,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);

    setTitle("");
    setDescription("");
    setStatus("ContactRM");

    toast({ title: "Todo created successfully", status: "success" });
  };

  return (

    <Box bg={'#EEECFA'} pb='35' w="235px" margin={"0"} borderRadius={'10px'} mt={5} display='flex' justifyContent={'center'} height={'100%'}>

      <Stack direction="column">

        <Todo />
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="py-1 my-0 d-inline" >Card title</h4>
          <FontAwesomeIcon icon={faXmark} color={'red'} size={'lg'} fontWeight={'light'} />

        </div>
        <Input
          className='input'
          placeholder="Card Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /> */}
        <div className="d-flex">
          <Select value={status} onChange={(e) => setStatus(e.target.value)} className="select-button">
            <option
              value={"ContactRM"}
              className='option option1'
            >
              ContactRM
            </option>
            <option
              value={"AgentBook"}
            >
              AgentBook
            </option>
            <option
              value={"W4RTEAM"}
            >
              W4RTEAM
            </option>
            <option
              value={"LEADBANK"}
            >
              LEADBANK
            </option>
          </Select>

          <Button
            style={{ background: '#0E8CFF', color: 'white' }}
            className='addButton'
            onClick={() => handleTodoCreate()}
            disabled={title.length < 1 || description.length < 1 || isLoading}
            variantcolor="teal"
            variant="solid"
          >
            Add
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default AddTodo;
