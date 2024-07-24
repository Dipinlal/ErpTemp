// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
// import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
// import { SimpleTreeView } from "@mui/x-tree-view";

// const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
//   color:
//     theme.palette.mode === "light"
//       ? theme.palette.grey[800]
//       : theme.palette.grey[200],
//   [`& .${treeItemClasses.content}`]: {
//     borderRadius: theme.spacing(0.5),
//     padding: theme.spacing(0.5, 1),
//     margin: theme.spacing(0.2, 0),
//     [`& .${treeItemClasses.label}`]: {
//       fontSize: "0.8rem",
//       fontWeight: 500,
//     },
//   },
//   [`& .${treeItemClasses.iconContainer}`]: {
//     borderRadius: "50%",
//     backgroundColor:
//       theme.palette.mode === "light"
//         ? alpha(theme.palette.primary.main, 0.25)
//         : theme.palette.primary.dark,
//     color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
//     padding: theme.spacing(0, 1.2),
//   },
//   [`& .${treeItemClasses.groupTransition}`]: {
//     marginLeft: 15,
//     paddingLeft: 18,
//     borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
//   },
// }));



// export default function CustomizedTreeView({ items, setSelect }) {
//   const renderTreeItems = (items) =>
//     items.map(({ id, label, children }) => (
//       <StyledTreeItem key={id} itemId={id} label={label} onClick={()=>setSelect(id)}>
//         {children && renderTreeItems(children)}
//       </StyledTreeItem>
//     ));
//   return (
//     <SimpleTreeView
//       aria-label="customized"
//       defaultExpandedItems={items.map(({ id }) => id)}
//       sx={{ overflowX: "hidden", minHeight: 270, flexGrow: 1, maxWidth: 300 }}
//     >
//       {renderTreeItems(items)}
//     </SimpleTreeView>
//   );
// }
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { SimpleTreeView } from "@mui/x-tree-view";
import { useTheme } from '@mui/material/styles';  // Import useTheme

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.mode === "light" ? theme.palette.grey[800] : theme.palette.grey[200],
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: "50%",
    backgroundColor: theme.palette.mode === "light" ? alpha(theme.palette.primary.main, 0.25) : theme.palette.primary.dark,
    color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export default function CustomizedTreeView({ items, setSelect }) {
  const theme = useTheme();  // Use theme from context
  const renderTreeItems = (items) =>
    items.map(({ id, label, children }) => (
      <StyledTreeItem key={id} itemId={id} label={label} onClick={() => setSelect(id)}>
        {children && renderTreeItems(children)}
      </StyledTreeItem>
    ));

  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={items.map(({ id }) => id)}
      sx={{ overflowX: "hidden", minHeight: 270, flexGrow: 1, maxWidth: 300, bgcolor: theme.palette.background.default }}
    >
      {renderTreeItems(items)}
    </SimpleTreeView>
  );
}
