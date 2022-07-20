/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      {/* <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? "------------@---------"
            : "------------@---------"}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.google.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? "------------@---------"
            : "------------@---------"}
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.google.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "------------@--------- " : " Simmmple"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "------------@---------"
          : "@@@@@@@@@@@@@@@@"}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="#">
            {document.documentElement.dir === "rtl"
              ? "------------@---------"
              : "------------@---------"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://www.google.com">
            {document.documentElement.dir === "rtl" ? "abcd" : "Simmmple"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            color="gray.400"
            href="#blog"
            href="https://google.com/blog"
          >
            {document.documentElement.dir === "rtl" ? "abcd" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="gray.400"
            href="#license"
            href="https://www.google.com/license"
          >
            {document.documentElement.dir === "rtl" ? "abcd" : "License"}
          </Link>
        </ListItem>
      </List> */}
    </Flex>
  );
}
