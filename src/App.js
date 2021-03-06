import { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Header from './Header';
import Input from './components/Input';
import Button from './components/Button';
import SecondaryButton from './components/SecondaryButton';
import ResultForm from './ResultForm';
import Card from './components/Card';

const theme = {
  colors: {
    green: '#25CC88',
    darkPurple: '#2B2C54',
    purple: '#494b7c',
    lightPurple: '#8687A8',
    grey: '#98989D',
    white: '#FFFFFF'
  }, 
  fonts: {
    regular: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '21px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'
    },
    medium: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'

    },
    heading: {
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'
    }, 
    subHeading: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#2B2C54'
    },
    description: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#E5E5E5'
    },
    label: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#98989D'
    }
  },
  fontWeight: {}
}

function App() {
  const steps = [
    'welcome',
    'name',
    'addressLine',
    'city',
    'state',
    'zipCode',
    'reviewing',
    'submitted'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [name, setName] = useState(null);
  const [addressLine, setAddressLine] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
          <FormContainer
            results={steps[currentIndex] === 'reviewing' ? 'true' : steps[currentIndex] === 'welcome' ? 'true' : 'false'}
          >
            {
              steps[currentIndex] === 'name' ?
                <Input 
                  heading='Name'
                  label='Patrick Mahomes'
                  value={name}
                  handleChange={setName}
                /> : steps[currentIndex] === 'addressLine' ? 
                  <Input 
                    heading='Address'
                    label='1 Arrowhead Drive'
                    value={addressLine}
                    handleChange={setAddressLine}
                  /> : steps[currentIndex] === 'city' ? 
                    <Input 
                      heading='City'
                      label='Kansas City'
                      value={city}
                      handleChange={setCity}
                    /> : steps[currentIndex] === 'state' ? 
                      <Input
                        heading='State'
                        label='MO'
                        value={state}
                        handleChange={setState}
                      /> : steps[currentIndex] === 'zipCode' ?
                        <Input 
                          heading='Zip Code'
                          label='64129'
                          value={zipCode}
                          handleChange={setZipCode}
                        /> : null
            }
            {
              steps[currentIndex] === 'welcome' ? 
                <><Card step={steps[currentIndex]}/><ButtonContainer>
                <Button 
                  text='Start'
                  handleClick={() => setCurrentIndex(currentIndex + 1)}
                ></Button>
              </ButtonContainer></> :
                steps[currentIndex] === 'reviewing' ? 
                  <ResultForm
                    name={name}
                    setName={setName}
                    addressLine={addressLine}
                    setAddressLine={setAddressLine}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                  /> : steps[currentIndex] === 'submitted' ? 
                    <Card step={steps[currentIndex]} name={name}/> :
                    <ButtonContainer>
                      <SecondaryButton
                        text='Back'
                        handleClick={() => setCurrentIndex(currentIndex - 1)}
                      />
                      <Button 
                        text='Next'
                        handleClick={() => setCurrentIndex(currentIndex + 1)}
                      ></Button>
                    </ButtonContainer>
            }
          </FormContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background: ${props => props.theme.colors.darkPurple};
  height: 100%;
  display: flex;
  flex-direction: column;
  `;

const FormContainer = styled.div`
  padding: 32px;
  margin-top: ${props => props.results === 'true' ? '50px' : '110px'};
  padding-top: ${props => props.results === 'true' ? '0' : '32px'};
  @media (min-width: 800px) {
    padding: 32px 25%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export default App;
