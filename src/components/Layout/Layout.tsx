import { Box, Card, Typography, Grid, Button, ButtonProps, AppBarProps } from "@mui/material"
import AppBar from "../AppBar/AppBar"
import React from "react";


interface ChildProps {
    children: React.ReactNode;
}

interface TitleProps {
    children?: React.ReactNode;
}

interface ListViewWithChildren extends React.FC<ChildProps> {
    Header: HeaderWithChildrenProp
    Content: any;
    Button: React.FC<ButtonProps>
    AppBar: React.FC<AppBarProps>
}

interface HeaderWithChildrenProp extends React.FC<ChildProps> {
    Left: HeaderLeftProps
    Right: HeaderRightProps
}


interface HeaderRightProps extends React.FC<ChildProps> {
    PrimaryCTA: React.FC<ButtonProps>;
    SecondaryCTA: React.FC<ButtonProps>;
    children?: React.ReactNode
}

interface HeaderLeftProps extends React.FC<ChildProps> {
    Title: React.FC<TitleProps>
    children?: React.ReactNode
}


const ListView: ListViewWithChildren = ({ children }) => <div className="flex flex-col w-[100%] rounded"><Box p={2}>
    <Card>{children}</Card></Box></div>

const Header: HeaderWithChildrenProp = ({ children }) => <Grid container justifyContent="space-between" sx={{ padding: 4, borderBottom: "1px solid black" }}>{children}</Grid>

const ListViewContent: React.FC<any> = ({ children }) => <div className="p-4 h-[100%]">{children}</div>

const HeaderLeft: HeaderLeftProps = ({ children }) => <Grid item>{children}</Grid>
const HeaderRight: HeaderRightProps = ({ children }) => <Grid item display="flex" gap={4} flexDirection="row">{children}</Grid>


const Title: React.FC<TitleProps> = ({ children }) => <Typography variant="h3" >{children}</Typography>

const PrimaryCTA: React.FC<ButtonProps> = ({ children }) => <Button sx={{ height: 40 }} variant="contained" size="small" >{children}</Button>
const SecondaryCTA: React.FC<ButtonProps> = ({ children }) => <Button sx={{ height: 40 }} variant="outlined" >{children}</Button>

// const RandomButton: React.FC<ButtonProps> = ({ children, ...rest }) => <Button sx={{ height: 40 }} {...rest} >{children}</Button>

ListView.Header = Header
ListView.Content = ListViewContent
ListView.AppBar = AppBar
ListView.Button = Button
Header.Left = HeaderLeft
Header.Right = HeaderRight
HeaderLeft.Title = Title
HeaderRight.PrimaryCTA = PrimaryCTA
HeaderRight.SecondaryCTA = SecondaryCTA



export default ListView