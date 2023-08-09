import React, { useState } from 'react'
import "./Homepage.css"

import Footer from '../components/Footer'
import { Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import {IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp} from "react-icons/io5"
import  Navbar  from '../components/Navbar'

import UserProfile from './UserProfile'

const Homepage = () => {
  const [amount, setAmount] = useState(0)
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    alert("Currency added successfully")
  }

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }

  return (
    <div>
        <div>
            <Navbar />
        </div>
        
        <div className='main-div'>
          <div  className='container'>
            <div>
              <h2 className='h2'>This is Crypto Exchange form</h2>
            </div>
            <div className='form-div'>
              <form className='form' onSubmit={handleSubmit}><br />
                <label className='label'>Add your currency from here</label> <br />
                <select className='country'>
                <option value="">Country</option>
                  <option value="$">United States</option>
                  <option value="€">European Union</option>
                  <option value="£">United Kingdom</option>
                  <option value="¥">Japan</option>
                  <option value="CHf">Switzerland</option>
                  <option value="$">Australia</option>
                  <option value="CAD">Canada</option>
                  <option value="¥">China</option>
                  <option value="₹">India</option>
                  <option value="₽">Russia</option>
                  <option value="₩">South Korea</option>
                  <option value="R$">Brazil</option>
                  <option value="Mex$">Mexico</option>
                  <option value="R">South Africa</option>
                  <option value="₺">Turkey</option>
                </select><br /> <br />
                <label>Enter Amount</label><br />
                <input className='input' type="number" placeholder='Enter Amount Here' onChange={(e)=> setAmount(e.target.value)} /><br />

                <input className='submit' type="submit" />
              </form>
            </div>
            </div>
            <div className='account-div'>
              <h2>User account details</h2>
              <div>
                {/* <h3>Account Number :- xxxxxxxxx2345</h3>
                <h3>Amount        :- xxx000</h3>
                 <p>Reffered By   :- Saurav</p> */}
                 <UserProfile  />
              </div>
            </div>
        </div>
        <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider  />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
        <Footer />
    </div>
   
  )
}

export default Homepage  




