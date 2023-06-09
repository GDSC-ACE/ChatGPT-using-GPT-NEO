import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import bot from '../assets/logo.ico'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import CodeBlock from './CodeBlock';

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const ChatMessage = (props) => {
  const { id, createdAt, text, ai = false, selected, picUrl } = props.message;

  return (
    <Box key={id} className={`${ai && "flex-row-reverse"} message`}>
      <Flex className={`${ai && "flex-row-reverse"} message-w`}>
        <Box className="message__wrapper">
          {selected === "dalle" && ai ? (
            <>
              <Text className="message__createdAt text-left">
                (Requests to DALL·E are not stored as they are quickly removed from the server)
              </Text>
              <Image src={text} />
            </>
          ) : (
            <>
              {ai ? (
                <ReactMarkdown
                  className={`message__markdown text-left`}
                  children={text}
                  remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                  components={{
                    code: CodeBlock,
                  }}
                />
              ) : (
                <Box className="message__markdown text-right">
                  {text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      <Text>{line}</Text>
                      <br />
                    </React.Fragment>
                  ))}
                </Box>
              )}
            </>
          )}
          <Text className={`${ai ? "text-left" : "text-right"} message__createdAt`}>
            {moment(createdAt).calendar()}
          </Text>
        </Box>

        <Box className="message__pic">
          {ai ? (
            <Image className="w-8 h-8" src={bot} alt="GPT" />
          ) : (
            <Image className="cover w-10 h-10 rounded-full" loading="lazy" src={picUrl} alt="profile pic" />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ChatMessage