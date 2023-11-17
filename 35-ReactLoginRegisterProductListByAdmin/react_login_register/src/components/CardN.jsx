import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const CardN=({products,setProducts})=> {
    let [Card,setCard]= useState([]);
    let [CardBody,setCardBody]= useState([]);
    let [CardFooter,setCardFooter]= useState([]);

  return (
    <ChakraProvider>
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/1295967422/vector/five-point-star-vector-icon-isolated-gold-star-rating-flat-symbol-vector.jpg?s=612x612&w=0&k=20&c=f9kJnuy_7JluRDG2ZgIPAkI33173kVwOuCBXe-z-w6Y='
      alt='Star'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Home1</Heading>
      <Text>
       Star 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Button 
          data-id={element.id}
          colorScheme='blue'
          onClick={(e)=> {
            let arr = [...data];
            arr = arr.filter(
              (elem) => elem.id != e.target.getAttribute("data-id")
            );
            setData(arr);
          }}
          >Add Cart
          </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </>
    </ChakraProvider>
  )
}

export default CardN;


