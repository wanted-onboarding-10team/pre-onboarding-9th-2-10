import React from 'react';
import {
  Card as CardWrapper,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Divider,
  Image,
  Badge,
} from '@chakra-ui/react';
import { DataProps } from 'types';
import { CustomModal } from 'components/commons/CustomModal';

const Card = ({ props }: DataProps) => {
  const { idx, name, mainImage, price, spaceCategory } = props;
  return (
    <CardWrapper key={idx} maxW="sm" overflow={'hidden'} boxShadow="md">
      <Stack>
        <Image src={mainImage} borderRadius="lg" />
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Badge fontSize="1rem">{spaceCategory}</Badge>
          <Heading py="2">{price}</Heading>
        </CardBody>

        <CardFooter>
          <CustomModal />
        </CardFooter>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
