// import React from "react";
// import {
//   Drawer as MUIDrawer,
//   ListItem,
//   List,
//   ListItemIcon,
//   ListItemText,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { withRouter, useNavigate } from "react-router-dom";

// const useStyles = makeStyles({
//   drawer: {
//     width: "190px",
//   },
// });

// const Drawer = (props) => {
//   const { history } = props;
//   const navigate = useNavigate();
//   const classes = useStyles();
//   const itemsList = [
//     {
//       text: "Home",
//       icon: <InboxIcon />,
//       onClick: () => navigate("/rec"),
//     },
//     {
//       text: "About",
//       icon: <MailIcon />,
//       onClick: () => navigate("/login"),
//     },
//     {
//       text: "Contact",
//       icon: <MailIcon />,
//       onClick: () => navigate("/contact"),
//     },
//   ];
//   return (
//     <MUIDrawer variant="permanent" className={classes.drawer}>
//       <List>
//         {itemsList.map((item, index) => {
//           const { text, icon, onClick } = item;
//           return (
//             <ListItem button key={text} onClick={onClick}>
//               {icon && <ListItemIcon>{icon}</ListItemIcon>}
//               <ListItemText primary={text} />
//             </ListItem>
//           );
//         })}
//       </List>
//     </MUIDrawer>
//   );
// };

// export default Drawer;
