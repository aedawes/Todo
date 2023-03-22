import React from "react";
import { Box, Checkbox, Card } from "@chakra-ui/react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const TodoItem = ({ todo, onDelete }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/todos/delete/" + id);
      window.location.reload();
    }
    catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put("http://localhost:8080/todos/update/" + id);
      window.location.reload();
    }
    catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Box d="flex" alignItems="center" justifyContent="space-between" w="50%">
      <Card d="flex" flexDirection="row" alignItems="center" p="0.5rem" pl="1rem" pr="1rem" mb="0.5rem" bg="blue.600">
        <Checkbox 
          isChecked={todo.isCompleted} 
          onChange={()=>handleUpdate(todo.itemID)}
          color="white"
          flex="1" 
          mr="2rem" 
          size="lg" 
          spacing='1rem'>
          {todo.itemName}
        </Checkbox>
        <button 
          type="button"
          onClick={()=>handleDelete(todo.itemID)}>
          <FontAwesomeIcon icon={faTrash} style={{ color: '#e86848' }}/>
        </button>
      </Card>
    </Box>
  );
};

export default TodoItem;