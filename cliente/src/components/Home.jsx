import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <>
            <DashboardContainer>
                <Section larger>
                    <SectionTitle>Explora Novedades</SectionTitle>
                    <ArticleContainer>
                        <ArticleTopic>
                            <h2>Lorem Ipsum 1</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </ArticleTopic>
                        <ArticleTopic>
                            <h2>Lorem Ipsum 2</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </ArticleTopic>
                    </ArticleContainer>
                </Section>

                <Section>
                    <SectionTitle>Mensajes</SectionTitle>
                    <MessageSection>
                        <MessageItem>Lorem Ipsum 1</MessageItem>
                        <MessageItem>Lorem Ipsum 2</MessageItem>
                    </MessageSection>
                </Section>
            </DashboardContainer>
        </>
    );
}

export default Home;

const DashboardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 1500px;
    background-color: #f4f4f4;
    min-height: 100vh;
`;

const Section = styled.div`
    flex: ${({ larger }) => (larger ? 2 : 1)};
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin: 0 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
`;

const ArticleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ArticleTopic = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin-bottom: 15px;
    width: calc(50% - 30px); /* Dos temas por fila */
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    h2 {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
    }

    p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #666;
    }
`;

const MessageSection = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;

    p {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
    }
`;

const MessageItem = styled.p`
    margin: 0;
    font-size: 14px;
    color: #666;
`;
