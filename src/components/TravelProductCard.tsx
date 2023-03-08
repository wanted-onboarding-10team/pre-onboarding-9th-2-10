import { Button, Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';

const TravelProductCard = () => {
  return (
    <Card>
      <Image
        borderRadius="lg"
        maxW={{ base: '100%', sm: '300px' }}
        src="https://picsum.photos/id/17/300/300"
      />
      <CardBody>
        <Text>1</Text>
      </CardBody>
      <CardFooter>
        <Button variant="solid">예약</Button>
      </CardFooter>
    </Card>
  );
};

export default TravelProductCard;
