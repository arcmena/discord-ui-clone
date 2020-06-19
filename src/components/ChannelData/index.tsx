import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        author="CJ"
                        date="18/06/2020"
                        content="this is a message"
                    />
                ))}
                <ChannelMessage
                    author="doge"
                    date="18/06/2020"
                    content="bark"
                    isBot
                />
                <ChannelMessage
                    author="Arctickan"
                    date="18/06/2020"
                    content="what?"
                />
                <ChannelMessage
                    author="shiba"
                    date="18/06/2020"
                    content={
                        <>
                            <Mention>@Arctickan</Mention> wow
                        </>
                    }
                    hasMention
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
