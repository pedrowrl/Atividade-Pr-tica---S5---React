import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid black;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid black;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Link = styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

function MyComponent() {
  return (
    <Container>
      <Title>My Title</Title>
      <Table>
        <thead>
          <tr>
            <Th colSpan="2">Cidades que já apareceram na série:</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td><Strong>Springfield</Strong></Td>
            <Td><Link href="https://en.wikipedia.org/wiki/Springfield_(The_Simpsons)">https://en.wikipedia.org/wiki/Springfield_(The_Simpsons)</Link></Td>
          </tr>
          <tr>
            <Td><Strong>Shelbyville</Strong></Td>
            <Td><Link href="https://simpsons.fandom.com/pt/wiki/Shelbyville">https://simpsons.fandom.com/pt/wiki/Shelbyville</Link></Td>
          </tr>
          <tr>
            <Td><Strong>Ogdenville</Strong></Td>
            <Td><Link href="https://simpsons.fandom.com/pt/wiki/Ogdenville">https://simpsons.fandom.com/pt/wiki/Ogdenville</Link></Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
