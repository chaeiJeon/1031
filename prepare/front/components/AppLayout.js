import React, {useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
    vertical=align : middle;
`;

const AppLayout = ({children})=>{
    const { me } = useSelector((state)=>state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={18}>
                {/* gutter은 25% 50% 25% 그 사이 간격주기 */}
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://blog.naver.com/tgb09876" target="_blank" rel="noreferrer noopener">채뚱</a>
                    {/*target=_blank는 새창에서 띄우기 rel=~는 보안위험때문에 해주기*/}
               </Col>
                {/*xs : 모바일, 모바일 먼저 만들고 데스크탑
                   sm : 태블릿
                md : 작은 데스크탑 
                전체 칸은 24칸!!
                모바일에서는 각 col이 24칸 모두 차지한다. 그래서 줄이 바뀜.
                데스크탑에서는 6칸 차지하고 그다음 12칸, 그다음 6칸이라서 한 칸에 왼쪽, 중간, 오른쪽이 나오는 것*/}
            </Row>
            {/*children은 AppLayout으로 감싸져있는 부분*/}
        </div>
    );
};
AppLayout.propTypes={
    children:PropTypes.node.isRequired,
    //return 안에 들어갈 수 있는 것이 모두 node
};
export default AppLayout;