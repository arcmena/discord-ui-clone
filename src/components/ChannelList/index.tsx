import React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category, AddCatecoryIcon } from "./styles";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>canais de texto</span>
                <AddCatecoryIcon />
            </Category>
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="zoeira" />
        </Container>
    );
};

export default ChannelList;
