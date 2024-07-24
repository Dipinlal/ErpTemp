// Import dependencies
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { primaryButtonColor, primaryColor } from '../../../../config';
import { useTheme } from '../../../../config/themeContext';

// Style for individual column tiles


// Sortable item component
const SortableItemComponent = ({ id, item }) => {
  const { currentTheme,switchTheme } = useTheme();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id
  });

  const columnStyle = {
    backgroundColor: currentTheme.primaryColor,
    color: primaryButtonColor,
    padding: '8px',
    margin: '4px',
    textAlign: 'center',
    border: '1px solid #ddd',
    cursor: 'pointer',
    borderRadius: '2px',
    flex: '1 0 auto',
    minWidth: '100px'
  };

  // Use the transform style provided by the hook
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...columnStyle
  };

  return (
    <Paper ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Typography variant="body2">{item.name}</Typography>
    </Paper>
  );
};

export default SortableItemComponent;
