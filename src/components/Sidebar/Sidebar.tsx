import React, { useState } from 'react';
import { Button, SidebarBlock, SidebarContent, SidebarWrapper, SpanButton } from './Sidebar.styles';

export const Sidebar: React.FC = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState<boolean>(false);
    if (sidebarActive)
        return (
          <SidebarWrapper>
            <SidebarBlock onClick={() => setSidebarActive(false)}>
              <Button active={sidebarActive} onClick={() => setSidebarActive(false)}>
                <span>Легенда</span>
                <SpanButton active={sidebarActive}></SpanButton>
              </Button>
              <SidebarContent>{children}</SidebarContent>
              <SpanButton active={sidebarActive}></SpanButton>
            </SidebarBlock>
          </SidebarWrapper>
        );
    if (!sidebarActive)
        return (
          <SidebarWrapper>
            <Button active={sidebarActive} onClick={() => setSidebarActive(true)}>
              <span>Легенда</span>
              <SpanButton active={sidebarActive}></SpanButton>
            </Button>
          </SidebarWrapper>
        );
    return null;
};
