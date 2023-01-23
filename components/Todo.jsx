import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FaUserPlus, FaEllipsisH, FaRegAddressCard } from "react-icons/fa";
import { deleteTodo, toggleTodoStatus } from "../api/todo";
import { Dropdown, } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'


const TodoList = () => {
    const [todos, setTodos] = React.useState([]);

    const { user } = useAuth();
    const toast = useToast();
    const refreshData = () => {
        if (!user) {
            setTodos([]);
            return;
        }
        const q = query(collection(db, "todo"), where("user", "==", user.uid));

        onSnapshot(q, (querySnapchot) => {
            let ar = [];
            querySnapchot.docs.forEach((doc) => {
                ar.push({ id: doc.id, ...doc.data() });
            });
            setTodos(ar);
        });
    };

    useEffect(() => {
        refreshData();
    }, [user]);

    const handleTodoDelete = async (id) => {
        if (confirm("Are you sure you wanna delete this todo?")) {
            deleteTodo(id);
            toast({ title: "Todo deleted successfully", status: "success" });
        }
    };

    const handleToggle = async (id, status) => {
        const newStatus = status == "completed" ? "pending" : "completed";
        await toggleTodoStatus({ docId: id, status: newStatus });
        toast({
            title: `Todo marked ${newStatus}`,
            status: newStatus == "completed" ? "success" : "warning",
        });
    };

    return (


        <Box mt={5}>

            <div className="d-flex align-items-center justify-content-between p-1">

                <div className="d-flex align-items-center">
                    <h5 className="fw-bold mb-0 me-1" >To Do</h5>
                    <div className="" style={{ opacity: '0.6', fontSize: '17px' }}>(2)</div>


                    <Dropdown align="end">
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                        // id="action-user1"
                        >
                            <FontAwesomeIcon
                                fontSize={'13px'} className=' px-2 rounded '
                                icon={faFilter}
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className="fw-bold border-bottom p-3" href="#"><FontAwesomeIcon
                                fontSize={'13px'} className=' px-1 rounded'
                                icon={faFilter}
                            />Sort by</Dropdown.Item>
                            <Dropdown.Item className="py-2 px-3" href="#">Project</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Tags</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Assigned To</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown align="end">
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                        // id="action-user1"
                        >
                            <FontAwesomeIcon
                                fontSize={'13px'} className=' px-1 rounded'
                                icon={faArrowDownWideShort}
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className="fw-bold border-bottom p-3" href="#"><FontAwesomeIcon
                                fontSize={'13px'} className=' px-1 rounded'
                                icon={faArrowDownWideShort}
                            />Sort by</Dropdown.Item>
                            <Dropdown.Item className="py-2 px-3" href="#"> Order</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Created Date</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Due date</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Sitting count</Dropdown.Item>
                            <Dropdown.Item className=" py-2 px-3" href="#">Move count</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
                <Dropdown align="end">
                    <Dropdown.Toggle
                        as="button"
                        bsPrefix="btn"
                        className="btn-link rounded-0 text-black-50 shadow-none p-0"
                    // id="action-user1"
                    >
                        <FaEllipsisH fixedWidth />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className="fw-bold border-bottom p-3" href="#/action-1">List Actions</Dropdown.Item>
                        <Dropdown.Item className="py-2 px-3" href="#/action-2">Move all cards in this list</Dropdown.Item>
                        <Dropdown.Item
                            className=" py-2 px-3"
                            href="#/action-3">Archive all cards in this list
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}   >
                {/* {todos && */}
                {/* todos.map((todo) => ( */}
                <Box
                    borderRadius={'8px'}
                    bg={'white'}
                    // key={todo.id}
                    p={'8px'}
                    boxShadow="2xl"
                    shadow={"dark-lg"}
                    transition="0.2s"
                    _hover={{ boxShadow: "sm" }}
                >

                    <Heading as='h7' opacity={'0.6'}>
                        <Badge
                            // color="red.500"
                            bg="inherit"

                            transition={"0.2s"}
                            _hover={{
                                bg: "inherit",
                                transform: "scale(1.2)",
                            }}
                            float="right"
                            size="xs"
                        // onClick={() => handleTodoDelete(todo.id)}
                        >
                            <FaUserPlus />
                        </Badge>
                        <Badge
                            opacity="0.8"
                        // bg={todo.status == "pending" ? "yellow.500" : "yellow.500"}
                        >
                            {/* {todo.status} */}
                            hello
                        </Badge>
                    </Heading>

                    <Heading as="h6" color={'#070F21'} className={"my-1"}>
                        {/* {todo.title} */}
                        hello
                    </Heading>

                    <Text className="api" backgroundColor={'#FFEEDE'} >api.contactrm.com</Text>
                    <Text className="api" backgroundColor={'#FFDEFC'} marginLeft={'auto'}  >api.contactrm.com</Text>

                    <FaRegAddressCard fontSize={'10px'} display={'block'} w={'24px'} h={'24px'} className={"my-1"} />

                    <Text fontSize={'10px'} bg={'#EBECED'} display={'inline-block'} px={'3'} marginBottom={'0'} borderRadius={'4px'} >Created 3 days ago</Text>

                </Box>

                <Box
                    borderRadius={'8px'}
                    bg={'white'}
                    // key={todo.id}
                    p={'8px'}
                    boxShadow="2xl"
                    shadow={"dark-lg"}
                    transition="0.2s"
                    _hover={{ boxShadow: "sm" }}
                >

                    <Heading as='h7' opacity={'0.6'}>
                        <Badge
                            // color="red.500"
                            bg="inherit"

                            transition={"0.2s"}
                            _hover={{
                                bg: "inherit",
                                transform: "scale(1.2)",
                            }}
                            float="right"
                            size="xs"
                        // onClick={() => handleTodoDelete(todo.id)}
                        >
                            <FaUserPlus />
                        </Badge>
                        <Badge
                            opacity="0.8"
                        // bg={todo.status == "pending" ? "yellow.500" : "yellow.500"}
                        >
                            {/* {todo.status} */}
                            hello
                        </Badge>
                    </Heading>

                    <Heading as="h6" color={'#070F21'} className={"my-1"}>
                        {/* {todo.title} */}
                        hello
                    </Heading>

                    <Text className="api" backgroundColor={'#FFEEDE'} >api.contactrm.com</Text>
                    <Text className="api" backgroundColor={'#FFDEFC'} marginLeft={'auto'}  >api.contactrm.com</Text>

                    <FaRegAddressCard fontSize={'10px'} display={'block'} w={'24px'} h={'24px'} className={"my-1"} />

                    <Text fontSize={'10px'} bg={'#EBECED'} display={'inline-block'} px={'3'} marginBottom={'0'} borderRadius={'4px'} >Created 3 days ago</Text>

                </Box>

                <Box
                    borderRadius={'8px'}
                    bg={'white'}
                    // key={todo.id}
                    p={'8px'}
                    boxShadow="2xl"
                    shadow={"dark-lg"}
                    transition="0.2s"
                    _hover={{ boxShadow: "sm" }}
                >

                    <Heading as='h7' opacity={'0.6'}>
                        <Badge
                            // color="red.500"
                            bg="inherit"

                            transition={"0.2s"}
                            _hover={{
                                bg: "inherit",
                                transform: "scale(1.2)",
                            }}
                            float="right"
                            size="xs"
                        // onClick={() => handleTodoDelete(todo.id)}
                        >
                            <FaUserPlus />
                        </Badge>
                        <Badge
                            opacity="0.8"
                        // bg={todo.status == "pending" ? "yellow.500" : "yellow.500"}
                        >
                            {/* {todo.status} */}
                            hello
                        </Badge>
                    </Heading>

                    <Heading as="h6" color={'#070F21'} className={"my-1"}>
                        {/* {todo.title} */}
                        hello
                    </Heading>

                    <Text className="api" backgroundColor={'#FFEEDE'} >api.contactrm.com</Text>
                    <Text className="api" backgroundColor={'#FFDEFC'} marginLeft={'auto'}  >api.contactrm.com</Text>

                    <FaRegAddressCard fontSize={'10px'} display={'block'} w={'24px'} h={'24px'} className={"my-1"} />

                    <Text fontSize={'10px'} bg={'#EBECED'} display={'inline-block'} px={'3'} marginBottom={'0'} borderRadius={'4px'} >Created 3 days ago</Text>

                </Box>

                {/* //   )
          //   )
          // } */}
            </SimpleGrid>
        </Box>
    );
};

export default TodoList;
