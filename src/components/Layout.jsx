import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useTheme } from '@mui/material'
import { format } from 'date-fns'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const drawerWidht = 240

const Layout = ({ children }) => {

    const menuItem = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/add'
        }
    ]

    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    return (
        <Box sx={{ display: "flex" }}>
            {/* app bar */}
            <AppBar
            sx={{width:`calc(100% - ${drawerWidht}px)`}}
            elevation={0}
            color='secondary'
            >
                <Toolbar>
                    <Typography
                        //yeene khod ad mafik space horizontal 
                    sx={{flexGrow:1}}
                    >
                       Today is the {format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Khaled
                    </Typography>
                    <Avatar src="/kh.jpeg" sx={(theme)=>({
                        marginLeft:theme.spacing(2)
                    })}/>
                </Toolbar>
            </AppBar>

            {/* side bar */}
            <Drawer
                sx={{
                    width: drawerWidht,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidht,
                        boxSizing: 'border-box',
                    },
                }}
                variant='permanent'
                anchor='left'
            >
                <Box>
                    <Typography variant='h5'
                    sx={(theme) => ({
                        padding: theme.spacing(2)  // Access the theme's spacing function
                      })}
                    >
                        Khaled Notes
                    </Typography>
                </Box>
                {/* list links */}
                <List>
                    {menuItem.map((elem) => (
                        <ListItem
                            button
                            key={elem.text}
                            onClick={() => navigate(elem.path)}
                            sx={{
                                backgroundColor: location.pathname === elem.path ? '#f4f4f4' : 'transparent', // Apply background if active
                                cursor: "pointer"
                                // '&:hover': {
                                //   backgroundColor: 'lightblue', // Optional: Add hover effect
                                // },
                            }}

                        >
                            <ListItemIcon>{elem.icon}</ListItemIcon>
                            <ListItemText primary={elem.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Box sx={(theme) => ({
                background: "#f9f9f9",
                width: "100%",
                padding: theme.spacing(3)  // Access the theme's spacing function
            })}>
                <Box 
              sx={{ ...theme.mixins.toolbar }}
                ></Box>
                {children}
            </Box>

        </Box>
    )
}

export default Layout
