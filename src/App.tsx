import './App.css';
import Text from './components/polymorphic/Test';
// import CustomButton from './components/html/Button';
// import Toast from './components/templateliterals/Toast';
// import RandomNumber from './components/restriction/RandomNumber';
// import List from './components/generics/List';
// import Private from './components/auth/Private';
// import Profile from './components/auth/Profile';
// import User from './components/context/User';
// import UserContextProvider from './components/context/UserContext';
// import Box from './context/Box';
// import ThemeContexProvider from './context/ThemeContext';
// import Button from './components/Button';
// import Container from './components/Container';
// import Greet from './components/Greet';
// import Heading from './components/Heading';
// import Input from './components/Input';
// import Oscar from './components/Oscar';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // };

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne',
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent',
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana',
  //   },
  // ];

  return (
    <>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
      {/* <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton> */}
      {/* <Toast position="center-bottom" /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      {/* <List
        items={[
          { id: 1, first: 'Bruce', last: 'Wayne' },
          { id: 2, first: 'Clark', last: 'Kent' },
          { id: 3, first: 'Princess', last: 'Diana' },
        ]}
        onClick={item => console.log(item)}
      /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <ThemeContexProvider>
      <Box/>
    </ThemeContexProvider> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input value="" handleChange={event => console.log(event)} /> */}
      {/* <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicarprio</Heading>
      </Oscar>
      <Greet name="Emmanuel" isLoggedIn={false} /> */}
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
    </>
  );
}

export default App;
