// import React from "react";
// import {
//   Box,
//   Text,
//   Flex,
//   Spacer,
//   Image,
//   Input,
//   Button,
//   HStack,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverBody,
//   Hide
// } from "@chakra-ui/react";

// import { TriangleDownIcon } from "@chakra-ui/icons";

// import { Link, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../ContextApi/AuthContext";

// import { useNavigate } from "react-router-dom";
// import logo from "./logo.png"
// import Login from "../pages/Login";
// import {Signup} from "../pages/Register";


// export const Navbar = () => {
//   const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
//   const navigate = useNavigate();

//   return (
//     <Box cursor="pointer" h={"100px"}>
//       <HStack m="auto" justifyContent={"space-between"}>
//         <Box  ml={35}>
//           <Link to="/">
//             <Image src={logo} alt="logo" w="120px" h="80px" />
//           </Link>
//         </Box>
        
//             {isAuth === true ? (
//               <Popover trigger="hover">
//                 <PopoverTrigger>
//                   <Box
//                     fontWeight={"600"}
//                     fontSize="16px"
//                     m="auto"
//                     // mt="-5px"
//                     w="90px"
//                     textAlign="center"
//                   >
//                     {Authdata[0].first_name}
//                     <TriangleDownIcon
//                       // ml="2px"
//                       fontSize={"9px"}
//                       _hover={{ transform: "rotate(180deg)" }}
//                     />
//                   </Box>
//                 </PopoverTrigger>
//                 <PopoverContent
//                   w="90px"
//                   // mb={10}
//                   boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
//                 >
//                   <PopoverBody
//                     // h={"30px"}
//                     // pl="6"
//                     fontSize="14px"
//                     _hover={{ fontWeight: "bold" }}
//                   >
//                     <Box
//                       color="#333368"
//                       onClick={() => {
//                         setisAuth(false);
//                         return <Navigate to="/" />;
//                       }}
//                     >
//                       Sign Out
//                     </Box>
//                   </PopoverBody>
//                 </PopoverContent>
//               </Popover>
//             ) : (
//               <Box display={"flex"}>
//                 <Login />
//                 <Signup />
//               </Box>
//             )}
        
//           </HStack>
        
//     </Box>
//   );
// };


import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
    
  return (
    <div>
        <div className='navbar'>
            <div >
                <Link to="/">
                <img className='image' src="https://www.platinx.io/wp-content/uploads/2022/03/logo-new-2.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/signup">
                    <button className='regButton'>Register</button>
                </Link>
                <Link to="/login">
                    <button className='logButton'>Login</button>
                   
                </Link>
                <Link to="/admin">
                    <button className='logButton'>Admin</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar