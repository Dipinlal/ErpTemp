import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { SimpleTreeView } from "@mui/x-tree-view";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.grey[800]
      : theme.palette.grey[200],
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    display: "flex",
    alignItems: "center",
    [`& .${treeItemClasses.label}`]: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: "50%",
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(theme.palette.primary.main, 0.25)
        : theme.palette.primary.dark,
    color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const TreeWithCheckBox = ({ items, setSelect,checkedNodes }) => {
  const [checked, setChecked] = React.useState([]);

  useEffect(() => {
    setChecked(checkedNodes);
  }, [checkedNodes]);

  const handleToggle = (id, label) => {
    const currentIndex = checked.findIndex((item) => item.id === id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push({ id, label });
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setSelect(newChecked); // Update parent component with new selected items
  };

  const renderTreeItems = (items) =>
    items.map(({ id, label, children }) => (
      <StyledTreeItem key={id} itemId={id} label={
        <Box sx={{ display: "flex", alignItems: "center", cursor: !children ? "pointer" : "default" }}
        onClick={!children ? () => handleToggle(id, label) : undefined}>
          {!children && (
            <Checkbox
              size="small"
              checked={checked.some((item) => item.id === id)}
              onChange={() => handleToggle(id, label)}
              //onChange={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()} // Prevent triggering the tree node click
            />
          )}
          {label}
        </Box>
      }>
        {children && renderTreeItems(children)}
      </StyledTreeItem>
    ));

  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={items.map(({ id }) => id)}
      sx={{ overflowX: "hidden", height: 200, flexGrow: 1, minWidth: 250,scrollbarWidth:"thin" }}
    >
      {renderTreeItems(items)}
    </SimpleTreeView>
  );
};

export default TreeWithCheckBox;
